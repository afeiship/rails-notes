# has_one
> 一个拥有1个什么。

## 举例
1. 一个用户拥有1个钱包 (现实中，好像只有这个成立)
2. 一个用户可以拥有一个专栏
3. 一只球队拥有一个教练

## Wallet

| api      | type    | description  |
| -------- | ------- | ------------ |
| id       | integer | ID           |
| money    | string  | User name    |
| password | string  | Phone number |
| user_id  | integer | Sex          |

## rails 生成命令
```shell
./bin/rails g model Wallet money:string password:string user:refrences
```

## 与 has_one
1. 语义上有区别：属于/拥有
2. 数据表设计不同：
   1. 如果 A属于B，就需要在A中建议B的外键
   2. 如果 B拥有A，就需要在A中建立B的外键(?)