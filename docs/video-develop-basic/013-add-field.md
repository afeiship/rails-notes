# add field
> 添加字段。

## has_secure_password
```rb
class User < ActiveRecord::Base
    # .... more settings ....
    has_secure_password
    validates :password, length: { minimum: 6 }
end
```

## add migration
```shell
rails generate migration AddPasswordDigestToUsers
```

```rb
# ....
add_column :users, :password_digest, :string
# ....
```


