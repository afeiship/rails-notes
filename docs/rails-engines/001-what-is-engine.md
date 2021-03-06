# what is engine
> 本文介绍引擎及其用法，即如何通过引擎这个干净、易用的接口，为宿主应用提供附加功能。

## description
~~~
引擎可以看作为宿主应用提供附加功能的微型应用。
实际上，Rails 应用只不过是“加强版”的引擎
Rails::Application 类从 Rails::Engine 类继承了大量行为。
一定要记住，在任何时候，应用的优先级都应该比引擎高。
应用对其环境中发生的事情拥有最终的决定权。
引擎用于增强应用的功能，而不是彻底改变应用的功能。
引擎的例子有
    - Devise（提供身份验证）
    - Thredded（提供论坛功能）
    - Spree（提供电子商务平台） 
    - 和 RefineryCMS（CMS 引擎）。
~~~

## engine vs plugin
~~~
引擎还和插件密切相关。
两者具有相同的 lib 目录结构，并且都使用 rails plugin new 生成器来生成。
区别在于，引擎被 Rails 视为“完整的插件”（通过传递给生成器的 --full 选项可以看出这一点）。
在这里我们实际使用的是 --mountable 选项，这个选项包含了 --full 选项的所有特性。
本文把这类“完整的插件”简称为“引擎”。
也就是说，引擎可以是插件，插件也可以是引擎。
~~~

## resources
- https://www.weiyun.com/disk/folder/4efd47053fefac82ede838ec6bd9d728[277-mountable-engines.mp4]