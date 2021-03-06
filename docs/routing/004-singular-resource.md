# Singular resources
> 单数资源。

有时我们希望不使用 ID 就能查找资源。例如，让 /profile 总是显示当前登录用户的个人信息。这种情况下，我们可以使用单数资源来把 /profile 而不是 /profile/:id 映射到 show 动作：

```rb
get 'profile', to: 'users#show'
```

如果 get 方法的 to 选项的值是字符串，那么这个字符串应该使用 controller#action 格式。如果  to 选项的值是表示动作的符号，那么还需要使用 controller 选项指定控制器：

```rb
get 'profile', to: :show, controller: 'users'
```

## 缺陷
> 有一个长期存在的缺陷使 form_for 辅助方法无法自动处理单数资源。有一个解决方案是直接指定表单 URL，例如：

```rb
form_for @geocoder, url: geocoder_path do |f|
# 为了行文简洁，省略以下内容
```