# mount your engin
> 在新建引擎的文件夹中有一个 blorgh.gemspec 文件。通过在 Rails 应用的 Gemfile 文件中添加下面的代码，可以把引擎挂载到应用中：

## you app Gemfile
```rb
gem 'blorgh', path: 'engines/blorgh'
```

## isolate_namespace
> lib/blorgh/engine.rb

~~~
这里的 isolate_namespace 方法尤其需要注意。
通过调用此方法，可以把引擎的控制器、模型、路由和其他组件隔离到各自的命名空间中
以便和应用中的类似组件隔离开来。
~~~

```rb{3}
module Blorgh
  class Engine < ::Rails::Engine
    isolate_namespace Blorgh
  end
end
```

## namespace
~~~
命名空间隔离的意思是，通过 bin/rails g model 生成的模型
例如 bin/rails g model article
    不会被命名为 Article
    而会被命名为带有命名空间的 Blorgh::Article。
此外，模型的表名同样带有命名空间，也就是说表名不是 articles，而是 blorgh_articles。

和模型的命名规则类似，控制器不会被命名为 ArticlesController
而会被命名为 Blorgh::ArticlesController

控制器对应的视图不是 app/views/articles，
而是 app/views/blorgh/articles。邮件程序的情况类似。
~~~