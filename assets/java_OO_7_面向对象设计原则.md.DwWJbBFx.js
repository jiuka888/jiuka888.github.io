import{_ as t,c as e,o as a,a4 as l}from"./chunks/framework.DpC1ZpOZ.js";const b=JSON.parse('{"title":"面向对象设计原则","description":"","frontmatter":{},"headers":[],"relativePath":"java/OO/7_面向对象设计原则.md","filePath":"java/OO/7_面向对象设计原则.md","lastUpdated":null}'),r={name:"java/OO/7_面向对象设计原则.md"},n=l('<h1 id="面向对象设计原则" tabindex="-1">面向对象设计原则 <a class="header-anchor" href="#面向对象设计原则" aria-label="Permalink to &quot;面向对象设计原则&quot;">​</a></h1><h2 id="s-o-l-i-d" tabindex="-1">S.O.L.I.D <a class="header-anchor" href="#s-o-l-i-d" aria-label="Permalink to &quot;S.O.L.I.D&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">简写</th><th style="text-align:center;">全拼</th><th style="text-align:center;">中文翻译</th></tr></thead><tbody><tr><td style="text-align:center;">SRP</td><td style="text-align:center;">The Single Responsibility Principle</td><td style="text-align:center;">单一责任原则</td></tr><tr><td style="text-align:center;">OCP</td><td style="text-align:center;">The Open Closed Principle</td><td style="text-align:center;">开放封闭原则</td></tr><tr><td style="text-align:center;">LSP</td><td style="text-align:center;">The Liskov Substitution Principle</td><td style="text-align:center;">里氏替换原则</td></tr><tr><td style="text-align:center;">ISP</td><td style="text-align:center;">The Interface Segregation Principle</td><td style="text-align:center;">接口分离原则</td></tr><tr><td style="text-align:center;">DIP</td><td style="text-align:center;">The Dependency Inversion Principle</td><td style="text-align:center;">依赖倒置原则</td></tr></tbody></table><h3 id="_1-单一责任原则" tabindex="-1">1. 单一责任原则 <a class="header-anchor" href="#_1-单一责任原则" aria-label="Permalink to &quot;1. 单一责任原则&quot;">​</a></h3><blockquote><p>修改一个类的原因应该只有一个。</p></blockquote><p>换句话说就是让一个类只负责一件事，当这个类需要做过多事情的时候，就需要分解这个类。</p><p>如果一个类承担的职责过多，就等于把这些职责耦合在了一起，一个职责的变化可能会削弱这个类完成其它职责的能力。</p><h3 id="_2-开放封闭原则" tabindex="-1">2. 开放封闭原则 <a class="header-anchor" href="#_2-开放封闭原则" aria-label="Permalink to &quot;2. 开放封闭原则&quot;">​</a></h3><blockquote><p>类应该对扩展开放，对修改关闭。</p></blockquote><p>扩展就是添加新功能的意思，因此该原则要求在添加新功能时不需要修改代码。</p><p>符合开闭原则最典型的设计模式是装饰者模式，它可以动态地将责任附加到对象上，而不用去修改类的代码。</p><h3 id="_3-里氏替换原则" tabindex="-1">3. 里氏替换原则 <a class="header-anchor" href="#_3-里氏替换原则" aria-label="Permalink to &quot;3. 里氏替换原则&quot;">​</a></h3><blockquote><p>子类对象必须能够替换掉所有父类对象。</p></blockquote><p>继承是一种 IS-A 关系，子类需要能够当成父类来使用，并且需要比父类更特殊。</p><p>如果不满足这个原则，那么各个子类的行为上就会有很大差异，增加继承体系的复杂度。</p><h3 id="_4-接口分离原则" tabindex="-1">4. 接口分离原则 <a class="header-anchor" href="#_4-接口分离原则" aria-label="Permalink to &quot;4. 接口分离原则&quot;">​</a></h3><blockquote><p>不应该强迫客户依赖于它们不用的方法。</p></blockquote><p>因此使用多个专门的接口比使用单一的总接口要好。</p><h3 id="_5-依赖倒置原则" tabindex="-1">5. 依赖倒置原则 <a class="header-anchor" href="#_5-依赖倒置原则" aria-label="Permalink to &quot;5. 依赖倒置原则&quot;">​</a></h3><blockquote><p>高层模块不应该依赖于低层模块，二者都应该依赖于抽象；抽象不应该依赖于细节，细节应该依赖于抽象。</p></blockquote><p>高层模块包含一个应用程序中重要的策略选择和业务模块，如果高层模块依赖于低层模块，那么低层模块的改动就会直接影响到高层模块，从而迫使高层模块也需要改动。</p><p>依赖于抽象意味着：</p><ul><li>任何变量都不应该持有一个指向具体类的指针或者引用；</li><li>任何类都不应该从具体类派生；</li><li>任何方法都不应该覆写它的任何基类中的已经实现的方法。</li></ul><h2 id="其他常见原则" tabindex="-1">其他常见原则 <a class="header-anchor" href="#其他常见原则" aria-label="Permalink to &quot;其他常见原则&quot;">​</a></h2><p>除了上述的经典原则，在实际开发中还有下面这些常见的设计原则。</p><table tabindex="0"><thead><tr><th style="text-align:center;">简写</th><th style="text-align:center;">全拼</th><th style="text-align:center;">中文翻译</th></tr></thead><tbody><tr><td style="text-align:center;">LOD</td><td style="text-align:center;">The Law of Demeter</td><td style="text-align:center;">迪米特法则</td></tr><tr><td style="text-align:center;">CRP</td><td style="text-align:center;">The Composite Reuse Principle</td><td style="text-align:center;">合成复用原则</td></tr><tr><td style="text-align:center;">CCP</td><td style="text-align:center;">The Common Closure Principle</td><td style="text-align:center;">共同封闭原则</td></tr><tr><td style="text-align:center;">SAP</td><td style="text-align:center;">The Stable Abstractions Principle</td><td style="text-align:center;">稳定抽象原则</td></tr><tr><td style="text-align:center;">SDP</td><td style="text-align:center;">The Stable Dependencies Principle</td><td style="text-align:center;">稳定依赖原则</td></tr></tbody></table><h3 id="_1-迪米特法则" tabindex="-1">1. 迪米特法则 <a class="header-anchor" href="#_1-迪米特法则" aria-label="Permalink to &quot;1. 迪米特法则&quot;">​</a></h3><p>迪米特法则又叫作最少知识原则（Least Knowledge Principle，简写 LKP），就是说一个对象应当对其他对象有尽可能少的了解，不和陌生人说话。</p><h3 id="_2-合成复用原则" tabindex="-1">2. 合成复用原则 <a class="header-anchor" href="#_2-合成复用原则" aria-label="Permalink to &quot;2. 合成复用原则&quot;">​</a></h3><p>尽量使用对象组合，而不是通过继承来达到复用的目的。</p><h3 id="_3-共同封闭原则" tabindex="-1">3. 共同封闭原则 <a class="header-anchor" href="#_3-共同封闭原则" aria-label="Permalink to &quot;3. 共同封闭原则&quot;">​</a></h3><p>一起修改的类，应该组合在一起（同一个包里）。如果必须修改应用程序里的代码，我们希望所有的修改都发生在一个包里（修改关闭），而不是遍布在很多包里。</p><h3 id="_4-稳定抽象原则" tabindex="-1">4. 稳定抽象原则 <a class="header-anchor" href="#_4-稳定抽象原则" aria-label="Permalink to &quot;4. 稳定抽象原则&quot;">​</a></h3><p>最稳定的包应该是最抽象的包，不稳定的包应该是具体的包，即包的抽象程度跟它的稳定性成正比。</p><h3 id="_5-稳定依赖原则" tabindex="-1">5. 稳定依赖原则 <a class="header-anchor" href="#_5-稳定依赖原则" aria-label="Permalink to &quot;5. 稳定依赖原则&quot;">​</a></h3><p>包之间的依赖关系都应该是稳定方向依赖的，包要依赖的包要比自己更具有稳定性。</p><h2 id="设计模式的六大原则" tabindex="-1">设计模式的六大原则 <a class="header-anchor" href="#设计模式的六大原则" aria-label="Permalink to &quot;设计模式的六大原则&quot;">​</a></h2><ul><li>开放闭合原则</li><li>里式替换原则</li><li>接口分离原则</li><li>依赖倒置原则</li><li>迪米特法则</li><li>合成复用原则</li></ul>',38),i=[n];function d(o,c,h,s,p,_){return a(),e("div",null,i)}const u=t(r,[["render",d]]);export{b as __pageData,u as default};
