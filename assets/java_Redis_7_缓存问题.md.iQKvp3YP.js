import{_ as a,c as e,o as t,a4 as r}from"./chunks/framework.DpC1ZpOZ.js";const g=JSON.parse('{"title":"缓存问题","description":"","frontmatter":{},"headers":[],"relativePath":"java/Redis/7_缓存问题.md","filePath":"java/Redis/7_缓存问题.md","lastUpdated":1728037326000}'),l={name:"java/Redis/7_缓存问题.md"},i=r('<h1 id="缓存问题" tabindex="-1">缓存问题 <a class="header-anchor" href="#缓存问题" aria-label="Permalink to &quot;缓存问题&quot;">​</a></h1><h2 id="缓存雪崩" tabindex="-1">缓存雪崩 <a class="header-anchor" href="#缓存雪崩" aria-label="Permalink to &quot;缓存雪崩&quot;">​</a></h2><h3 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-label="Permalink to &quot;问题描述&quot;">​</a></h3><p>缓存雪崩指的是<strong>一些被大量访问数据（热点缓存）在某一时刻大面积失效</strong>或者<strong>缓存服务器宕机</strong>，导致对应的请求直接到达数据库。</p><p>在有缓存的系统中，系统非常依赖于缓存，缓存分担了很大一部分的数据请求。当发生缓存雪崩时，数据库无法处理这么大的请求，导致数据库崩溃。</p><h3 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h3><p>针对热点缓存失效的情况：</p><ul><li>为了防止缓存在同一时间大面积过期导致的缓存雪崩，可以通过观察用户行为，合理设置缓存过期时间来实现；</li><li>热点缓存设置为永不失效。</li></ul><p>针对缓存服务器宕机的情况：</p><ul><li>为了防止缓存服务器宕机出现的缓存雪崩，可以使用分布式缓存，分布式缓存中每一个节点只缓存部分的数据，当某个节点宕机时可以保证其它节点的缓存仍然可用；</li><li>限流，避免同时处理大量的请求。</li></ul><p>此外，还可以通过 Redis 持久化机制保存的数据快速恢复缓存。</p><h2 id="缓存穿透" tabindex="-1">缓存穿透 <a class="header-anchor" href="#缓存穿透" aria-label="Permalink to &quot;缓存穿透&quot;">​</a></h2><h3 id="问题描述-1" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述-1" aria-label="Permalink to &quot;问题描述&quot;">​</a></h3><p>缓存穿透指的是对某个一定不存在的数据进行请求，该请求将会穿透缓存到达数据库。</p><p>举个例子：某个黑客故意制造我们缓存中不存在的键，并发起大量请求，这些请求就都落到数据库中，给数据库造成压力。</p><h3 id="解决方案-1" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案-1" aria-label="Permalink to &quot;解决方案&quot;">​</a></h3><ul><li><p>参数校验：</p><p>将一些不合法的参数请求直接抛出异常信息返回给客户端。比如传入的邮箱格式、电话号码长度不对时直接返回错误消息给客户端。</p></li><li><p>缓存无效键：</p><p>如果一个查询返回的数据为空（不管数据是否存在，还是系统故障），我们仍然把这个<strong>空结果进行缓存</strong>，并且设置好过期时间，过期时间最长不超过 5 分钟。这种方式可以解决请求的键变化不频繁的情况。如果遭遇恶意攻击，每次构建不同的请求键，则会导致 Redis 中缓存大量的无效键 。如果要用这种方式来解决缓存穿透问题的话，那么需要尽量将无效的键的过期时间设置短一点比如 1 分钟。</p></li><li><p>使用布隆过滤器对这类请求进行过滤：</p><p>当用户请求过来，先判断用户发来的请求的值是否存在于布隆过滤器中。布隆过滤器能够以极小的空间开销解决海量数据判重问题。<strong>一个一定不存在的数据会被该过滤器拦截掉</strong>，从而避免了对底层存储系统的查询压力。</p></li></ul><h3 id="布隆过滤器" tabindex="-1">布隆过滤器 <a class="header-anchor" href="#布隆过滤器" aria-label="Permalink to &quot;布隆过滤器&quot;">​</a></h3><p>布隆过滤器能够以极小的空间开销解决海量数据判重问题，但是会有一定的误判概率：布隆过滤器判断某个元素存在，小概率会误判。布隆过滤器判断某个元素不存在，那么这个元素一定不在。</p><p>布隆过滤器也是使用 BitSet 存储数据（m 位），但是它进行了一定的改进，从而解除了 BitSet 要求数据的范围不大的限制。在存储时，它要求数据先经过 k 个哈希函数得到 k 个位置，并将 BitSet 中对应位置设置为 1。在查找时，也需要先经过 k 个哈希函数得到 k 个位置，如果所有位置上都为 1，那么表示这个数据存在。</p><p>由于哈希函数的特点，两个不同的数通过哈希函数得到的值可能相同。如果两个数通过 k 个哈希函数得到的值都相同，那么使用布隆过滤器会将这两个数判为相同。</p><p>可以令 k 和 m 都大一些会使得误判率降低，但是这会带来更高的时间和空间开销。</p><div align="center"><img src="https://github.com/DuHouAn/ImagePro/raw/master/redis/redis_10.png"></div><p>补充：<a href="https://github.com/Snailclimb/JavaGuide/blob/master/docs/cs-basics/data-structure/bloom-filter.md" target="_blank" rel="noreferrer">布隆过滤器详解</a></p><h2 id="缓存击穿" tabindex="-1">缓存击穿 <a class="header-anchor" href="#缓存击穿" aria-label="Permalink to &quot;缓存击穿&quot;">​</a></h2><h3 id="问题描述-2" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述-2" aria-label="Permalink to &quot;问题描述&quot;">​</a></h3><p>缓存击穿是指某个键非常热点，访问非常频繁，处于集中式高并发访问的情况。当缓存的键在某个时间点过期的时，大量的请求就 ”击穿“ 了缓存，直接请求数据库，就像是在一道屏障上凿开了一个洞。</p><h3 id="解决方案-2" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案-2" aria-label="Permalink to &quot;解决方案&quot;">​</a></h3><ul><li>将热点数据设置为<strong>永远不过期</strong>，这样不会出现热点键过期问题。</li><li>基于 Redis 或 Zookeeper 实现互斥锁。当键获得的值为空时，先加锁，然后从数据库加载数据，加载完毕后再释放锁。其他线程发现获取锁失败，等待一段时间后重试。</li></ul><h2 id="双写一致性问题" tabindex="-1">双写一致性问题 <a class="header-anchor" href="#双写一致性问题" aria-label="Permalink to &quot;双写一致性问题&quot;">​</a></h2><p>一致性问题分为<strong>最终一致性</strong>和<strong>强一致性</strong>。数据库和缓存双写，就必然会存在不一致的问题。对数据有强一致性要求，则数据不能放入缓存。我们所做的一切，只能保证最终一致性。另外，我们所做的方案从根本上来说，只是降低双写不一致发生的概率，无法完全避免。</p><h3 id="方案1-先删除缓存-后更新数据库" tabindex="-1">方案1：先删除缓存，后更新数据库 <a class="header-anchor" href="#方案1-先删除缓存-后更新数据库" aria-label="Permalink to &quot;方案1：先删除缓存，后更新数据库&quot;">​</a></h3><h4 id="可能存在的问题" tabindex="-1">可能存在的问题 <a class="header-anchor" href="#可能存在的问题" aria-label="Permalink to &quot;可能存在的问题&quot;">​</a></h4><p>数据更新，先删除了缓存，然后要去修改数据库数据，此时还没修改。另一个查询请求去读缓存，发现缓存数据为空，则去查询数据库，查到了修改前的旧数据，并放到缓存中。随后更新数据的程序完成了数据库的修改，此时，数据库和缓存中的数据又不一致了。</p><p>举个例子，线程 A 更新数据 ，线程 B 读取数据，则并发场景下，可能存在如下执行过程：</p><ul><li>线程 A 删除了缓存</li><li>线程 B 查询，发现缓存数据为空</li><li>线程 B 去数据库查询得到旧值</li><li>线程 B 将旧值写入缓存</li><li>线程 A 将新值写入数据库</li></ul><p>显然缓存中是旧值，但是数据库中已经是新值了。</p><h4 id="解决方案-3" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案-3" aria-label="Permalink to &quot;解决方案&quot;">​</a></h4><p>将读请求和写请求串行化，串到一个<strong>内存队列</strong>里去，这样就可以保证一定不会出现不一致的情况。串行化之后，就会导致系统的<strong>吞吐量会大幅度的降低</strong>，往往需要使用比正常情况下多几倍的机器去支撑线上的请求。</p><blockquote><p><strong>问题：为什么是删除缓存，而不是更新缓存？</strong></p></blockquote><p>原因：举个例子，一个缓存涉及的表的字段，在 1 分钟内就修改了 100 次，那么缓存更新 100 次；但是这个缓存在 1 分钟内只被<strong>读取</strong>了 1 次，有<strong>大量的冷数据</strong>。实际上，如果只是删除缓存的话，那么在 1 分钟内，这个缓存不过就重新计算一次而已，开销大幅度降低。因此对于频繁更新的场景，如果每次更新数据库，都要更新缓存，倒不如直接删除掉缓存。其实删除缓存，而不是更新缓存，就是一个 lazy 计算的思想：<strong>不要每次都重新做复杂的计算，不管它会不会用到，而是让它在需要被使用时才重新计算</strong>。</p><h3 id="方案2-旁路缓存模式" tabindex="-1">方案2：旁路缓存模式 <a class="header-anchor" href="#方案2-旁路缓存模式" aria-label="Permalink to &quot;方案2：旁路缓存模式&quot;">​</a></h3><p>旁路缓存模式 (Cache Aside Pattern)：</p><ul><li>读的时候，先读缓存，缓存中没有数据的话，就读数据库中数据，然后取出数据库中数据放入缓存，同时返回响应。</li><li>更新时，先更新数据库，然后再删除缓存。</li></ul><h4 id="可能存在的问题-1" tabindex="-1">可能存在的问题 <a class="header-anchor" href="#可能存在的问题-1" aria-label="Permalink to &quot;可能存在的问题&quot;">​</a></h4><p>先修改数据库，再删除缓存。</p><p>如果<strong>删除缓存失败</strong>，那么会导致数据库中是新数据，缓存中是旧数据，数据就出现不一致。</p><p>如果在高并发的场景下，也有可能会出现数据库与缓存数据不一致的情况：</p><ul><li>缓存<strong>刚好</strong>失效</li><li>线程 A 查询数据库，得一个旧值</li><li>线程 B 将新值写入数据库</li><li>线程 B 删除缓存</li><li>线程 A 将查到的旧值写入缓存</li></ul><p>上述情况，出现的<strong>概率是特别低的</strong>，因为这个条件需要发生在读缓存时缓存失效，而且并发着有一个写操作。实际上数据库的写操作会比读操作慢得多，而且还要锁表，<strong>而读操作必需在写操作前进入数据库操作，而又要晚于写操作更新缓存</strong>，所有的这些条件都具备的概率是非常小的。</p><h4 id="解决方案-4" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案-4" aria-label="Permalink to &quot;解决方案&quot;">​</a></h4><p>如果更新数据库成功，而删除缓存失败，有以下两个解决方案：</p><ul><li>缩短缓存失效时间：将缓存数据的过期时间设置短一点，这样的话缓存就会从数据库中加载数据。</li><li><strong>增加缓存更新重试机制</strong>：如果当前缓存服务不可用导致缓存删除失败的话，可以隔一段时间进行重试，自行设置重试次数。如果多次重试还是失败，则可以把当前更新失败的 键存入队列中，等缓存服务可用之后，再将缓存中对应的键删除即可。</li></ul><h3 id="方案3-读请求和写请求串行化" tabindex="-1">方案3：读请求和写请求串行化 <a class="header-anchor" href="#方案3-读请求和写请求串行化" aria-label="Permalink to &quot;方案3：读请求和写请求串行化&quot;">​</a></h3><p>读请求和写请求串行化，串入到一个内存队列。读串行化可保证一定不会出现双写一致性的情况，但会导致系统吞吐量大幅降低，需要比正常情况下多几倍的机器去支持线上一个请求，若不是严格要求双写一致性，则最好不要使用。</p>',55),o=[i];function n(s,h,d,p,c,u){return t(),e("div",null,o)}const q=a(l,[["render",n]]);export{g as __pageData,q as default};
