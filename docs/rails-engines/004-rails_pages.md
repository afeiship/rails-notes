# rails_pages 
> 自己的一第一个公用 rails 模块实战项目。

## step by step
1. 新建 `rails_pages` 项目
```shell
# 像正常项目一样新建
rails plugin rails_pages --mountable
```

2. 创建一个 `pages_controller`
> 位置在 controller/rails_pages/pages_controller.rb
```rb
# rails g controller pages
# controller
module RailsPages
  class PagesController < ApplicationController
    RailsPages.configuration.pages.each do |page|
      define_method(page) do
        @page_name = page
      end
    end
  end
end
```

3. 路由模块 `config/routes.rb`
> 这里自己还存在的疑问是，路由为什么不需要在 rails_pages/routes.rb 下面
```rb
module RailsPages
  Rails.application.routes.draw do
    # 这里不加判断会在初始化装 gem 的时候报错
    unless RailsPages.configuration.nil?
      RailsPages.configuration.pages.each do |page|
        mounted_at = RailsPages::Engine.routes.find_script_name({}).slice(1, 100)
        get "#{mounted_at}/#{page}", to: "rails_pages/pages##{page}"
      end
    end
  end
end
```

4. 其它  generator 部分的核心代码如下：
~~~
$ tree
.
├── generators
│   └── rails_pages
│       ├── initializer_generator.rb
│       ├── install_generator.rb
│       ├── page_generator.rb
│       └── templates
│           ├── initializers
│           │   └── rails_pages.rb
│           └── views
│               ├── application.html.erb
│               └── page.html.erb
├── rails_pages
│   ├── engine.rb
│   └── version.rb
├── rails_pages.rb
└── tasks
    └── rails_pages_tasks.rake
~~~
