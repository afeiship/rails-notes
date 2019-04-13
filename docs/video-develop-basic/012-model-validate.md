# model validate
> 数据验证。

## presence
```rb
class User < ActiveRecord::Base
    validates :username, presence: true, length: { maximum: 20 }
    validates :email, presence: true
    # .... more settings ....
end
```