# http method
> PUT/Delete/Patch.

Rails 框架鼓励应用使用 REST 架构的设计，这意味着除了 GET 和 POST 请求，应用还要处理许多 PATCH 和 DELETE 请求。`不过，大多数浏览器只支持表单的 GET 和 POST 方法，而不支持其他方法`。

为了解决这个问题，Rails 使用 name 属性的值为 `_method` 的隐藏的 input 标签和 POST 方法来模拟其他方法，从而实现相同的效果：

form_tag(search_path, method: "patch")
上面的代码会生成下面的 HTML：
```html
<form accept-charset="UTF-8" action="/search" method="post">
  <input name="_method" type="hidden" value="patch" />
  <input name="utf8" type="hidden" value="&#x2713;" />
  <input name="authenticity_token" type="hidden" value="f755bb0ed134b76c432144748a6d4b7a7ddf2b71" />
  ...
</form>
```
在处理提交的数据时，Rails 会考虑 _method 这个特殊参数的值，并按照指定的 HTTP 方法处理请求（在本例中为 PATCH）。