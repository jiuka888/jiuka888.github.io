import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.DpC1ZpOZ.js";const u=JSON.parse('{"title":"类文件结构","description":"","frontmatter":{},"headers":[],"relativePath":"java/JVM/5_类文件结构.md","filePath":"java/JVM/5_类文件结构.md","lastUpdated":1728037326000}'),l={name:"java/JVM/5_类文件结构.md"},e=n(`<h1 id="类文件结构" tabindex="-1">类文件结构 <a class="header-anchor" href="#类文件结构" aria-label="Permalink to &quot;类文件结构&quot;">​</a></h1><h2 id="类文件概述" tabindex="-1">类文件概述 <a class="header-anchor" href="#类文件概述" aria-label="Permalink to &quot;类文件概述&quot;">​</a></h2><p>JVM 可以理解的代码就叫做<strong>字节码</strong>（即扩展名为 .class 的文件，即类文件），它不面向任何特定的处理器，只面向虚拟机。Java 语言通过字节码的方式，在一定程度上解决了传统解释型语言执行效率低的问题，同时又保留了解释型语言可移植的特点。</p><p>字节码并不针对一种特定的机器，因此 Java 程序无须重新编译便可在多种不同操作系统的计算机上运行。</p><h2 id="类文件结构-1" tabindex="-1">类文件结构 <a class="header-anchor" href="#类文件结构-1" aria-label="Permalink to &quot;类文件结构&quot;">​</a></h2><p>根据 JVM 规范，Class 文件通过 ClassFile 定义：</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ClassFile {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    u4             magic;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // Class 文件的标志</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    u2             minor_version;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // Class 的小版本号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    u2             major_version;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // Class 的大版本号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    u2             constant_pool_count;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 常量池的数量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cp_info        </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">constant_pool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[constant_pool_count</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 常量池</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    u2             access_flags;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Class 的访问标记</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    u2             this_class;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 当前类</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    u2             super_class;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 父类</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    u2             interfaces_count;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 接口</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    u2             </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">interfaces</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[interfaces_count];</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 一个类可以实现多个接口</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    u2             fields_count;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // Class 文件的字段属性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    field_info     </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[fields_count];</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 一个类会可以有多个字段</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    u2             methods_count;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // Class 文件的方法数量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    method_info    </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">methods</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[methods_count];</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 一个类可以有个多个方法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    u2             attributes_count;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 此类的属性表中的属性数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    attribute_info </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">attributes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[attributes_count];</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 属性表集合</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>通过分析 ClassFilee，得到 class 文件的组成：</p><div align="center"><img src="https://github.com/DuHouAn/ImagePro/raw/master/JVM/j_8.jpg" width="500px"></div><h3 id="魔数" tabindex="-1">魔数 <a class="header-anchor" href="#魔数" aria-label="Permalink to &quot;魔数&quot;">​</a></h3><p>每个 Class 文件的头 4 个字节称为魔数（Magic Number），它的唯一作用是<strong>确定这个文件是否为一个能被虚拟机接收的 Class 文件</strong>。</p><h3 id="文件版本号" tabindex="-1">文件版本号 <a class="header-anchor" href="#文件版本号" aria-label="Permalink to &quot;文件版本号&quot;">​</a></h3><p>紧接着魔数的四个字节存储的是 Class 文件的版本号：第 5 和第 6 字节位是<strong>次版本号</strong>（Minor Version），第 7 和第 8 字节位是<strong>主版本号</strong>（Major Version）。</p><p>每当 Java 发布大版本（比如 Java 8，Java 9）的时候，主版本号都会加 1。</p><p>可以使用 <code>javap -v</code> 命令来快速查看 Class 文件的版本号信息。</p><p>高版本的 Java 虚拟机可以执行低版本编译器生成的 Class 文件，但是低版本的 Java 虚拟机不能执行高版本编译器生成的 Class 文件。在开发时要确保开发的的 JDK 版本和生产环境的 JDK 版本保持一致。</p><h3 id="常量池" tabindex="-1">常量池 <a class="header-anchor" href="#常量池" aria-label="Permalink to &quot;常量池&quot;">​</a></h3><p>紧接着主次版本号之后的是常量池，常量池的数量是 constant_pool_count-1。</p><p>这是因为常量池计数器是从 1 开始计数的，将第 0 项常量空出来是有特殊考虑的，索引值为 0 代表“不引用任何一个常量池项。</p><p>常量池主要存放两大常量：<strong>字面量</strong>和<strong>符号引用</strong>。</p><p>字面量比较接近于 Java 语言层面的的常量概念，如文本字符串、声明为 final 的常量值等。</p><p>符号引用则属于编译原理方面的概念，包括下面三类常量：</p><ul><li>类和接口的全限定名</li><li>字段的名称和描述符</li><li>方法的名称和描述符</li></ul><p>常量池中每一项常量都是一个表：表开始的第一位是一个 u1（占 1 个字节） 类型的标志位 - tag 来标识常量的类型，代表当前这个常量属于哪种常量类型。</p><h3 id="访问标志" tabindex="-1">访问标志 <a class="header-anchor" href="#访问标志" aria-label="Permalink to &quot;访问标志&quot;">​</a></h3><p>紧接着常量池的两个字节代表访问标志（Access Flag），这个标志用于识别一些类或者接口层次的访问信息，包括：</p><ul><li>这个 Class 是类还是接口</li><li>是否为 public 或者 abstract 类型</li><li>如果是类的话是否声明为 final 等</li></ul><h3 id="当前类-父类" tabindex="-1">当前类 &amp; 父类 <a class="header-anchor" href="#当前类-父类" aria-label="Permalink to &quot;当前类 &amp; 父类&quot;">​</a></h3><p>类索引（This Class）用于确定这个类的全限定名，父类索引（Super Class）用于确定这个类的父类的全限定名，由于 Java 语言的单继承，所以父类索引只有一个，除了 <code>java.lang.Object</code> 之外，所有的 Java 类都有父类，因此除了 java.lang.Object 外，所有 Java 类的父类索引都不为 0。</p><h3 id="接口索引集合" tabindex="-1">接口索引集合 <a class="header-anchor" href="#接口索引集合" aria-label="Permalink to &quot;接口索引集合&quot;">​</a></h3><p>接口索引集合用来描述这个类实现了哪些接口，这些被实现的接口将按 implements （如果这个类本身是接口的话则是extends）后的接口顺序从左到右排列在接口索引集合中。</p><h3 id="字段表集合" tabindex="-1">字段表集合 <a class="header-anchor" href="#字段表集合" aria-label="Permalink to &quot;字段表集合&quot;">​</a></h3><p>字段表（Fields）用于描述接口或类中声明的变量。</p><p>字段包括类级变量以及实例变量，但不包括在方法内部声明的局部变量。</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">field_info{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    u2                access_flags;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    u2                name_index;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    u2                descriptor_index;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    u2                attributes_count;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    attribute_info    </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">attributes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[attributes_count];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>其中：</p><ul><li>access_flags：字段的作用域（public，protected，private）；实例变量还是类变量（static）；是否可被序列化（transient）；可变性（final）；可见性（volatile）</li><li>name_index：对常量池的引用，表示字段的名称</li><li>descriptor_index：对常量池的引用，表示字段和方法的描述符</li><li>attributes_count：一个字段还会拥有一些额外的属性，表示额外属性的个数</li><li>attributes[attributes_count]：存放属性具体内容。</li></ul><h3 id="方法表集合" tabindex="-1">方法表集合 <a class="header-anchor" href="#方法表集合" aria-label="Permalink to &quot;方法表集合&quot;">​</a></h3><p>methods_count 表示方法的数量，而 method_info 表示方法表。</p><p>Class 文件存储格式中对方法的描述与对字段的描述几乎采用了完全一致的方式。方法表的结构如同字段表一样，依次包括了访问标志、名称索引、描述符索引、属性表集合几项。</p><p>因为 volatile 修饰符和 transient 修饰符不可以修饰方法，所以方法表的访问标志中没有这两个对应的标志，但是增加了 synchronized、native、abstract 等关键字修饰方法，所以也就多了这些关键字对应的标志。</p><h3 id="属性表集合" tabindex="-1">属性表集合 <a class="header-anchor" href="#属性表集合" aria-label="Permalink to &quot;属性表集合&quot;">​</a></h3><p>在 Class 文件，字段表，方法表中都可以携带自己的属性表集合，以用于描述某些场景专有的信息。与 Class 文件中其它的数据项目要求的顺序、长度和内容不同，属性表集合的限制稍微宽松一些，不再要求各个属性表具有严格的顺序，并且只要不与已有的属性名重复，任何人实现的编译器都可以向属性表中写 入自己定义的属性信息，JVM 运行时会忽略掉它不认识的属性。</p>`,43),t=[e];function p(h,r,k,c,d,o){return i(),a("div",null,t)}const b=s(l,[["render",p]]);export{u as __pageData,b as default};
