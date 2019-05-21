# has_and_belongs_to_many


## User/OfficialAcccount(A动词B:follow)
1. 一个用户可以关注多个公众号
2. 一个公众号也可以多个关注者

user_<follow>_official_accounts
 
| api                 | type    | description         |
| ------------------- | ------- | ------------------- |
| id                  | integer | ID                  |
| user_id             | integer | User ID             |
| official_account_id | integer | Official account ID |

## rails 操作 (A hatbm B)
```shell
# 创建A表，及 model
bin/rails g Model User name:string email:string
# 创建B表，及 model
bin/rails g Model OfficialAccount name:string

# 这个只要创建数据表，不需要 Model
bin/rails g Migration CreateUserFollowOfficialAccount user:refrences official_account:refrences
```

## CreateUserFollowOfficialAccount
```rb
class CreateUserFollowOfficialAccounts < ActiveRecord::Migration
    def change
        create_table :user_follows_accounts do |t|
            t.refrences :user, index: true, foreign_key: true
            t.refrences :official_account, index: true, foreign_key: true
        end
    end
end
```

## 在User/OfficialAccount Model添加代码
> join_table 不写则是这张表：official_accounts_users

```rb
# model/user.rb
class User < ActiveRecord::Base
    has_and_belongs_to_many :official_accounts, :join_table=>'user_follows_accounts'
end

# model/official_account.rb
class User < ActiveRecord::Base
    has_and_belongs_to_many :users, :join_table=>'user_follows_accounts'
end
```