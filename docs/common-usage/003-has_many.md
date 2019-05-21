# has_many
```rb
# model/user.rb
class User < ActiveRecord::Base
    has_many :users
end

# model/moment.rb
class Moment < ActiveRecord::Base
    belongs_to :user
end
```

## example
> `一个`用户可以发送`多条`朋友圈


## rails command
```shell
./bin/rails g model User name:string password:string
./bin/rails g model Moment text:string user:refrences

rake db:migrate
```

## 最终表结构应该是下面的 start ========

## Moment
| api       | type    | description |
| --------- | ------- | ----------- |
| id        | integer | ID          |
| text      | string  | User name   |
| `user_id` | integer | Forgin key  |

## User
| api      | type    | description   |
| -------- | ------- | ------------- |
| id       | integer | ID            |
| name     | string  | User name     |
| passowrd | string  | User password |


## 最终表结构应该是下面的 end ========