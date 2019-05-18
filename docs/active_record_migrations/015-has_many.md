# has_many
> 创建1对多关联。


## 举例
1. 一个用户可以发送多条朋友圈。
2. 麦子学院：一系列课程可以有很多节课。


## `Moment` 为例
> `has_many` 与 `belones_to` 的数据库设计是一模一样的。

| api       | type    | description  |
| --------- | ------- | ------------ |
| id        | integer | ID           |
| text      | string  | User name    |
| gender    | integer | Sex          |
| `user_id` | integer | forgin key   |