import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.DpC1ZpOZ.js";const c=JSON.parse('{"title":"常用注解","description":"","frontmatter":{},"headers":[],"relativePath":"java/SpringBoot/3_常用注解.md","filePath":"java/SpringBoot/3_常用注解.md","lastUpdated":1728037326000}'),t={name:"java/SpringBoot/3_常用注解.md"},p=n(`<h1 id="常用注解" tabindex="-1">常用注解 <a class="header-anchor" href="#常用注解" aria-label="Permalink to &quot;常用注解&quot;">​</a></h1><h2 id="springbootapplication" tabindex="-1">@SpringBootApplication <a class="header-anchor" href="#springbootapplication" aria-label="Permalink to &quot;@SpringBootApplication&quot;">​</a></h2><p>Spring Boot 项目的基石，创建 Spring Boot 项目之后会默认在主类加上。</p><p>@SpringBootApplication 可以认为是 <strong>@Configuration</strong> 、<strong>@EnableAutoConfiguration</strong> 和 <strong>@ComponentScan</strong> 注解的集合。这三个注解的具体作用如下：</p><ul><li>@EnableAutoConfiguration：启用 SpringBoot 的自动配置机制</li><li>@ComponentScan： 扫描被 @Component / @Service / @Controller 注解的 Bean，注解默认会扫描该类所在的包下所有的类。</li><li>@Configuration：允许在 Spring 上下文中注册额外的 Bean 或导入其他配置类</li></ul><p>@EnableAutoConfiguration 注解是启动自动配置的关键，其源码如下：</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> java.lang.annotation.Documented;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> java.lang.annotation.ElementType;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> java.lang.annotation.Inherited;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> java.lang.annotation.Retention;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> java.lang.annotation.RetentionPolicy;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> java.lang.annotation.Target;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.context.annotation.Import;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ElementType.TYPE})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Retention</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Documented</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Inherited</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">AutoConfigurationPackage</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({AutoConfigurationImportSelector.class})</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> EnableAutoConfiguration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    String ENABLED_OVERRIDE_PROPERTY </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;spring.boot.enableautoconfiguration&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">exclude</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">excludeName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>@EnableAutoConfiguration 注解通过 Spring 提供的 @Import 注解导入 AutoConfigurationImportSelector 类。AutoConfigurationImportSelector 类中 getCandidateConfigurations 方法会将所有自动配置类的信息以 List 的形式返回，这些配置信息会被 Spring 容器当作 Bean 来进行管理。</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    protected</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> List</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getCandidateConfigurations</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(AnnotationMetadata metadata, AnnotationAttributes attributes) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; configurations </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SpringFactoriesLoader.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">loadFactoryNames</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getSpringFactoriesLoaderFactoryClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                getBeanClassLoader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Assert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">notEmpty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(configurations, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;No auto configuration classes found in META-INF/spring.factories. If you &quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                +</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;are using a custom packaging, make sure that file is correct.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> configurations;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>补充：<a href="https://www.cnblogs.com/javaguide/p/springboot-auto-config.html" target="_blank" rel="noreferrer">SpringBoot 自动装配原理</a></p><h2 id="spring-bean-相关注解" tabindex="-1">Spring Bean 相关注解 <a class="header-anchor" href="#spring-bean-相关注解" aria-label="Permalink to &quot;Spring Bean 相关注解&quot;">​</a></h2><ul><li><p>Autowired</p><p>自动导入对象到类中，被注入进的类同样要被 Spring 容器管理。</p></li><li><p>@RestController</p><p>@RestController 注解是 @Controller和 @ResponseBody 的合集，表示这是个控制器 Bean，并且是将函数的返回值直 接填入 HTTP 响应体中，是 REST 风格的控制器。</p></li><li><p>@Component</p><p>可标注任意类为 Spring 组件。如果一个 Bean 不知道属于哪个层，可以使用 @Component 注解标注。</p></li><li><p>@Repository</p><p>对应持久层即 Dao 层，主要用于数据库相关操作。</p></li><li><p>@Service</p><p>对应服务层，主要涉及一些复杂的逻辑，需要用到 Dao 层。</p></li><li><p>@Controller</p><p>对应 Spring MVC 控制层，主要用于接受用户请求并调用 Service 层返回数据给前端页面。</p></li></ul><h2 id="处理常见的-http-请求类型" tabindex="-1">处理常见的 HTTP 请求类型 <a class="header-anchor" href="#处理常见的-http-请求类型" aria-label="Permalink to &quot;处理常见的 HTTP 请求类型&quot;">​</a></h2><ul><li>@GetMapping：GET 请求</li><li>@PostMapping：POST 请求</li><li>@PutMapping：PUT 请求</li><li>@DeleteMapping：DELETE 请求</li></ul><h2 id="前后端传值" tabindex="-1">前后端传值 <a class="header-anchor" href="#前后端传值" aria-label="Permalink to &quot;前后端传值&quot;">​</a></h2><ul><li><p>@RequestParam &amp; @Pathvairable</p><p>@PathVariable用于获取路径参数；</p><p>@RequestParam用于获取查询参数。</p></li><li><p>@RequestBody</p><p>用于读取 request 请求（可能是 POST、PUT、DELETE、GET 请求）的 Body 部分并且 Content-Type 为 application/json 格式的数据，接收到数据之后会自动将数据绑定到 Java 对象上去。系统会使用HttpMessageConverter 或者自定义的 HttpMessageConverter 将请求的 Body 中的 json 字符串转换为 java 对象。</p></li></ul>`,16),l=[p];function e(r,h,k,o,E,g){return a(),i("div",null,l)}const u=s(t,[["render",e]]);export{c as __pageData,u as default};
