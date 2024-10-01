import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.DpC1ZpOZ.js";const u=JSON.parse('{"title":"String 类和常量池","description":"","frontmatter":{},"headers":[],"relativePath":"java/JVM/3_JVM.md","filePath":"java/JVM/3_JVM.md","lastUpdated":null}'),t={name:"java/JVM/3_JVM.md"},l=n(`<h1 id="string-类和常量池" tabindex="-1">String 类和常量池 <a class="header-anchor" href="#string-类和常量池" aria-label="Permalink to &quot;String 类和常量池&quot;">​</a></h1><h2 id="_1、string-对象的两种创建方式" tabindex="-1">1、String 对象的两种创建方式 <a class="header-anchor" href="#_1、string-对象的两种创建方式" aria-label="Permalink to &quot;1、String 对象的两种创建方式&quot;">​</a></h2><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String str1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;abcd&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String str2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;abcd&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str2); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这两种不同的创建方法是有差别的:</p><p>第一种方式是在常量池中获取对象(&quot;abcd&quot; 属于字符串字面量，因此编译时期会在常量池中创建一个字符串对象)；</p><p>第二种方式一共会创建两个字符串对象（前提是 String Pool 中还没有 &quot;abcd&quot; 字符串对象）。</p><ul><li>&quot;abcd&quot; 属于字符串字面量，因此编译时期会在常量池中创建一个字符串对象，该字符串对象指向这个 &quot;abcd&quot; 字符串字面量；</li><li>使用 new 的方式会在堆中创建一个字符串对象。</li></ul><p>str1 指向常量池中的 “abcd”，而 str2 指向堆中的字符串对象。</p><h2 id="_2、intern-方法" tabindex="-1">2、intern() 方法 <a class="header-anchor" href="#_2、intern-方法" aria-label="Permalink to &quot;2、intern() 方法&quot;">​</a></h2><p>intern() 方法设计的初衷，就是重用 String 对象，以节省内存消耗。</p><p>JDK6：当调用intern方法的时候，如果字符串常量池先前已创建出该字符串对象，则返回常量池中的该字符串的引用。否则，将此字符串对象添加到字符串常量池中，并且返回该字符串对象的引用。</p><p>JDK6+：当调用intern方法的时候，如果字符串常量池先前已创建出该字符串对象，则返回常量池中的该字符串的引用。<strong>否则，如果该字符串对象已存在与Java堆中，则将堆中对此对象的引用添加到字符串常量池中，并且返回该引用</strong>；如果堆中不存在，则在常量池中创建该字符串并返回其引用。</p><p>在 JVM 运行时数据区中的方法区有一个常量池，但是发现在 JDK 1.6 以后常量池被放置在了堆空间，因此常量池位置的不同影响到了 String 的 intern() 方法的表现。</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String s </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">intern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String s2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> s2);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String s3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s3.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">intern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String s4 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;11&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> s4);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><p>JDK 1.6 及以下</p></blockquote><ul><li>上述代码输出结果：</li></ul><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>解释：</li></ul><p>在 JDK 1.6 中所有的输出结果都是 false，因为 JDK 1.6 以及以前版本中，常量池是放在 PermGen 区（属于方法区）中的，而方法区和堆区是完全分开的。</p><p><strong>使用引号声明的字符串会直接在字符串常量池中生成</strong>的，而 new 出来的 String 对象是放在堆空间中的。所以两者的内存地址肯定是不相同的，即使调用了 intern() 方法也是不影响的。</p><p>intern() 方法在 JDK 1.6 中的作用：比如 <code>String s = new String(&quot;1&quot;);</code>，再调用 <code>s.intern()</code>，此时返回值还是字符串&quot;1&quot;，表面上看起来好像这个方法没什么用处。但实际上，在 JDK1.6 中：<strong>检查字符串常量池里是否存在 &quot;1&quot; 这么一个字符串，如果存在，就返回池里的字符串；如果不存在，该方法会把 &quot;1&quot; 添加到字符串常量池中，然后再返回它的引用</strong>。</p><blockquote><p>JDK 1.6 及以上</p></blockquote><ul><li>上述代码输出结果：</li></ul><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>解释：</li></ul><p><code>String s= new String(&quot;1&quot;)</code> 生成了字符串常量池中的 &quot;1&quot; 和堆空间中的字符串对象。</p><p><code>s.intern()</code> s 对象去字符串常量池中寻找后，发现 &quot;1&quot; 已存在于常量池中。</p><p><code>String s2 = &quot;1&quot;</code> 生成 s2 的引用指向常量池中的 &quot;1&quot; 对象。</p><p>显然，s 和 s2 的引用地址是不同的。</p><p><code>String s3 = new String(&quot;1&quot;) + new String(&quot;1&quot;) </code>在字符串常量池中生成 &quot;1&quot;，并在堆空间中生成 s3 引用指向的对象（内容为 &quot;11&quot;）。 <em>注意此时常量池中是没有 &quot;11&quot; 对象</em>。</p><p><code>s3.intern()</code>将 s3 中的 &quot;11&quot; 字符串放入字符串常量池中。 JDK 1.6 的做法是直接在常量池中生成一个 &quot;11&quot; 的对象。但<strong>在 JDK 1.7 中，常量池中不需要再存储一份对象了，可以直接存储堆中的引用</strong>。这份引用直接指向 s3 引用的对象，也就是说 <code>s3.intern() == s3 </code>会返回 true。</p><p><code>String s4 = &quot;11&quot;</code>， 这一行代码会直接去常量池中创建，但是发现已经有这个对象了，此时 s4 就是指向 s3 引用对象的一个引用。因此 <code>s3 == s4 </code>返回了true。</p><h2 id="_3、字符串拼接" tabindex="-1">3、字符串拼接 <a class="header-anchor" href="#_3、字符串拼接" aria-label="Permalink to &quot;3、字符串拼接&quot;">​</a></h2><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String str1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;str&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String str2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;ing&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String str3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;str&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;ing&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//常量池中的对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String str4 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str2; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//TODO:在堆上创建的新的对象	  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String str5 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;string&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//常量池中的对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str4);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str5);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str4 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str5);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div align="center"><img src="https://gitee.com/duhouan/ImagePro/raw/master/JVM/j_8.jpg" width="400px"></div><p>注意：尽量避免多个字符串拼接，因为这样会重新创建对象。 如果需要改变字符串的话，可以使用 <strong>StringBuilder</strong> 或者 <strong>StringBuffer</strong>。</p><blockquote><p>面试题：String s1 = new String(&quot;abc&quot;);问创建了几个对象？</p></blockquote><p>创建2个字符串对象（前提是 String Pool 中还没有 &quot;abcd&quot; 字符串对象）。</p><ul><li>&quot;abc&quot; 属于字符串字面量，因此编译时期会<strong>在常量池中创建一个字符串对象</strong>，指向这个 &quot;abcd&quot; 字符串字面量；</li><li>使用 new 的方式会在堆中创建一个字符串对象。</li></ul><p>(字符串常量&quot;abc&quot;在<strong>编译期</strong>就已经确定放入常量池，而 Java <strong>堆上的&quot;abc&quot;是在运行期</strong>初始化阶段才确定)。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>String s1 = new String(&quot;abc&quot;);// 堆内存的地址值</span></span>
<span class="line"><span>String s2 = &quot;abc&quot;;</span></span>
<span class="line"><span>System.out.println(s1 == s2);// 输出false</span></span>
<span class="line"><span>//因为一个是堆内存，一个是常量池的内存，故两者是不同的。</span></span>
<span class="line"><span>System.out.println(s1.equals(s2));// 输出true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,41),p=[l];function e(h,r,k,d,o,E){return a(),i("div",null,p)}const c=s(t,[["render",e]]);export{u as __pageData,c as default};