import{_ as a,c as e,o as t,a4 as r}from"./chunks/framework.DpC1ZpOZ.js";const _=JSON.parse('{"title":"消息队列","description":"","frontmatter":{},"headers":[],"relativePath":"java/1_消息队列.md","filePath":"java/1_消息队列.md","lastUpdated":null}'),o={name:"java/1_消息队列.md"},i=r('<h1 id="消息队列" tabindex="-1">消息队列 <a class="header-anchor" href="#消息队列" aria-label="Permalink to &quot;消息队列&quot;">​</a></h1><p>消息队列中间件是<strong>分布式系统</strong>中重要的组件，主要用于：异步处理，应用解耦，流量削锋，消息通讯等问题，实现高性能，高可用，可伸缩和最终一致性架构。目前使用较多的消息队列有 ActiveMQ，RabbitMQ，ZeroMQ，Kafka，MetaMQ，RocketMQ。</p><h2 id="消息模型" tabindex="-1">消息模型 <a class="header-anchor" href="#消息模型" aria-label="Permalink to &quot;消息模型&quot;">​</a></h2><h3 id="_1-点对点" tabindex="-1">1. 点对点 <a class="header-anchor" href="#_1-点对点" aria-label="Permalink to &quot;1. 点对点&quot;">​</a></h3><p>消息生产者向消息队列中发送了一个消息之后，只能被一个消费者消费一次。</p><div align="center"><img src="https://gitee.com/duhouan/ImagePro/raw/master/java-notes/systemDesign/685a692f-8f76-4cac-baac-b68e2df9a30f.jpg" width="500px"></div><h3 id="_2-发布-订阅" tabindex="-1">2. 发布/订阅 <a class="header-anchor" href="#_2-发布-订阅" aria-label="Permalink to &quot;2. 发布/订阅&quot;">​</a></h3><p>消息生产者向频道发送一个消息之后，多个消费者可以从该频道订阅到这条消息并消费。</p><div align="center"><img src="https://gitee.com/duhouan/ImagePro/raw/master/java-notes/systemDesign/ddb5ff4c-4ada-46aa-9bf1-140bdb5e4676.jpg" width="500px"></div><p>发布与订阅模式和观察者模式有以下不同：</p><ul><li>观察者模式中，观察者和主题都知道对方的存在；而在发布与订阅模式中，发布者与订阅者不知道对方的存在，它们之间通过频道进行通信。</li><li>观察者模式是同步的，当事件触发时，主题会调用观察者的方法，然后等待方法返回；而发布与订阅模式是异步的，发布者向频道发送一个消息之后，就不需要关心订阅者何时去订阅这个消息，可以立即返回。</li></ul><div align="center"><img src="https://gitee.com/duhouan/ImagePro/raw/master/java-notes/systemDesign/bee1ff1d-c80f-4b3c-b58c-7073a8896ab2.jpg" width="500px"></div><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><h3 id="_1、异步处理" tabindex="-1">1、异步处理 <a class="header-anchor" href="#_1、异步处理" aria-label="Permalink to &quot;1、异步处理&quot;">​</a></h3><p>发送者将消息发送给消息队列之后，<strong>不需要同步等待消息接收者处理完毕，而是立即返回进行其它操作</strong>。消息接收者从消息队列中订阅消息之后异步处理。</p><p>比如：用户注册时，需要发注册邮件和注册短信。传统的做法有两种：</p><blockquote><p>1、串行方式</p></blockquote><p>将注册信息写入数据库成功后，发送注册邮件，再发送注册短信。以上三个任务全部完成后，返回给客户端。</p><p><img src="https://gitee.com/duhouan/ImagePro/raw/master/MessageQueuue/mq_4.png" alt="img" loading="lazy"></p><blockquote><p>2、并行方式</p></blockquote><p>将注册信息写入数据库成功后，发送注册邮件的同时，发送注册短信。以上三个任务完成后，返回给客户端。与串行的差别是，并行的方式可以减少处理的时间。</p><p><img src="https://gitee.com/duhouan/ImagePro/raw/master/MessageQueuue/mq_5.png" alt="img" loading="lazy"></p><p>引入消息队列，将不是必须的业务逻辑异步处理，注册邮件，发送短信写入消息队列后，直接返回，因此写入消息队列的速度很快，基本可以忽略，因此用户的响应时间可能是 50 ms。比串行提高了 3 倍，比并行提高了2 倍。</p><p><img src="https://gitee.com/duhouan/ImagePro/raw/master/MessageQueuue/mq_6.png" alt="img" loading="lazy"></p><p>只有在<strong>业务流程允许异步处理的情况</strong>下才能这么做，例如上面的注册流程中，如果要求用户对验证邮件进行点击之后才能完成注册的话，就不能再使用消息队列。</p><h3 id="_2、应用解耦" tabindex="-1">2、应用解耦 <a class="header-anchor" href="#_2、应用解耦" aria-label="Permalink to &quot;2、应用解耦&quot;">​</a></h3><p>如果模块之间不直接进行调用，模块之间耦合度就会很低，那么修改一个模块或者新增一个模块对其它模块的影响会很小，从而实现可扩展性。</p><p>通过使用消息队列，一个模块只需要向消息队列中发送消息，其它模块可以<strong>选择性地从消息队列中订阅消息</strong>从而完成调用。</p><h3 id="_3、流量削峰" tabindex="-1">3、流量削峰 <a class="header-anchor" href="#_3、流量削峰" aria-label="Permalink to &quot;3、流量削峰&quot;">​</a></h3><p>在高并发的场景下，如果短时间有大量的请求到达会压垮服务器。</p><p>可以将请求发送到消息队列中，服务器按照其处理能力从消息队列中订阅消息进行处理。</p><h3 id="_4、消息通讯" tabindex="-1">4、消息通讯 <a class="header-anchor" href="#_4、消息通讯" aria-label="Permalink to &quot;4、消息通讯&quot;">​</a></h3><p>消息队列一般都内置了高效的通信机制，因此也可以用在纯消息通讯。比如实现点对点消息队列，或者聊天室等，也就是消息队列的两种消息模式：点对点或发布 / 订阅模式。</p><h2 id="消费方式" tabindex="-1">消费方式 <a class="header-anchor" href="#消费方式" aria-label="Permalink to &quot;消费方式&quot;">​</a></h2><p>在 JMS (Java Message Service，Java 消息服务) 中，消息的产生和消费都是异步的。对于消费来说，JMS 的消费者可以通过两种方式来消费消息：同步方式和异步方式。</p><h3 id="_1、同步方式" tabindex="-1">1、同步方式 <a class="header-anchor" href="#_1、同步方式" aria-label="Permalink to &quot;1、同步方式&quot;">​</a></h3><p>订阅者或消费者通过 receive() 方法来接收消息，receive() 方法在接收到消息之前（或超时之前）将一直阻塞。</p><h3 id="_2、异步方式" tabindex="-1">2、异步方式 <a class="header-anchor" href="#_2、异步方式" aria-label="Permalink to &quot;2、异步方式&quot;">​</a></h3><p>订阅者或消费者可以注册为一个消息监听器。当消息到达之后，系统自动调用监听器的 onMessage() 方法。</p><h2 id="可靠性" tabindex="-1">可靠性 <a class="header-anchor" href="#可靠性" aria-label="Permalink to &quot;可靠性&quot;">​</a></h2><h3 id="发送端的可靠性" tabindex="-1">发送端的可靠性 <a class="header-anchor" href="#发送端的可靠性" aria-label="Permalink to &quot;发送端的可靠性&quot;">​</a></h3><p>发送端完成操作后一定能将消息成功发送到消息队列中。</p><p>实现方法：在本地数据库建一张消息表，将<strong>消息数据与业务数据保存在同一数据库实例</strong>里，这样就可以利用本地数据库的<strong>事务机制</strong>。事务提交成功后，将消息表中的消息转移到消息队列中，若转移消息成功则删除消息表中的数据，否则继续重传。</p><h3 id="接收端的可靠性" tabindex="-1">接收端的可靠性 <a class="header-anchor" href="#接收端的可靠性" aria-label="Permalink to &quot;接收端的可靠性&quot;">​</a></h3><p>接收端能够从消息队列成功消费一次消息。</p><p>两种实现方法：</p><ul><li>保证接收端处理消息的业务逻辑具有幂等性：只要具有幂等性，那么消费多少次消息，最后处理的结果都是一样的。（幂等性：<strong>被执行一次与连续执行多次的效果是一样的</strong>。）</li><li>保证消息具有唯一编号，并使用一张日志表来记录已经消费的消息编号。</li></ul><h2 id="带来的问题" tabindex="-1">带来的问题 <a class="header-anchor" href="#带来的问题" aria-label="Permalink to &quot;带来的问题&quot;">​</a></h2><h3 id="_1、系统可用性降低" tabindex="-1">1、系统可用性降低 <a class="header-anchor" href="#_1、系统可用性降低" aria-label="Permalink to &quot;1、系统可用性降低&quot;">​</a></h3><p>系统可用性在某种程度上降低，为什么这样说呢？</p><p>在加入消息队列之前，不用考虑消息丢失或者说消息队列挂掉等等的情况，但是，引入消息队列之后你就需要去考虑了。</p><h3 id="_2、系统复杂性提高" tabindex="-1">2、系统复杂性提高 <a class="header-anchor" href="#_2、系统复杂性提高" aria-label="Permalink to &quot;2、系统复杂性提高&quot;">​</a></h3><p>加入消息队列之后，你需要保证消息没有被重复消费、处理消息丢失的情况、保证消息传递的顺序性等问题。</p><h3 id="_3、一致性问题" tabindex="-1">3、一致性问题 <a class="header-anchor" href="#_3、一致性问题" aria-label="Permalink to &quot;3、一致性问题&quot;">​</a></h3><p>消息队列可以实现异步，消息队列带来的异步确实可以提高系统响应速度。但是，消息的真正消费者并没有正确消费消息，就会导致数据不一致的情况。</p>',55),h=[i];function l(n,s,d,p,c,u){return t(),e("div",null,h)}const g=a(o,[["render",l]]);export{_ as __pageData,g as default};
