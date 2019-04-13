# relation
> 数据关联。

## 关键分析
1. 一条 weibo 只对应一个用户
2. 一个用户可以发多条微博 
3. `多方(many: posts)有单方(one: user)的 id`

    <img width="500" src="https://ws1.sinaimg.cn/large/006tNc79gy1g21dwhyhmzj318s0u01ky.jpg"/>

## 添加 migration
```shell
rails generate migration add_user_id_to_posts user_id:id
rake db:migrate
```

## user has_many posts
```rb
class User < ActiveRecord::Base
    # .... more settings ....
    has_many :posts
end
```

## post belongs_to user
```rb
class Post < ActiveRecord::Base
    # .... more settings ....
    belongs_to :user
end
```

## posts_controller
```rb
class PostController < ApplicationController
    # ...
    def create
        @post = Post.new allow_params
        @post.user_id = session[:user_id]
        if @post.save
            # 
        else
            render :new
        end
    end
    # ...
end
```