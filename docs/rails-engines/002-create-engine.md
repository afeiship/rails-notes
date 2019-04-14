# how to create

## create
> 通过运行插件生成器并传递必要的选项就可以生成引擎。在 Blorgh 引擎的例子中，我们需要创建“可挂载”的引擎，为此可以在终端中运行下面的命令：

```shell
# 创建一个plugin名为： blorgh
rails plugin new blorgh --mountable

# 查看完整的命令
rails plugin --help
```

## attention
~~~
通过 --mountable 选项，生成器会创建“可挂载”和具有独立命名空间的引擎。
此选项和 --full 选项会为引擎生成相同的程序骨架。
通过 --full 选项，生成器会在创建引擎的同时生成下面的程序骨架：
~~~

## config engine
~~~
lib/blorgh/engine.rb 文件，相当于 Rails 应用的 config/application.rb 配置文件：
~~~

```rb
module Blorgh
  class Engine < ::Rails::Engine
  end
end
```

## mountable vs full
~~~
--mountable 选项在 --full 选项的基础上增加了如下特性：
~~~

- 静态资源文件的清单文件（application.js 和 application.css）
- 具有独立命名空间的 ApplicationController
- 具有独立命名空间的 ApplicationHelper
- 引擎的布局视图模板

```rb
# 在 config/routes.rb 文件中为引擎设置独立的命名空间：
Blorgh::Engine.routes.draw do
end

# 在 lib/blorgh/engine.rb 文件中为引擎设置独立的命名空间：
module Blorgh
  class Engine < ::Rails::Engine
    isolate_namespace Blorgh
  end
end
```
~~~
此外，通过 --mountable 选项，
生成器会在位于 test/dummy 的 dummy 测试应用中挂载 blorgh 引擎，
具体做法是把下面这行代码添加到 dummy 
应用的路由文件 test/dummy/config/routes.rb 中：
~~~

```rb
mount Blorgh::Engine => "/blorgh"
```