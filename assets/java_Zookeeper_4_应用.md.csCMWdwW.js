import{_ as e,c as o,o as a,a4 as r}from"./chunks/framework.DpC1ZpOZ.js";const Z=JSON.parse('{"title":"Zookeeper 的应用","description":"","frontmatter":{},"headers":[],"relativePath":"java/Zookeeper/4_应用.md","filePath":"java/Zookeeper/4_应用.md","lastUpdated":null}'),t={name:"java/Zookeeper/4_应用.md"},p=r('<h1 id="zookeeper-的应用" tabindex="-1">Zookeeper 的应用 <a class="header-anchor" href="#zookeeper-的应用" aria-label="Permalink to &quot;Zookeeper 的应用&quot;">​</a></h1><h2 id="zookeeper-应用场景" tabindex="-1">Zookeeper 应用场景 <a class="header-anchor" href="#zookeeper-应用场景" aria-label="Permalink to &quot;Zookeeper 应用场景&quot;">​</a></h2><h3 id="统一命名服务" tabindex="-1">统一命名服务 <a class="header-anchor" href="#统一命名服务" aria-label="Permalink to &quot;统一命名服务&quot;">​</a></h3><p>在分布式环境中，应用程序经常需要对服务进行统一命名，以便识别不同的服务和快速获取服务列表，应用程序可以将服务名称和服务地址信息维护在 Zookeeper 上，客户端通过 Zookeeper 获取可用服务列表。</p><h3 id="配置管理" tabindex="-1">配置管理 <a class="header-anchor" href="#配置管理" aria-label="Permalink to &quot;配置管理&quot;">​</a></h3><p>在分布式环境下，应用程序可以将配置文件统一在 Zookeeper 上管理。配置信息可以按照系统配置、告警配置、业务开关配置等分类存储在不同的 Znode 上，各个服务在启动的时候从 Zookeeper 上读取配置，同时监听各个节点的 Znode 数据，一旦 Znode 中的配置被修改，Zookeeper 将通知各个服务然后在线更新配置。</p><p>使用 Zookeeper 做统一配置管理，不但避免了维护散落在各个服务器上的配置文件的复杂性，同时在配置信息变化时能够及时通知各个服务器在线更新配置，而不用重启服务。</p><h3 id="集群管理" tabindex="-1">集群管理 <a class="header-anchor" href="#集群管理" aria-label="Permalink to &quot;集群管理&quot;">​</a></h3><p>在分布式环境下，实时管理每个服务的状态是 Zookeeper 使用最广的场景，常见的 Hbase、Kafka 和 HDFS 等集群都依赖 Zookeeper 做统一的状态管理。</p><h3 id="分布式通知协调" tabindex="-1">分布式通知协调 <a class="header-anchor" href="#分布式通知协调" aria-label="Permalink to &quot;分布式通知协调&quot;">​</a></h3><p>基于 Znode 的临时结点和 Watch 特性，应用程序可以很容易地实现一个分布式通知协调系统。比如在集群中为每个服务器都创建一个周期为 30 s 的临时节点作为服务状态监控，要求每个服务每 10 s 定时向 Zookeeper 汇报监控状态。当 Zookeeper 连接 30 s 未收到服务的状态反馈时，则可以认为该服务异常，将其从服务列表中移除，同时将该结果通知其他监控该节点状态的服务。</p><h3 id="分布式锁" tabindex="-1">分布式锁 <a class="header-anchor" href="#分布式锁" aria-label="Permalink to &quot;分布式锁&quot;">​</a></h3><p>由于 Zookeeper 是强一致性的，多个客户端同时在 Zookeeper 上创建相同的 Znode 时，只有一个能创建。基于该机制，应用程序可以实现锁的独占性，当多个客户端同时在 Zookeeper 上创建相同的 Znode 时，创建成功的那个客户端将得到锁，其他客户端则等待。</p><p>将锁节点设置为 EPHEMERAL_SEQUENTIAL，则该 Znode 可掌握全局锁的访问时序。</p><h2 id="zookeeper-实战" tabindex="-1">Zookeeper 实战 <a class="header-anchor" href="#zookeeper-实战" aria-label="Permalink to &quot;Zookeeper 实战&quot;">​</a></h2><ul><li><a href="https://zookeeper.apache.org/" target="_blank" rel="noreferrer">Zookeeper 官网</a></li><li><a href="https://snailclimb.gitee.io/javaguide/#/docs/system-design/distributed-system/zookeeper/zookeeper-in-action" target="_blank" rel="noreferrer">Zookeeper 实战</a></li></ul>',16),i=[p];function n(l,h,s,d,k,c){return a(),o("div",null,i)}const u=e(t,[["render",n]]);export{Z as __pageData,u as default};
