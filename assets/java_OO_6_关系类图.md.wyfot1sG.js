import{_ as s,c as n,o as a,a4 as p}from"./chunks/framework.DpC1ZpOZ.js";const h=JSON.parse('{"title":"类图","description":"","frontmatter":{},"headers":[],"relativePath":"java/OO/6_关系类图.md","filePath":"java/OO/6_关系类图.md","lastUpdated":null}'),e={name:"java/OO/6_关系类图.md"},l=p(`<h1 id="类图" tabindex="-1">类图 <a class="header-anchor" href="#类图" aria-label="Permalink to &quot;类图&quot;">​</a></h1><p>以下类图使用 <a href="https://www.planttext.com/" target="_blank" rel="noreferrer">PlantUML</a> 绘制，更多语法及使用请参考：<a href="http://plantuml.com/" target="_blank" rel="noreferrer">http://plantuml.com/</a> 。</p><h2 id="泛化关系-generalization" tabindex="-1">泛化关系 (Generalization) <a class="header-anchor" href="#泛化关系-generalization" aria-label="Permalink to &quot;泛化关系 (Generalization)&quot;">​</a></h2><p>用来描述继承关系，在 Java 中使用 extends 关键字。</p><div align="center"><img src="https://github.com/DuHouAn/ImagePro/raw/master/java-notes/oo/SoWkIImgAStDuU8goIp9ILLmJyrBBKh.png"></div><br><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>title Generalization</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Vihical</span></span>
<span class="line"><span>class Car</span></span>
<span class="line"><span>class Trunck</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vihical &lt;|-- Car</span></span>
<span class="line"><span>Vihical &lt;|-- Trunck</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@enduml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="实现关系-realization" tabindex="-1">实现关系 (Realization) <a class="header-anchor" href="#实现关系-realization" aria-label="Permalink to &quot;实现关系 (Realization)&quot;">​</a></h2><p>用来实现一个接口，在 Java 中使用 implements 关键字。</p><div align="center"><img src="https://github.com/DuHouAn/ImagePro/raw/master/java-notes/oo/SoWkIImgAStDuU8goIp9ILK8IatCoQn.png"></div><br><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>title Realization</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface MoveBehavior</span></span>
<span class="line"><span>class Fly</span></span>
<span class="line"><span>class Run</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MoveBehavior &lt;|.. Fly</span></span>
<span class="line"><span>MoveBehavior &lt;|.. Run</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@enduml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="聚合关系-aggregation" tabindex="-1">聚合关系 (Aggregation) <a class="header-anchor" href="#聚合关系-aggregation" aria-label="Permalink to &quot;聚合关系 (Aggregation)&quot;">​</a></h2><p>表示整体由部分组成，但是整体和部分不是强依赖的，整体不存在了部分还是会存在。</p><div align="center"><img src="https://github.com/DuHouAn/ImagePro/raw/master/java-notes/oo/SoWkIImgAStDuU8goIp9ILLmJ4ylIar.png"></div><br><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>title Aggregation</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Computer</span></span>
<span class="line"><span>class Keyboard</span></span>
<span class="line"><span>class Mouse</span></span>
<span class="line"><span>class Screen</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Computer o-- Keyboard</span></span>
<span class="line"><span>Computer o-- Mouse</span></span>
<span class="line"><span>Computer o-- Screen</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@enduml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="组合关系-composition" tabindex="-1">组合关系 (Composition) <a class="header-anchor" href="#组合关系-composition" aria-label="Permalink to &quot;组合关系 (Composition)&quot;">​</a></h2><p>和聚合不同，组合中整体和部分是强依赖的，整体不存在了部分也不存在了。比如公司和部门，公司没了部门就不存在了。但是公司和员工就属于聚合关系了，因为公司没了员工还在。</p><div align="center"><img src="https://github.com/DuHouAn/ImagePro/raw/master/java-notes/oo/SoWkIImgAStDuU8goIp9ILLmpiyjo2_.png"></div><br><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>title Composition</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Company</span></span>
<span class="line"><span>class DepartmentA</span></span>
<span class="line"><span>class DepartmentB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Company *-- DepartmentA</span></span>
<span class="line"><span>Company *-- DepartmentB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@enduml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="关联关系-association" tabindex="-1">关联关系 (Association) <a class="header-anchor" href="#关联关系-association" aria-label="Permalink to &quot;关联关系 (Association)&quot;">​</a></h2><p>表示不同类对象之间有关联，这是一种静态关系，与运行过程的状态无关，在最开始就可以确定。因此也可以用 1 对 1、多对 1、多对多这种关联关系来表示。比如学生和学校就是一种关联关系，一个学校可以有很多学生，但是一个学生只属于一个学校，因此这是一种多对一的关系，在运行开始之前就可以确定。</p><div align="center"><img src="https://github.com/DuHouAn/ImagePro/raw/master/java-notes/oo/SoWkIImgAStDuU8goIp9ILLmB2xEJyv.png"></div><br><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>title Association</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class School</span></span>
<span class="line"><span>class Student</span></span>
<span class="line"><span></span></span>
<span class="line"><span>School &quot;1&quot; - &quot;n&quot; Student</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@enduml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="依赖关系-dependency" tabindex="-1">依赖关系 (Dependency) <a class="header-anchor" href="#依赖关系-dependency" aria-label="Permalink to &quot;依赖关系 (Dependency)&quot;">​</a></h2><p>和关联关系不同的是，依赖关系是在运行过程中起作用的。A 类和 B 类是依赖关系主要有三种形式：</p><ul><li>A 类是 B 类方法的局部变量；</li><li>A 类是 B 类方法当中的一个参数；</li><li>A 类向 B 类发送消息，从而影响 B 类发生变化。</li></ul><div align="center"><img src="https://github.com/DuHouAn/ImagePro/raw/master/java-notes/oo/LOun2W9134NxVugmbJPp15d4LalxC4O.png"></div><br><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>title Dependency</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Vihicle {</span></span>
<span class="line"><span>    move(MoveBehavior)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface MoveBehavior {</span></span>
<span class="line"><span>    move()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>note &quot;MoveBehavior.move()&quot; as N</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vihicle ..&gt; MoveBehavior</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vihicle .. N</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@enduml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,33),i=[l];function r(t,c,o,b,u,m){return a(),n("div",null,i)}const g=s(e,[["render",r]]);export{h as __pageData,g as default};
