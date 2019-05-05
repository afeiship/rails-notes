# resources
> 资源路由：Rails 的默认风格

## 资源路由：
资源路由（resource routing）允许我们为资源式控制器快速声明所有常见路由。
只需一行代码即可完成资源路由的声明，无需为 index、show、new、edit、create、update 和 destroy 动作分别声明路由。

## 动词
- index
- show
- new
- edit
- create
- update
- destroy

## resources routing
```rb
resources :photos
```

| HTTP 方法  | 路径             | 控制器#动作   | 用途                         |
| ---------- | ---------------- | ------------- | ---------------------------- |
| GET        | /photos          | photos#index  | 显示所有照片的列表           |
| GET        | /photos/new      | photos#new    | 返回用于新建照片的 HTML 表单 |
| POST       | /photos          | photos#create | 新建照片                     |
| GET        | /photos/:id      | photos#show   | 显示指定照片                 |
| GET        | /photos/:id/edit | photos#edit   | 返回用于修改照片的 HTML 表单 |
| PATCH/POST | /photos/:id      | photos#update | 更新指定照片                 |
| DELETE | /photos/:id      | photos#destroy | 删除指定照片                 |
