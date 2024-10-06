import{_ as a,c as e,o as t,a4 as p}from"./chunks/framework.DpC1ZpOZ.js";const m=JSON.parse('{"title":"缓存需要考虑的问题","description":"","frontmatter":{},"headers":[],"relativePath":"java/cache/1_缓存需要考虑的问题.md","filePath":"java/cache/1_缓存需要考虑的问题.md","lastUpdated":1728037326000}'),r={name:"java/cache/1_缓存需要考虑的问题.md"},i=p('<h1 id="缓存需要考虑的问题" tabindex="-1">缓存需要考虑的问题 <a class="header-anchor" href="#缓存需要考虑的问题" aria-label="Permalink to &quot;缓存需要考虑的问题&quot;">​</a></h1><h2 id="缓存命中率" tabindex="-1">缓存命中率 <a class="header-anchor" href="#缓存命中率" aria-label="Permalink to &quot;缓存命中率&quot;">​</a></h2><p>当某个请求能够通过访问缓存而得到响应时，称为缓存命中。缓存命中率越高，缓存的利用率也就越高。</p><h2 id="最大空间" tabindex="-1">最大空间 <a class="header-anchor" href="#最大空间" aria-label="Permalink to &quot;最大空间&quot;">​</a></h2><p>缓存通常位于<strong>内存</strong>中，内存的空间通常比磁盘空间小的多，因此缓存的最大空间不可能非常大。当缓存存放的数据量超过最大空间时，就需要<strong>淘汰部分数据</strong>来存放新到达的数据。常见的数据淘汰策略：</p><ul><li><p>FIFO（First In First Out）</p><p>FIFO 即先进先出策略，在实时性的场景下，需要经常访问最新的数据，那么就可以使用 FIFO，使得最先进入的数据（最晚的数据）被淘汰。</p></li><li><p>LRU（Least Recently Used）</p><p>LRU 即最近最久未使用策略，优先淘汰最久未使用的数据，也就是上次被访问时间距离现在最久的数据。该策略可以保证内存中的数据都是热点数据，也就是经常被访问的数据，从而保证缓存命中率。</p></li><li><p>LFU（Least Frequently Used）</p><p>LFU 即最不经常使用策略，优先淘汰一段时间内使用次数最少的数据。</p></li></ul><h2 id="缓存位置" tabindex="-1">缓存位置 <a class="header-anchor" href="#缓存位置" aria-label="Permalink to &quot;缓存位置&quot;">​</a></h2><p>缓存位置一般有：</p><ul><li><p>浏览器</p><p>当 HTTP 响应允许进行缓存时，浏览器会将 HTML、CSS、JavaScript、图片等静态资源进行缓存。</p></li><li><p>反向代理</p><p>反向代理<strong>位于服务器之前</strong>，请求与响应都需要经过反向代理。通过将数据缓存在反向代理，在用户请求反向代理时就可以直接使用缓存进行响应。</p></li><li><p>本地缓存</p><p>使用 Guava Cache 将数据缓存在服务器本地内存中，服务器代码可以直接读取本地内存中的缓存，速度非常快。</p></li><li><p>分布式缓存</p><p>使用 <strong>Redis、Memcache</strong> 等分布式缓存将数据缓存在分布式缓存系统中。相对于本地缓存来说，分布式缓存单独部署，可以根据需求分配硬件资源。不仅如此，服务器集群都可以访问分布式缓存，而本地缓存需要在服务器集群之间进行同步，实现难度和性能开销上都非常大。</p></li><li><p>数据库缓存</p><p>MySQL 等数据库管理系统具有自己的查询缓存机制来提高查询效率。</p></li><li><p>CPU 多级缓存</p><p>CPU 为了解决运算速度与主存 IO 速度不匹配的问题，引入了多级缓存结构，同时使用 MESI 等缓存一致性协议来解决多核 CPU 缓存数据一致性的问题。</p></li><li><p>Java 内部的缓存</p><p>Java 为了优化空间，提高字符串、基本数据类型包装类的创建效率，设计了字符串常量池及 Byte、Short、Character、Integer、Long、Boolean 这六种包装类缓冲池。</p></li></ul>',9),l=[i];function o(s,n,_,c,h,d){return t(),e("div",null,l)}const f=a(r,[["render",o]]);export{m as __pageData,f as default};
