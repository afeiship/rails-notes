# Rails for 1/2


## belongs_to
> 微信：一条朋友圈属于某个用户

```shell
bin/rails g Model Moment text:string user:references
```

## 这样会生成：
```rb
class Moment < ActiveRecord::Base
    belones_to :user
end
```

## 对应的 migration 文件会这样
```rb
class CreateMoments < ActiveRecord::Migration
    def change
        create_table :moments do |t|
            t.string :text
            t.references :user, index:true, foreign_key: true
            t.timestamps null: false
        end
    end
end
```

## 最终数据表如下：
![](https://ws1.sinaimg.cn/large/006tNc79gy1g35wm4864nj30zm0rk49p.jpg)