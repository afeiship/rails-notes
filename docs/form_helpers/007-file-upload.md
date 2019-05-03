# file-upload
~~~
上传某种类型的文件是常见任务，例如上传某人的照片或包含待处理数据的 CSV 文件。在上传文件时特别需要注意的是，表单的编码必须设置为 multipart/form-data。使用 form_for 辅助方法时会自动完成这一设置。如果使用 form_tag 辅助方法，就必须手动完成这一设置，具体操作可以参考下面的例子。
~~~

```rb
<%= form_tag({action: :upload}, multipart: true) do %>
  <%= file_field_tag 'picture' %>
<% end %>
 
<%= form_for @person do |f| %>
  <%= f.file_field :picture %>
<% end %>
```

## controller
```rb
def upload
  uploaded_io = params[:person][:picture]
  File.open(Rails.root.join('public', 'uploads', uploaded_io.original_filename), 'wb') do |file|
    file.write(uploaded_io.read)
  end
end
```

## description
~~~
一旦文件上传完毕，就可以执行很多后续操作，例如把文件储存到磁盘、Amazon S3 等位置并和模型关联起来，缩放图片并生成缩略图等。这些复杂的操作已经超出本文的范畴，不过有一些 Ruby 库可以帮助我们完成这些操作，其中两个众所周知的是 CarrierWave 和 Paperclip。
~~~