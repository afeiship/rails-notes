# form_tag
> 无参数调用 form_tag 方法会创建 <form> 标签，在提交表单时会向当前页面发起 POST 请求.

## input
```rb
<%= form_tag do %>
  Form contents
<% end %>
```

## output
```html
<form accept-charset="UTF-8" action="/" method="post">
  <input name="utf8" type="hidden" value="&#x2713;" />
  <input name="authenticity_token" type="hidden" value="J7CBxfHalt49OSHp27hblqK20c9PgwJ108nDHX/8Cts=" />
  Form contents
</form>
```

## description
~~~
上面的 HTML 的第三行也是一个 input 元素，元素的 name 属性的值是 authenticity_token。这个 input 元素是 Rails 的一个名为跨站请求伪造保护的安全特性。在启用跨站请求伪造保护的情况下，表单辅助方法会为所有非 GET 表单生成这个 input 元素。关于跨站请求伪造保护的更多介绍，请参阅 跨站请求伪造（CSRF）。
~~~