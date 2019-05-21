# has_one
```rb
# model/user.rb
class User < ActiveRecord::Base
    has_one :wallet
end

# model/wallet.rb
class Wallet < ActiveRecord::Base
    belongs_to :user
end
```

## example
> 一个用户`拥有`1个钱包

## rails command
```shell
./bin/rails g model User name:string password:string
./bin/rails g model Wallet money:string password:string user:refrences

rake db:migrate
```

## 最终表结构应该是下面的 start ========

## Wallet
| api      | type    | description     |
| -------- | ------- | --------------- |
| id       | integer | ID              |
| money    | string  | Money           |
| password | string  | Wallet password |
| user_id  | integer | User forign key |

## User
| api      | type    | description   |
| -------- | ------- | ------------- |
| id       | integer | ID            |
| name     | string  | User name     |
| passowrd | string  | User password |


## 最终表结构应该是下面的 end ========