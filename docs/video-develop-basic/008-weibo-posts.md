# weibo app 

## posts
```shell
rails generate controller Posts index show create new
```
## add routes
```rb
# ...
root 'posts#index'
# ...
```

## routes:
```rb
# rake routes

resources :posts, only:[:index, :show]
```

## model
| field   | type    | description          |
| ------- | ------- | -------------------- |
| id      | integer | 标识唯一一条微博内容 |
| content | text    | 微博内容             |

## scaffold(这里的资源是单数)
```shell
rails generate scaffold Post content:text
rake db:migrate
```