# rails frontend
> Rails 前端开发的知识。

## view
> Rails 对应的就是 ActiveView 来解析 view.

## erb
> Embedded Ruby. <%= 直接输出 %> / <% 仅执行 %>

## current time
> 默认情况下 rails 会把 controller 中所有的呈现出来的变量提供给 view 使用

```html
<h2>Current time <%= Time.now.to_s %></h2>

<!-- 输出 post 上的 content 内容 -->
<%= @post.content %>
```

## 用其它变量
```html
<% if @post.user.id == session[:user_id] %>
<span>我自己</span>
<% else %>
<span> <%= @post.user.username %> </span>
<% end %>
```