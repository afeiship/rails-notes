# 生成路径和 URL 地址的辅助方法

在创建资源路由时，会同时创建多个可以在控制器中使用的辅助方法。例如，在创建 resources :photos 路由时，会同时创建下面的辅助方法：

- photos_path 辅助方法，返回值为 /photos
- new_photo_path 辅助方法，返回值为 /photos/new
- edit_photo_path(:id) 辅助方法，返回值为 /photos/:id/edit（例如，edit_photo_path(10) 的返回值为 /photos/10/edit）
- photo_path(:id) 辅助方法，返回值为 /photos/:id（例如，photo_path(10) 的返回值为 /photos/10）

这些辅助方法都有对应的 _url 形式（例如 photos_url）。前者的返回值是路径，后者的返回值是路径加上由当前的主机名、端口和路径前缀组成的前缀。