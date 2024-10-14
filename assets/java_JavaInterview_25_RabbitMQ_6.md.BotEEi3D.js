import{_ as s,c as n,o as a,a4 as i}from"./chunks/framework.DpC1ZpOZ.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"java/JavaInterview/25_RabbitMQ_6.md","filePath":"java/JavaInterview/25_RabbitMQ_6.md","lastUpdated":1728901392000}'),p={name:"java/JavaInterview/25_RabbitMQ_6.md"},l=i(`<p>RabbitMQ补充6道</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RocketMq是什么 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">一个纯Java、分布式队列模型的消息中间件，具有高可用、高可靠、高实时、低延迟的特点。（记住这</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">句就行了）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RocketMq有什么功能 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">先答出消息中间件的通用功能</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、业务解耦：这也是发布订阅的消息模型。生产者发送指令到MQ中，然后下游订阅这类指令的</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">消费者会收到这个指令执行相应的逻辑，整个过程与具体业务无关，抽象成了一个发送指令，存储</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">指令，消费指令的过程。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、前端削峰：前端发起的请求在短时间内太多后端无法处理，可以堆积在MQ中，后端按照一定</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">的顺序处理，秒杀系统就是这么实现的。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">再说说RocketMq的特点：</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、亿级消息的堆积能力，单个队列中的百万级消息的累积容量。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、高可用性：Broker服务器支持多Master多Slave的同步双写以及Master多Slave的异步复制模</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">式，其中同步双写可保证消息不丢失。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、高可靠性：生产者将消息发送到Broker端有三种方式，同步、异步和单向，其中同步和异步都</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">可以保证消息成功的成功发送。Broker在对于消息刷盘有两种策略：同步刷盘和异步刷盘，其中</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">同步刷盘可以保证消息成功的存储到磁盘中。消费者的消费模式也有集群消费和广播消费两种，默</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">认集群消费，如果集群模式中消费者挂了，一个组里的其他消费者会接替其消费。综上所述，是高</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">可靠的。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、支持分布式事务消息：这里是采用半消息确认和消息回查机制来保证分布式事务消息的，下面</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">会详细描述。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、支持消息过滤：建议采用消费者业务端的tag过滤</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、支持顺序消息：消息在Broker中是采用队列的FIFO模式存储的，也就是发送是顺序的，只要保</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">证消费的顺序性即可。</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、支持定时消息和延迟消息：Broker中由定时消息的机制，消息发送到Broker中，不会立即被</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Consumer消费，会等到一定的时间才被消费。延迟消息也是一样，延迟一定时间之后才会被</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Consumer消费。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">能说出这么多已经不错了��</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RoctetMq的架构 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">回到最开始的问题，RocketMq的原理是什么，也就是怎么实现的，先看图</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RocketMq一共有四个部分组成：NameServer，Broker，Producer生产者，Consumer消费者，每一</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">部分都是集群部署的。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">NameServer </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">NameServer是一个无状态的服务器，角色类似于Dubbo的Zookeeper，但比Zookeeper更轻量。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 特点：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">每个NameServer结点之间是相互独立，彼此没有任何信息交互。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Nameserver被设计成几乎是无状态的，通过部署多个结点来标识自己是一个伪集群，Producer在</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">发送消息前从NameServer中获取Topic的路由信息也就是发往哪个Broker,Consumer也会定时从</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">NameServer获取topic的路由信息，Broker在启动时会向NameServer注册，并定时进行心跳连</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">接，且定时同步维护的Topic到NameServer。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 功能主要有两个：</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、跟Broker结点保持长连接。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、维护Topic的路由信息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Broker </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">消息存储和中转角色，负责存储和转发消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Broker内部维护着一个个Message Queue，用来存储消息的索引，真正存储消息的地方是</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CommitLog（日志文件）。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">单个Broker与所有的Nameserver保持着长连接和心跳，并会定时将Topic信息同步到</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">NameServer，和NameServer的通信底层是通过Netty实现的。Producer </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">消息生产者，业务端负责发送消息，由用户自行实现和分布式部署。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Producer的负载均衡 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Producer的负载均衡是由MQFaultStratege.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">selectOneMessageQueue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()来实现的。这个方法就是随机</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">选择一个要发送消息的broker来达到负载均衡的效果，选择的标准：尽量不选刚刚选过的broker，尽量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">不选发送上条消息延迟过高或没有响应的broker，也就是找到一个可用的broker。（源码不贴了）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">发送的三种策略 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Producer发送消息有三种方式：同步、异步和单向</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">同步：同步发送是指发送方发出数据后等待接收方发回响应后在发送下一个数据包。一般用于重要</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">的消息通知，如重要的通知邮件或者营销短信等。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">异步：异步发送是指发送方发出数据后不等接收方发回响应就发出下一个数据包。一般用于可能链</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">路耗时较长而对响应时间比较敏感的场景。如视频上传后通知启动转码服务。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">单向：单向发送是指只负责发送消息而不等待接收方发送响应且没有回调函数，适合那些耗时比较</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">短且对可靠性要求不高的场景，例如日志收集。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Consumer </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">消息消费者，负责消费消息，由用户自行实现并进行集群部署。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">推拉消费模式 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PULL：拉取型消费者主动从broker中拉取消息消费，只要拉取到消息，就会启动消费过程，称为</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">主动型消费。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PUSH：推送型消费者就是要注册消息的监听器，监听器是要用户自行实现的。当消息达到broker</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">服务器后，会触发监听器拉取消息，然后启动消费过程。但是从实际上看还是从broker中拉取消</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">息，称为被动消费型。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">集群还是广播 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">看业务需求，默认是集群消费。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">集群消费：broker中的一条消息会发送给订阅这个topic的一个消费组里的唯一一个消费者进行消</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">费。如果这个消费者挂掉了，组里的其他消费者会接替它进行消费。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">广播消费：broker中的一条消息会发送给订阅这个topic的一个消费组里的每一个消费者进行消</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">费。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Consumer的负载均衡 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Consumer的负载均衡是指将MessageQueue中的消息队列分配到消费者组里的具体消费者。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Consumer在启动的时候会实例化rebalanceImpl，这个类负责消费端的负载均衡。通过</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rebalanceImpl调用allocateMesasgeQueueStratage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">allocate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()完成负载均衡。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">每次有新的消费者加入到组中就会重新做一下分配。每10秒自动做一次负载均衡。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RocketMq消息模型（专业术语） </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">初学者可以了解下。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Message 就是要传输的消息，一个消息必须有一个主题，一条消息也可以有一个可选的Tag（标签）和额外的键</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">值对，可以用来设置一个业务的key，便于开发中在broker服务端查找消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Topic </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">主题，是消息的第一级类型，每条消息都有一个主题，就像信件邮寄的地址一样。主题就是我们具体的</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">业务，比如一个电商系统可以有订单消息，商品消息，采购消息，交易消息等。Topic和生产者和消费</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">者的关系非常松散，生产者和Topic可以是1对多，多对1或者多对多，消费者也是这样。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Tag </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">标签，是消息的第二级类型，可以作为某一类业务下面的二级业务区分，它的主要用途是在消费端的消</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">息过滤。比如采购消息分为采购创建消息，采购审核消息，采购推送消息，采购入库消息，采购作废消</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">息等，这些消息是同一Topic和不同的Tag，当消费端只需要采购入库消息时就可以用Tag来实现过滤，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">不是采购入库消息的tag就不处理。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Group </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">组，可分为ProducerGroup生产者组合ConsumerGroup消费者组，一个组可以订阅多个Topic。一般</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">来说，某一类相同业务的生产者和消费者放在一个组里。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Message Queue </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">消息队列，一个Topic可以划分成多个消息队列。Topic只是个逻辑上的概念，消息队列是消息的物理管</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">理单位，当发送消息的时候，Broker会轮询包含该Topic的所有消息队列，然后将消息发出去。有了消</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">息队列，可以使得消息的存储可以分布式集群化，具有了水平的扩展能力。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">oﬀset </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">是指消息队列中的oﬀset，可以认为就是下标，消息队列可看做数组。oﬀset是java long型，64位，理</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">论上100年不会溢出，所以可以认为消息队列是一个长度无限的数据结构。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 核心问题 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">顺序消息 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">如何保证顺序消息？</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 顺序由producer发送到broker的消息队列是满足FIFO的，所以发送是顺序的，单个queue里的消</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">息是顺序的。多个Queue同时消费是无法绝对保证消息的有序性的。所以，同一个topic，同一个</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">queue，发消息的时候一个线程发送消息，消费的时候一个线程去消费一个queue里的消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">追问：怎么保证消息发到同一个queue里？</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RocketMQ给我们提供了MessageQueueSelector接口，可以重写里面的接口，实现自己的算</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">法，比如判断i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，那就发送消息到queue1否则发送到queue2。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">消息过滤 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">如何实现消息过滤？</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 有两种方案，一种是在broker端按照Consumer的去重逻辑进行过滤，这样做的好处是避免了无</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">用的消息传输到Consumer端，缺点是加重了Broker的负担，实现起来相对复杂。另一种是在</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Consumer端过滤，比如按照消息设置的tag去重，这样的好处是实现起来简单，缺点是有大量无</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">用的消息到达了Consumer端只能丢弃不处理。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">消息去重 如果由于网络等原因，多条重复消息投递到了Consumer端，你怎么进行消息去重？</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 这个得先说下消息的幂等性原则：就是用户对于同一种操作发起的多次请求的结果是一样的，不</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">会因为操作了多次就产生不一样的结果。只要保持幂等性，不管来多少条消息，最后处理结果都一</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">样，需要Consumer端自行实现。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 去重的方案：因为每个消息都有一个MessageId, 保证每个消息都有一个唯一键，可以是数据库的</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">主键或者唯一约束，也可以是Redis缓存中的键，当消费一条消息前，先检查数据库或缓存中是否</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">存在这个唯一键，如果存在就不再处理这条消息，如果消费成功，要保证这个唯一键插入到去重表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">中。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">分布式事务消息 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">你知道半消息吗？RocketMQ是怎么实现分布式事务消息的？</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 半消息：是指暂时还不能被Consumer消费的消息，Producer成功发送到broker端的消息，但是</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">此消息被标记为“暂不可投递”状态，只有等Producer端执行完本地事务后经过二次确认了之后，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Consumer才能消费此条消息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">上图就是分布式事务消息的实现过程，依赖半消息，二次确认以及消息回查机制。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、Producer向broker发送半消息</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、Producer端收到响应，消息发送成功，此时消息是半消息，标记为“不可投递”状态，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Consumer消费不了。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、Producer端执行本地事务。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、正常情况本地事务执行完成，Producer向Broker发送Commit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Rollback，如果是Commit，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Broker端将半消息标记为正常消息，Consumer可以消费，如果是Rollback，Broker丢弃此消息。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、异常情况，Broker端迟迟等不到二次确认。在一定时间后，会查询所有的半消息，然后到</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Producer端查询半消息的执行情况。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、Producer端查询本地事务的状态</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、根据事务的状态提交commit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rollback到broker端。（</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，7是消息回查）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">消息的可用性 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RocketMQ如何能保证消息的可用性</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">可靠性？（这个问题的另一种问法：如何保证消息不丢失）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 答案如下，要从Producer，Consumer和Broker三个方面来回答。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">从Producer角度分析，如何确保消息成功发送到了Broker？</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、可以采用同步发送，即发送一条数据等到接受者返回响应之后再发送下一个数据包。如果返回</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">响应OK，表示消息成功发送到了broker，状态超时或者失败都会触发二次重试。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、可以采用分布式事务消息的投递方式。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、如果一条消息发送之后超时，也可以通过查询日志的API，来检查是否在Broker存储成功。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 总的来说，Producer还是采用同步发送来保证的。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">从Broker角度分析，如何确保消息持久化</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、消息只要持久化到CommitLog（日志文件）中，即使Broker宕机，未消费的消息也能重新恢</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">复再消费。</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、Broker的刷盘机制：同步刷盘和异步刷盘，不管哪种刷盘都可以保证消息一定存储在</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pagecache中（内存中），但是同步刷盘更可靠，它是Producer发送消息后等数据持久化到磁盘</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">之后再返回响应给Producer。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、Broker支持多Master多Slave同步双写和多Master多Slave异步复制模式，消息都是发送给</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Master主机，但是消费既可以从Master消费，也可以从Slave消费。同步双写模式可以保证即使</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Master宕机，消息肯定在Slave中有备份，保证了消息不会丢失。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">从Consumer角度分析，如何保证消息被成功消费？</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Consumer自身维护了个持久化的oﬀset（对应Message Queue里的min oﬀset），用来标记已经</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">成功消费且已经成功发回Broker的消息下标。如果Consumer消费失败，它会向Broker发回消费</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">失败的状态，发回成功才会更新自己的oﬀset。如果发回给broker时broker挂掉了，Consumer会</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">定时重试，如果Consumer和Broker一起挂掉了，消息还在Broker端存储着，Consumer端的</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">oﬀset也是持久化的，重启之后继续拉取oﬀset之前的消息进行消费。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">刷盘实现 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RocketMQ提供了两种刷盘策略：同步刷盘和异步刷盘</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">同步刷盘：在消息达到Broker的内存之后，必须刷到commitLog日志文件中才算成功，然后返回</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Producer数据已经发送成功。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">异步刷盘：异步刷盘是指消息达到Broker内存后就返回Producer数据已经发送成功，会唤醒一个</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">线程去将数据持久化到CommitLog日志文件中。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 优缺点分析：同步刷盘保证了消息不丢失，但是响应时间相对异步刷盘要多出10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">左右，适用于</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">对消息可靠性要求比较高的场景。异步刷盘的吞吐量比较高，RT小，但是如果broker断电了内存</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">中的部分数据会丢失，适用于对吞吐量要求比较高的场景。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">负载均衡 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">你说下RocketMQ的负载均衡是如何实现的？</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RocketMQ是分布式消息服务，负载均衡时再生产和消费的客户端完成的。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">上面讲过，nameServer保存着Topic的路由信息，路由记录了broker集群节点的通讯地址，broker的名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">称以及读写队列数量等信息。写队列writeQueue表示生产者可以写入的队列数，如果不做配置默认为</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，也就是queueId是0，</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，3.broker收到消息后根据queueId生成消息队列，生产者负载均衡的过</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">程的实质就是选择broker集群和queueId的过程。读队列readQueue表示broker中可以供消费者读取信</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">息的队列个数，默认也是4个，也就是queueId也是0,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">。消费者拿到路由信息后会选择queueId，从</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">对应的broker中读取数据消费。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 下面我从生产者负载均衡和消费者负载均衡两个角度来说明：生产者的负载均衡：实质是在选择MessageQueue对象（内部包含了brokerName和queueId），</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">第一种是默认策略，从MessageQueue列表中随机选择一个，算法时通过自增随机数对列表打下</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">取余得到位置信息，但获得的MessageQueue所在集群不能是上次失败集群。第二种是超时容忍</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">策略，先随机选择一个MessageQueue，如果因为超时等异常发送失败，会优先选择该broker集</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">群下其他MessageQueue发送，如果没找到就从之前发送失败的Broker集群中选一个进行发送，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">若还没有找到才使用默认策略。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">消费者的负载均衡：这里可选的有六种算法。 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、平均分配算法</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、环形算法3、指定机房算法</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、就近机房算法</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、统一哈希算法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 使用一致性哈希算法进行负载，每次负载都会重建一致性hash路由表，获取本地客户端负责的所有队</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">列信息。默认的hash算法为MD5，假设有4个消费者客户端和2个消息队列mq1和mq2，通过hash后分</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">布在hash环的不同位置，按照一致性hash的顺时针查找原则，mq1被client2消费，mq2被client3消</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">费。</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、手动配置算法</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 总结 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">今天主要讲了RocketMq的基本架构以及消息是怎么发送，存储和消费的，要掌握NameServer、</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Broker、Producer、Consumer各自的职责是什么，在消息这方面都做了什么努力，比如保证高可用、</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">保证顺序、保证分布式、实现过滤、实现去重以及怎么做负载均衡等等。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br></div></div>`,2),e=[l];function r(k,E,h,t,c,b){return a(),n("div",null,e)}const g=s(p,[["render",r]]);export{u as __pageData,g as default};
