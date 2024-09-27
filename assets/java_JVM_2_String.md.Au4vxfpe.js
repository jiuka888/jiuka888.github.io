import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.DpC1ZpOZ.js";const c=JSON.parse('{"title":"String","description":"","frontmatter":{},"headers":[],"relativePath":"java/JVM/2_String.md","filePath":"java/JVM/2_String.md","lastUpdated":null}'),l={name:"java/JVM/2_String.md"},t=n(`<h1 id="string" tabindex="-1">String <a class="header-anchor" href="#string" aria-label="Permalink to &quot;String&quot;">​</a></h1><h2 id="概览" tabindex="-1">概览 <a class="header-anchor" href="#概览" aria-label="Permalink to &quot;概览&quot;">​</a></h2><p>String 被声明为 final，因此它不可被继承。</p><p><strong>内部使用 char 数组存储数据，该数组被声明为 final</strong>， 这意味着 value 数组初始化之后就不能再引用其它数组。 并且 String 内部没有改变 value 数组的方法，因此可以保证 String 不可变。</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> String</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    implements</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> java.io.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Serializable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Comparable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CharSequence</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /** The value is used for character storage. */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value[];</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="不可变的好处" tabindex="-1">不可变的好处 <a class="header-anchor" href="#不可变的好处" aria-label="Permalink to &quot;不可变的好处&quot;">​</a></h2><p><strong>1. 可以缓存 hash 值</strong></p><p>因为 String 的 hash 值经常被使用，例如 String 用做 HashMap 的 key。 不可变的特性可以使得 hash 值也不可变，因此只需要进行一次计算。</p><p><strong>2. String Pool 的需要</strong></p><p>如果一个 String 对象已经被创建过了，那么就会从 String Pool 中取得引用。 只有 String 是不可变的，才可能使用 String Pool。</p><div align="center"><img src="https://gitee.com/duhouan/ImagePro/raw/master/java-notes/java/f76067a5-7d5f-4135-9549-8199c77d8f1c.jpg" width=""></div><p><strong>3. 安全性</strong></p><p>String 经常作为参数，String 不可变性可以保证参数不可变。例如在作为网络连接参数的情况下如果 String 是可变的，那么在网络连接过程中，String 被改变，改变 String 对象的那一方以为现在连接的是其它主机，而实际情况却不一定是。</p><p><strong>4. 线程安全</strong></p><p>String 不可变性天生具备线程安全，可以在多个线程中安全地使用。</p><p><a href="https://www.programcreek.com/2013/04/why-string-is-immutable-in-java/" target="_blank" rel="noreferrer">Program Creek : Why String is immutable in Java?</a></p><h2 id="string-stringbuffer-and-stringbuilder" tabindex="-1">String, StringBuffer and StringBuilder <a class="header-anchor" href="#string-stringbuffer-and-stringbuilder" aria-label="Permalink to &quot;String, StringBuffer and StringBuilder&quot;">​</a></h2><p><strong>1. 可变性</strong></p><ul><li>String 不可变</li><li>StringBuffer 和 StringBuilder 可变</li></ul><p><strong>2. 线程安全</strong></p><ul><li>String 不可变，因此是线程安全的</li><li>StringBuilder 不是线程安全的</li><li>StringBuffer 是线程安全的，内部使用 synchronized 进行同步</li></ul><p><strong>3. 性能</strong></p><ul><li><p>Java中对String对象进行的操作实际上是一个不断创建新的对象并且将旧的对象回收的一个过程，所以执行速度很慢</p></li><li><p>StringBuffer每次都会对StringBuffer对象本身进行操作，而不是生成新的对象并改变对象引用</p></li><li><p>StringBuilder每次都会对StringBuilder对象本身进行操作，而不是生成新的对象并改变对象引用。 相同情况下使用StirngBuilder相比使用 StringBuffer 仅能获得 10%~15% 左右的性能提升，但却冒多线程不安全的风险。</p></li></ul><blockquote><p><strong>三者使用的总结</strong></p></blockquote><ul><li>操作少量的数据，使用String</li><li>单线程操作字符串缓冲区下操作大量数据，使用StringBuilder</li><li>多线程操作字符串缓冲区下操作大量数据，使用StringBuffer</li></ul><p>了解: String和StringBuffer的相互转换</p><p>（1）String --&gt; StringBuffer 方式一：构造方法 StringBuffer sb=new StringBuffer(s);</p><p>方式二：通过append()方法 StringBuffer sb=new StringBuffer(); sb.append(s);</p><p>（2）StringBuffer --&gt; String</p><p>方式一：构造方法 String s=new String(buffer);</p><p>方式二：通过toString()方法 String s=buffer.toString();</p><h2 id="string-pool" tabindex="-1">String Pool <a class="header-anchor" href="#string-pool" aria-label="Permalink to &quot;String Pool&quot;">​</a></h2><p>字符串常量池（String Pool）保存着所有字符串字面量（literal strings），这些字面量在编译时期就确定。</p><p>不仅如此，还可以使用 String 的 <strong>intern() 方法在运行过程中将字符串添加到 String Pool 中</strong>。</p><p>当一个字符串调用 intern() 方法时，如果 String Pool 中已经存在一个字符串和该字符串值相等（使用 equals() 方法进行确定）， 那么就会返回 String Pool 中字符串的引用； 否则，就会在 String Pool 中添加一个新的字符串，并返回这个新字符串的引用。</p><p>下面示例中，s1 和 s2 采用 new String() 的方式新建了两个不同字符串， 而 s3 和 s4 是通过 s1.intern() 方法取得一个字符串引用。 intern() 首先把 s1 引用的字符串放到 String Pool 中，然后返回这个字符串引用。 因此 s3 和 s4 引用的是同一个字符串。</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String s1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;aaa&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String s2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;aaa&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> s2);           </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String s3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> s1.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">intern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String s4 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> s1.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">intern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> s4);           </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>如果是采用 &quot;bbb&quot; 这种字面量的形式创建字符串，会自动地将字符串放入 String Pool 中。</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String s5 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;bbb&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String s6 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;bbb&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s5 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> s6);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>在 Java 7 之前，String Pool 被放在运行时常量池中，它属于永久代。 而在 Java 7，String Pool 被移到堆中。这是因为永久代的空间有限，在大量使用字符串的场景下会导致 OutOfMemoryError 错误。</p><h2 id="new-string-abc" tabindex="-1">new String(&quot;abc&quot;) <a class="header-anchor" href="#new-string-abc" aria-label="Permalink to &quot;new String(&quot;abc&quot;)&quot;">​</a></h2><p>使用这种方式一共会创建两个字符串对象（前提是 String Pool 中还没有 &quot;abc&quot; 字符串对象）。</p><ul><li>&quot;abc&quot; 属于字符串字面量，因此编译时期会在 String Pool 中创建一个字符串对象，指向这个 &quot;abc&quot; 字符串字面量；</li><li>而使用 new 的方式会在堆中创建一个字符串对象。</li></ul><p>创建一个测试类，其 main 方法中使用这种方式来创建字符串对象。</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NewStringTest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        String s </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;abc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>使用 javap -verbose 进行反编译，得到以下内容：</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Constant pool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   #</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Class              #</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // java/lang/String</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   #</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String             #</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">19</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // abc</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  #</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Utf8               java</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lang</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  #</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">19</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Utf8               abc</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(java.lang.String[]);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    descriptor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ([Ljava</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lang</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String;)V</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    flags</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ACC_PUBLIC, ACC_STATIC</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Code</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      stack</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, locals</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, args_size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">         0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">           #2                  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// class java/lang/String</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dup</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">         4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ldc           #</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                  // String abc</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">         6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> invokespecial #</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                  // Method java/lang/String.&quot;&lt;init&gt;&quot;:(Ljava/lang/String;)V</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">         9</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> astore_1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>在 Constant Pool 中，#19 存储这字符串字面量 &quot;abc&quot;，#3 是 String Pool 的字符串对象，它指向 #19 这个字符串字面量。在 main 方法中，0: 行使用 new #2 在堆中创建一个字符串对象，并且使用 ldc #3 将 String Pool 中的字符串对象作为 String 构造函数的参数。</p><p>以下是 String 构造函数的源码，可以看到，在将一个字符串对象作为另一个字符串对象的构造函数参数时，并不会完全复制 value 数组内容，而是都会指向同一个 value 数组。</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String original) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> original.value;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.hash </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> original.hash;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>了解：说说String s=new String(&quot;aaa&quot;)和String s=&quot;aaa&quot;的区别？</p><ul><li>前者会创建一个或者多个对象</li><li>后者只会创建一个或者零个对象</li></ul>`,52),p=[t];function h(e,r,k,g,d,E){return a(),i("div",null,p)}const u=s(l,[["render",h]]);export{c as __pageData,u as default};
