# belongs_to
```rb
# model/user.rb
class User < ActiveRecord::Base
    has_many :moments
end

# model/moment.rb
class Moment < ActiveRecord::Base
    belongs_to :user
end
```

## example
> 微信：一条朋友圈`属于`某个用户

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
| `user_id` | integer | forgin key  |

## User
| api      | type    | description   |
| -------- | ------- | ------------- |
| id       | integer | ID            |
| name     | string  | User name     |
| passowrd | string  | User password |


## 最终表结构应该是下面的 end ========