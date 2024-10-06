import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.DpC1ZpOZ.js";const E=JSON.parse('{"title":"事务的隔离级别的实现","description":"","frontmatter":{},"headers":[],"relativePath":"java/MySQL/2_事务隔离级别实现.md","filePath":"java/MySQL/2_事务隔离级别实现.md","lastUpdated":1728037326000}'),n={name:"java/MySQL/2_事务隔离级别实现.md"},l=e(`<h1 id="事务的隔离级别的实现" tabindex="-1">事务的隔离级别的实现 <a class="header-anchor" href="#事务的隔离级别的实现" aria-label="Permalink to &quot;事务的隔离级别的实现&quot;">​</a></h1><h2 id="多版本并发控制-mvcc" tabindex="-1">多版本并发控制-MVCC <a class="header-anchor" href="#多版本并发控制-mvcc" aria-label="Permalink to &quot;多版本并发控制-MVCC&quot;">​</a></h2><p>多版本并发控制（Multi-Version Concurrency Control, MVCC）以<strong>乐观锁</strong>为理论基础，和基于锁的并发控制最大的区别和优点是：<strong>读不加锁，读写不冲突</strong>。</p><h3 id="事务版本号" tabindex="-1"><strong>事务版本号</strong> <a class="header-anchor" href="#事务版本号" aria-label="Permalink to &quot;**事务版本号**&quot;">​</a></h3><p>每次事务开启前都会从数据库获得一个自增长的事务 id，可以从事务 id 判断事务的执行先后顺序。</p><h3 id="隐藏字段" tabindex="-1">隐藏字段 <a class="header-anchor" href="#隐藏字段" aria-label="Permalink to &quot;隐藏字段&quot;">​</a></h3><p>InnoDB 存储引擎为每行记录都添加了 3 个隐藏字段：</p><ul><li><p>DB_ROW_ID：数据行 id，用于标识一行数据。并不是必要的，如果创建的表中有主键或者非 NULL 唯一键时都不会包含 DB_ROW_ID 列</p></li><li><p>DB_TRX_ID：表示最后一次插入或更新该行的事务 id。此外，delete 操作在内部被视为更新，只不过会在记录头中的 deleted_flag 字段将其标记为已删除</p></li><li><p>DB_ROLL_PTR：当前数据记录的上一个版本的指针。每次对某条数据记录进行改动时，都会把旧版本数据记录按照一定格式写入到回滚日志 (undo log) 中，而 DB_ROLL_PTR 列则保存了该旧版本数据记录在回滚日志中的位置，相当于一个指针。</p></li></ul><h3 id="undo-log" tabindex="-1">undo log <a class="header-anchor" href="#undo-log" aria-label="Permalink to &quot;undo log&quot;">​</a></h3><p>MVCC 将每一个更新的数据标记一个版本号，在更新时进行版本号的递增，插入时新建一个版本号，同时旧版本数据存储在 Undo 日志中，该日志通过<strong>回滚指针</strong>把一个数据行（Record）的所有快照连接起来。</p><p>假设在 MySQL 创建一个表 user，包含主键 id 和一个字段 name。我们先插入一个数据行，然后对该数据行执行两次更新操作。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INSERT INTO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user(id, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VALUES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">UPDATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> SET</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> name=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;b&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">UPDATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> SET</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> name=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;c&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>因为没有使用 <code>START TRANSACTION</code> 将上面的操作当成一个事务来执行，根据 MySQL 的 AUTOCOMMIT 机制，每个操作都会被当成一个事务来执行，所以上面的操作总共涉及到三个事务。</p><div align="center"><img src="https://github.com/DuHouAn/ImagePro/raw/master/java-notes/database/MySQL_8.png" width="375px"></div><p>undo log 主要有两个作用：</p><ul><li>当事务回滚时用于将数据恢复到修改前的样子，保证事务原子性。</li><li>另一个作用是实现 MVCC ，当读取记录时，若该记录被其他事务占用或当前版本对该事务不可见，则可以通过 undo log 读取之前的版本数据，以此实现非锁定读</li></ul><h3 id="快照-readview" tabindex="-1">快照（ReadView） <a class="header-anchor" href="#快照-readview" aria-label="Permalink to &quot;快照（ReadView）&quot;">​</a></h3><h4 id="readview-结构" tabindex="-1">ReadView 结构 <a class="header-anchor" href="#readview-结构" aria-label="Permalink to &quot;ReadView 结构&quot;">​</a></h4><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">class ReadView {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> private:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  trx_id_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> m_low_limit_id;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      /* 大于这个 id 的事务均不可见 */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  trx_id_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> m_up_limit_id;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       /* 小于这个 id 的事务均可见 */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  trx_id_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> m_creator_trx_id;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* 创建该 ReadView 的事务 id */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  ids_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> m_ids;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                  /* 创建 ReadView 时的活跃事务列表 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  m_closed;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                     /* 标记 ReadView 是否 close */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>ReadView 主要有以下字段：</p><ul><li><p>m_creator_trx_id：创建该 ReadView 的事务 id</p></li><li><p>m_ids：ReadView 创建时其他未提交的活跃事务 id 列表。创建 ReadView 时，将当前未提交事务 ID 记录下来，后续即使它们修改了记录行的数据，对于当前事务也是不可见的。注意 m_ids 不包括当前事务自己和已提交的事务（正在内存中）</p></li><li><p>m_low_limit_id：目前出现过的<strong>最大的事务 id+1</strong>，即下一个将被分配的事务 id。</p></li><li><p>m_up_limit_id ：活跃事务列表 m_ids 中<strong>最小的事务 id</strong>，如果 m_ids 为空，则 m_up_limit_id 等于 m_low_limit_id。</p></li></ul><h4 id="数据可见性算法" tabindex="-1">数据可见性算法 <a class="header-anchor" href="#数据可见性算法" aria-label="Permalink to &quot;数据可见性算法&quot;">​</a></h4><p>InnoDB 存储引擎在开启一个新事务后，执行每个 select 语句前，都会创建一个 ReadView，ReadView 中保存了当前数据库系统中正处于活跃（没有 commit）的事务的 id 号，即系统中当前不应该被该事务看到的其他事务 id 列表 m_ids。当用户在该事务读取某行记录时，InnoDB 会将该行记录的 DB_TRX_ID 与 ReadView 中的一些变量及当前事务 id 进行比较，判断是否满足可见性条件：</p><ul><li><p>DB_TRX_ID &lt; m_up_limit_id，表明最新修改该行的事务（DB_TRX_ID）在当前事务创建快照之前就提交了，所以该记录行的值对当前事务是可见的</p></li><li><p>DB_TRX_ID &gt;= m_low_limit_id，那么表明最新修改该行的事务（DB_TRX_ID）在当前事务创建快照之后才修改该行，所以该记录行的值对当前事务不可见</p></li><li><p>m_ids 为空，则表明在当前事务创建快照之前，修改该行的事务就已经提交了，所以该记录行的值对当前事务是可见的</p></li><li><p>m_up_limit_id &lt;= DB_TRX_ID &lt; m_up_limit_id，表明最新修改该行的事务（DB_TRX_ID）在当前事务创建快照的时候可能处于“活动状态”或者“已提交状态”；所以就要对活跃事务列表 m_ids 进行二分查找（m_ids 是有序的）：</p><ul><li>在 m_ids 中找到 DB_TRX_ID，表明在当前事务创建快照前，该记录行的值被事务 id 为 DB_TRX_ID 的事务修改了，但没有提交；或者在当前事务创建快照后，该记录行的值被事务 id 为 DB_TRX_ID 的事务修改了。这些情况下，这个记录行的值对当前事务都是不可见的</li><li>在 m_ids 中找不到 DB_TRX_ID，表明是事务 id 为 DB_TRX_ID 的事务在修改该记录行的值后，在当前事务创建快照前就已经提交了，所以记录行对当前事务可见</li></ul></li></ul><p>在记录行快照不可见的情况下，在该记录行的 DB_ROLL_PTR 指针所指向的 undo log 取出快照记录，用快照记录的 DB_TRX_ID 再重新开始判断，直到找到可见的快照版本或返回空。</p><p>事务可见性示意图：</p><div align="center"><img src="https://github.com/DuHouAn/ImagePro/raw/master/java-notes/database/MySQL_9.png"></div><h3 id="快照读-当前读" tabindex="-1">快照读 &amp; 当前读 <a class="header-anchor" href="#快照读-当前读" aria-label="Permalink to &quot;快照读 &amp; 当前读&quot;">​</a></h3><h4 id="快照读" tabindex="-1">快照读 <a class="header-anchor" href="#快照读" aria-label="Permalink to &quot;快照读&quot;">​</a></h4><p>快照读只是针对于目标数据的版本号小于等于当前事务的版本号，也就是说读数据的时候可能读到旧数据，但是这种快照读不需要加锁。也就是说，使用 MVCC 读取的是快照中的数据，这样可以减少加锁所带来的开销。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> from</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ...;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="当前读" tabindex="-1">当前读 <a class="header-anchor" href="#当前读" aria-label="Permalink to &quot;当前读&quot;">​</a></h4><p>当前读是读取当前数据的最新版本，但是更新等操作会对数据加锁，所以当前读需要获取记录的行锁，存在锁争的问题。以下第一个语句需要加 S 锁，其它都需要加 X 锁。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> from</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> table</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ? lock </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> share mode; # 加 S 锁</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> from</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> table</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ? </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">insert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">delete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="mysql-中事务隔离级别的实现" tabindex="-1">MySQL 中事务隔离级别的实现 <a class="header-anchor" href="#mysql-中事务隔离级别的实现" aria-label="Permalink to &quot;MySQL 中事务隔离级别的实现&quot;">​</a></h2><h3 id="_1-可串行化-serializable" tabindex="-1">1. 可串行化（SERIALIZABLE） <a class="header-anchor" href="#_1-可串行化-serializable" aria-label="Permalink to &quot;1. 可串行化（SERIALIZABLE）&quot;">​</a></h3><p>读加共享锁（S），写加排他锁（X），读写互斥。</p><p>使用的是悲观锁的理论，实现简单，数据更加安全。</p><h3 id="_2-提交读-read-committed-和可重复读-repeatable-read" tabindex="-1">2. 提交读（READ COMMITTED） 和可重复读（REPEATABLE READ） <a class="header-anchor" href="#_2-提交读-read-committed-和可重复读-repeatable-read" aria-label="Permalink to &quot;2. 提交读（READ COMMITTED） 和可重复读（REPEATABLE READ）&quot;">​</a></h3><p>RR 是 InnoDB 存储引擎的默认事务隔离级别。</p><p>RC 和 RR 都是基于 MVCC 实现的，但生成快照的时机不同：</p><ul><li>RC 级别下。<strong>每次 select 查询</strong>前都会生成一个 ReadView。有可能会出现一个事务中两次读到了不同的结果。</li><li>RR 级别下。只在事务开始后， <strong>第一次 select 查询</strong>前生成一个ReadView。</li></ul><h3 id="_3-未提交读-read-uncommitted" tabindex="-1">3. 未提交读（READ UNCOMMITTED） <a class="header-anchor" href="#_3-未提交读-read-uncommitted" aria-label="Permalink to &quot;3. 未提交读（READ UNCOMMITTED）&quot;">​</a></h3><p>总是读取最新的数据行，无需使用 MVCC。</p><h2 id="innodb-行锁算法" tabindex="-1">InnoDB 行锁算法 <a class="header-anchor" href="#innodb-行锁算法" aria-label="Permalink to &quot;InnoDB 行锁算法&quot;">​</a></h2><p>Next-Key Locks 是 MySQL 的 InnoDB 存储引擎的一种锁实现。</p><h3 id="record-locks" tabindex="-1">Record Locks <a class="header-anchor" href="#record-locks" aria-label="Permalink to &quot;Record Locks&quot;">​</a></h3><p><strong>锁定一个记录上的索引，而不是记录本身</strong>。</p><p>如果表没有设置索引，InnoDB 会自动在主键上创建隐藏的聚簇索引，因此 Record Locks 依然可以使用。</p><h3 id="gap-locks" tabindex="-1">Gap Locks <a class="header-anchor" href="#gap-locks" aria-label="Permalink to &quot;Gap Locks&quot;">​</a></h3><p><strong>锁定索引之间的间隙，但是不包含索引本身</strong>。</p><p>例如当一个事务执行以下语句，其它事务就不能在 c 中插入 15。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">BETWEEN</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> and</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> FOR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> UPDATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="next-key-locks" tabindex="-1">Next-Key Locks <a class="header-anchor" href="#next-key-locks" aria-label="Permalink to &quot;Next-Key Locks&quot;">​</a></h3><p>它是 Record Locks 和 Gap Locks 的结合，<strong>不仅锁定一个记录上的索引，也锁定索引之间的间隙，是一个前开后闭区间</strong>。例如一个索引包含以下值：10, 11 and 20，那么就需要锁定以下区间：</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">∞, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">∞)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>如下图所示：</p><div align="center"><img src="https://github.com/DuHouAn/ImagePro/raw/master/java-notes/database/MYSQL_10.png"></div><h3 id="几个问题" tabindex="-1">几个问题 <a class="header-anchor" href="#几个问题" aria-label="Permalink to &quot;几个问题&quot;">​</a></h3><blockquote><p>问题一：对主键索引或唯一索引会使用间隙锁吗？</p></blockquote><p>不一定。视情况而定：</p><ul><li><p><strong>如果 where 条件全部命中（不会出现幻读），则不会加间隙锁</strong>，只会加记录锁</p></li><li><p>如果 where 条件部分命中 / 全都不命中，则会加间隙锁</p></li></ul><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">delete</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tb </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Table: tb(name primary key,id unique key) </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- key 是唯一索引</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>根据 id=9 条件定位，此时给 id = 9 的索引加上记录锁，根据 name 值（name是主键）到主索引中检索获得记录，再给该记录加上记录锁。</p><div align="center"><img src="https://github.com/DuHouAn/ImagePro/raw/master/java-notes/database/db_14.png" width="400px"></div><blockquote><p>问题二：间隙锁是否用在非唯一索引的当前读中？</p></blockquote><p>是的。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">delete</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tb1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Table: tb1(name primary key,id key)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- key 是非唯一索引</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div align="center"><img src="https://github.com/DuHouAn/ImagePro/raw/master/java-notes/database/db_15.png" width="400px"></div><p>可以看出，在 (6,9]、(9,11] 加了间隙锁。</p><blockquote><p>问题三：间隙锁是否用在不走索引的当前读中？</p></blockquote><p>是的。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">delete</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tb2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Table: tb2(name primary key,id)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 没有为 id 建立索引</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div align="center"><img src="https://github.com/DuHouAn/ImagePro/raw/master/java-notes/database/db_16.png" width="300px"></div><p>此时对所有的间隙都上锁（功能上相当于锁表）。</p><p>总结以上三个问题，我们得到如下结论：</p><ul><li><p>主键索引 / 唯一索引：</p><p>如果 where 条件全部命中（不会出现幻读），则不会加间隙锁，只会加记录锁</p><p>如果 where 条件部分命中 / 全都不命中，则会加间隙锁</p></li><li><p>非唯一索引：</p><p>会加间隙锁</p></li><li><p>不走索引：</p><p>对所有间隙都加间隙锁，相当于锁表</p></li></ul><h2 id="解决幻读问题" tabindex="-1">解决幻读问题 <a class="header-anchor" href="#解决幻读问题" aria-label="Permalink to &quot;解决幻读问题&quot;">​</a></h2><p>InnoDB 存储引擎在 RR 级别下通过 MVCC + Next-key Lock 来解决幻读问题：</p><ul><li><p>执行 <code>select * from table ...;</code> 会以 MVCC <strong>快照读</strong>的方式读取数据。</p><p>在快照读的情况下，RR 隔离级别只会在事务开启后的第一次查询生成 ReadView，使用至事务提交。 在生成 ReadView 之后其它事务所做的更新、插入记录版本对当前事务并不可见，实现了可重复读和防止快照读下的 “幻读”。</p></li><li><p>执行 <code>select * from table where ? lock in share mode/for update; </code>、<code>insert</code>、<code>update</code>、<code>delete</code> 会以 MVCC <strong>当前读</strong>的方式读取数据。</p><p>在当前读的情况下，读取的都是最新的数据，如果存在其它事务插入新的记录，并且刚好在当前事务查询范围内，就会产生幻读。</p><p>InnoDB 就使用 Next-key Lock 来防止这种情况：当执行当前读时，在锁定读取到的记录时，也会锁定它们的间隙，防止其它事务在查询范围内插入数据。</p></li></ul><h1 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h1><ul><li><a href="https://segmentfault.com/a/1190000012650596" target="_blank" rel="noreferrer">MySQL-InnoDB-MVCC多版本并发控制</a></li><li><a href="https://tech.meituan.com/2014/08/20/innodb-lock.html" target="_blank" rel="noreferrer">Innodb中的事务隔离级别和锁的关系</a></li></ul>`,82),t=[l];function p(h,r,d,k,o,c){return a(),i("div",null,t)}const u=s(n,[["render",p]]);export{E as __pageData,u as default};
