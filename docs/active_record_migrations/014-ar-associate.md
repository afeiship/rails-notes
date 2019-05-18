# AR 关联


## User

| api          | type    | description  |
| ------------ | ------- | ------------ |
| id           | integer | ID           |
| name         | string  | User name    |
| phone_number | string  | Phone number |
| gender       | integer | Sex          |

## Moment

| api     | type    | description  |
| ------- | ------- | ------------ |
| id      | integer | ID           |
| text    | string  | User name    |
| picture | string  | Phone number |
| gender  | integer | Sex          |


## 如果没有 AR的关联
~~~
## 查询用户发的朋友圈
Moment.find_by(:user_id: user.id)
~~~

## 理想情况：
```rb
user.moments
```

## 关联
> 让常规操作变得更简单。

## 几种关联
1. belongs_to : 从属关系
2. has_one: 1对1关系
3. has_many: 1对多关系
4. has_and_belongs_to_many: HABTM 多对多关联



