import{_ as s,c as i,o as a,a4 as l}from"./chunks/framework.DpC1ZpOZ.js";const g=JSON.parse('{"title":"一、跨站脚本攻击（XSS）","description":"","frontmatter":{},"headers":[],"relativePath":"java/Safety/常见攻击技术及防御.md","filePath":"java/Safety/常见攻击技术及防御.md","lastUpdated":1728037326000}'),t={name:"java/Safety/常见攻击技术及防御.md"},e=l(`<h1 id="一、跨站脚本攻击-xss" tabindex="-1">一、跨站脚本攻击（XSS） <a class="header-anchor" href="#一、跨站脚本攻击-xss" aria-label="Permalink to &quot;一、跨站脚本攻击（XSS）&quot;">​</a></h1><h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><p>跨站脚本攻击（Cross-Site Scripting, XSS），可以将代码注入到用户浏览的网页上，这种代码包括 HTML 和 JavaScript。</p><h2 id="攻击原理" tabindex="-1">攻击原理 <a class="header-anchor" href="#攻击原理" aria-label="Permalink to &quot;攻击原理&quot;">​</a></h2><div align="center"><img src="https://github.com/DuHouAn/ImagePro/raw/master/java-notes/sfatety/safety_1.png" width="425"></div><h2 id="危害" tabindex="-1">危害 <a class="header-anchor" href="#危害" aria-label="Permalink to &quot;危害&quot;">​</a></h2><ul><li>偷取网站任意数据</li><li>偷取用户资料</li><li>劫持前端逻辑</li><li>显示伪造的文章或者图片</li></ul><h2 id="攻击分类" tabindex="-1">攻击分类 <a class="header-anchor" href="#攻击分类" aria-label="Permalink to &quot;攻击分类&quot;">​</a></h2><h3 id="_1-反射型" tabindex="-1">1. 反射型 <a class="header-anchor" href="#_1-反射型" aria-label="Permalink to &quot;1. 反射型&quot;">​</a></h3><p>反射型指的是 url 参数直接注入。比如：在浏览器地址栏中</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">localhost:1521?from=&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Bai</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2-存储型" tabindex="-1">2. 存储型 <a class="header-anchor" href="#_2-存储型" aria-label="Permalink to &quot;2. 存储型&quot;">​</a></h3><p>存储到数据库后读取时注入。</p><p>一个攻击者在论坛的楼层中包含了一段 JavaScript 代码，并且服务器没有正确进行过滤，那就会造在浏览这个页面时会执行这段 JavaScript 代码。</p><h2 id="xss-攻击注入点" tabindex="-1">XSS 攻击注入点 <a class="header-anchor" href="#xss-攻击注入点" aria-label="Permalink to &quot;XSS 攻击注入点&quot;">​</a></h2><h3 id="_1-html-节点内容" tabindex="-1">1. HTML 节点内容 <a class="header-anchor" href="#_1-html-节点内容" aria-label="Permalink to &quot;1. HTML 节点内容&quot;">​</a></h3><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #{content}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>注入点：</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_2-html-属性" tabindex="-1">2. HTML 属性 <a class="header-anchor" href="#_2-html-属性" aria-label="Permalink to &quot;2. HTML 属性&quot;">​</a></h3><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#{image}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>注入点：</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onerror</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alert</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>其中 1&quot; onerror=&quot;alert(1) 就是 #{image} 。这里可看出 <code>&lt;img&gt;</code>多了一个属性 onerror。</p><h3 id="_3-javascript-代码" tabindex="-1">3. JavaScript 代码 <a class="header-anchor" href="#_3-javascript-代码" aria-label="Permalink to &quot;3. JavaScript 代码&quot;">​</a></h3><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#{data}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>注入点：</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>其中 hello&quot;;alert(1);&quot; 就是 #{data}。这里可看出实际上是即为 data 赋值，也进行了 alert 操作。</p><h3 id="_4-富文本" tabindex="-1">4. 富文本 <a class="header-anchor" href="#_4-富文本" aria-label="Permalink to &quot;4. 富文本&quot;">​</a></h3><p>富文本需要保留 HTML，但 HTML 存在 XSS 攻击风险。</p><h2 id="防御" tabindex="-1">防御 <a class="header-anchor" href="#防御" aria-label="Permalink to &quot;防御&quot;">​</a></h2><h3 id="浏览器自带防御" tabindex="-1">浏览器自带防御 <a class="header-anchor" href="#浏览器自带防御" aria-label="Permalink to &quot;浏览器自带防御&quot;">​</a></h3><p>使用浏览器自带防御可防御一些 XSS。但是存在一些不足：</p><ul><li>只能对参数出现在 HMTL 内容或属性的反射型 XSS 进行防御</li><li>并不是所有浏览器都支持对 XSS 的防御</li></ul><h3 id="html-内容" tabindex="-1">HTML 内容 <a class="header-anchor" href="#html-内容" aria-label="Permalink to &quot;HTML 内容&quot;">​</a></h3><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>解决：</p><ul><li>将 <code>&lt;</code> 转义为 <code>&amp;lt;</code></li><li>将 <code>&gt;</code> 转义为 <code>&amp;gt;</code></li></ul><p>转义后：</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">div</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;gt;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &amp;lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">script</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;gt;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &amp;lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/script</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;gt;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/div</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="html-属性" tabindex="-1">HTML 属性 <a class="header-anchor" href="#html-属性" aria-label="Permalink to &quot;HTML 属性&quot;">​</a></h3><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onerror</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alert</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>解决：</p><ul><li>将 <code>&quot;</code>转义为 <code>&amp;quto;</code></li><li>将 <code>&#39;</code>转义为 <code>&amp;apos;</code></li><li>将空格转义为 <code>&amp;#32;</code></li></ul><p>转义后：</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&amp;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">quto; onerror=</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&amp;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">quto;alert(1)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="javascript-代码" tabindex="-1">JavaScript 代码 <a class="header-anchor" href="#javascript-代码" aria-label="Permalink to &quot;JavaScript 代码&quot;">​</a></h3><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">script</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">script</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>解决：</p><ul><li>将 <code>&quot;</code>转义为 <code>\\&quot;</code></li><li>将 <code>\\</code>转义为 <code>\\\\</code></li><li>或者转化为 json</li></ul><p>转义后：</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">;alert(1);</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="富文本" tabindex="-1">富文本 <a class="header-anchor" href="#富文本" aria-label="Permalink to &quot;富文本&quot;">​</a></h3><p><a href="https://github.com/leizongmin/js-xss/blob/master/README.zh.md" target="_blank" rel="noreferrer">按<strong>白名单</strong>保留部分标签和属性。</a></p><h3 id="csp" tabindex="-1">CSP <a class="header-anchor" href="#csp" aria-label="Permalink to &quot;CSP&quot;">​</a></h3><p><a href="https://blog.csdn.net/Fly_hps/article/details/86466367" target="_blank" rel="noreferrer">CSP</a> 即内容安全策略（Content Security Policy）：用于指定哪些内容可执行。</p><h1 id="二、跨站请求伪造-csrf" tabindex="-1">二、跨站请求伪造（CSRF） <a class="header-anchor" href="#二、跨站请求伪造-csrf" aria-label="Permalink to &quot;二、跨站请求伪造（CSRF）&quot;">​</a></h1><h2 id="概念-1" tabindex="-1">概念 <a class="header-anchor" href="#概念-1" aria-label="Permalink to &quot;概念&quot;">​</a></h2><p>跨站请求伪造（Cross-site request forgery，CSRF），是攻击者通过一些技术手段欺骗用户的浏览器去访问一个自己曾经认证过的网站并执行一些操作（如发邮件，发消息，甚至财产操作如转账和购买商品）。由于浏览器曾经认证过，所以被访问的网站会认为是真正的用户操作而去执行。</p><p>XSS 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户浏览器的信任。</p><h2 id="攻击原理-1" tabindex="-1">攻击原理 <a class="header-anchor" href="#攻击原理-1" aria-label="Permalink to &quot;攻击原理&quot;">​</a></h2><div align="center"><img src="https://github.com/DuHouAn/ImagePro/raw/master/java-notes/sfatety/safety_2.png" width="425"></div><ul><li>用户登录 A 网站</li><li>A 网站确认身份</li><li>B 网站页面向 A 网站发起请求（带 A 网站身份） <ul><li>B 网站向 A 网站请求，带 A 网站 Cookies</li><li>不访问 A 网站前端</li><li>referer 为 B 网站</li></ul></li></ul><h2 id="危害-1" tabindex="-1">危害 <a class="header-anchor" href="#危害-1" aria-label="Permalink to &quot;危害&quot;">​</a></h2><ul><li>利用用户登录态</li><li>用户不知情</li><li>完成业务请求</li></ul><h2 id="防御-1" tabindex="-1">防御 <a class="header-anchor" href="#防御-1" aria-label="Permalink to &quot;防御&quot;">​</a></h2><h3 id="带-a-网站-cookies" tabindex="-1">带 A 网站 Cookies <a class="header-anchor" href="#带-a-网站-cookies" aria-label="Permalink to &quot;带 A 网站 Cookies&quot;">​</a></h3><p>利用 Cookie 中新增<strong>属性 same-site</strong>，禁止第三方网站带 Cookies。但是这样适配性比较差，目前只有 Chrome 支持。</p><h3 id="不访问-a-网站前端" tabindex="-1">不访问 A 网站前端 <a class="header-anchor" href="#不访问-a-网站前端" aria-label="Permalink to &quot;不访问 A 网站前端&quot;">​</a></h3><p>在前端页面加入验证消息，有 2 种方式：</p><ul><li><p><strong>验证码</strong></p><p>因为 CSRF 攻击是在用户无意识的情况下发生的，所以要求用户输入验证码可以让用户知道自己正在做的操作。</p></li><li><p><strong>token</strong></p><p>例如服务器生成随机数并附加在表单中，并要求客户端传回这个随机数。</p></li></ul><h3 id="referer-为-b-网站" tabindex="-1">referer 为 B 网站 <a class="header-anchor" href="#referer-为-b-网站" aria-label="Permalink to &quot;referer 为 B 网站&quot;">​</a></h3><p><strong>验证 referer</strong>。判断请求的来源是否合法。</p><h1 id="三、sql-注入" tabindex="-1">三、SQL 注入 <a class="header-anchor" href="#三、sql-注入" aria-label="Permalink to &quot;三、SQL 注入&quot;">​</a></h1><h2 id="概念-2" tabindex="-1">概念 <a class="header-anchor" href="#概念-2" aria-label="Permalink to &quot;概念&quot;">​</a></h2><p>服务器上的数据库运行非法的 SQL 语句，主要通过拼接来完成。</p><h2 id="攻击原理-2" tabindex="-1">攻击原理 <a class="header-anchor" href="#攻击原理-2" aria-label="Permalink to &quot;攻击原理&quot;">​</a></h2><p>例如一个网站登录验证的 SQL 查询代码为：</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> users </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;\${userName}&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (pw </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;\${passWord}&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果填入以下内容：</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">userName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39; OR &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;=&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">passWord</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39; OR &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;=&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>那么 SQL 查询字符串为：</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> users </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;1&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> OR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;1&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (pw </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;1&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> OR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;1&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>此时无需验证通过就能执行以下查询：</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> users;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="危害-2" tabindex="-1">危害 <a class="header-anchor" href="#危害-2" aria-label="Permalink to &quot;危害&quot;">​</a></h2><ul><li>猜解密码</li><li>获取数据</li><li>删库删表</li><li>拖库</li></ul><h2 id="防御-2" tabindex="-1">防御 <a class="header-anchor" href="#防御-2" aria-label="Permalink to &quot;防御&quot;">​</a></h2><ul><li>关闭错误输出（只能在一定程度上增加 SQL 注入的难度，并不能解决 SQL 注入问题）</li><li>检查数据类型</li><li>对数据进行转义</li><li>使用<strong>参数化查询</strong>（推荐使用）</li><li>使用 <a href="https://www.cnblogs.com/best/p/9711215.html#_label0" target="_blank" rel="noreferrer">ORM</a>（对象关系映射）</li></ul><h1 id="四、dos-攻击" tabindex="-1">四、DoS 攻击 <a class="header-anchor" href="#四、dos-攻击" aria-label="Permalink to &quot;四、DoS 攻击&quot;">​</a></h1><h2 id="概念-3" tabindex="-1">概念 <a class="header-anchor" href="#概念-3" aria-label="Permalink to &quot;概念&quot;">​</a></h2><p>拒绝服务攻击（denial-of-service attack，DoS），亦称洪水攻击，模拟正常用户使目标电脑的网络或系统资源耗尽，使服务暂时中断或停止，导致正常用户无法访问。</p><h2 id="类型" tabindex="-1">类型 <a class="header-anchor" href="#类型" aria-label="Permalink to &quot;类型&quot;">​</a></h2><ul><li>TCP 半连接</li><li>HTTP 连接</li><li>DNS</li></ul><h2 id="ddos" tabindex="-1">DDoS <a class="header-anchor" href="#ddos" aria-label="Permalink to &quot;DDoS&quot;">​</a></h2><p>分布式拒绝服务攻击（distributed denial-of-service attack，DDoS），指攻击者使用两个或以上被攻陷的电脑作为“僵尸”向特定的目标发动“拒绝服务”式攻击。</p><h2 id="防御-3" tabindex="-1">防御 <a class="header-anchor" href="#防御-3" aria-label="Permalink to &quot;防御&quot;">​</a></h2><ul><li>防火墙</li><li>交换机、路由器</li><li>流量清洗</li><li>高仿 IP</li></ul><h2 id="预防" tabindex="-1">预防 <a class="header-anchor" href="#预防" aria-label="Permalink to &quot;预防&quot;">​</a></h2><ul><li>避免重逻辑业务</li><li>快速失败快速返回</li><li>防雪崩机制</li><li>有损服务</li><li>CDN</li></ul>`,101),n=[e];function h(p,r,k,d,o,c){return a(),i("div",null,n)}const u=s(t,[["render",h]]);export{g as __pageData,u as default};
