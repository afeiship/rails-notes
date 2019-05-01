# form_for
> 如果 Person 模型有很多属性需要修改，那么实例变量对象的名称就需要重复写很多遍。更好的解决方案是把表单绑定到模型对象上，为此我们可以使用 form_for 辅助方法

1. 假设有一个用于处理文章的控制器 app/controllers/articles_controller.rb：
    ```rb
    def new
    @article = Article.new
    end
    在对应的 app/views/articles/new.html.erb 视图中，可以像下面这样使用 form_for 辅助方法：
    ```

    ```rb
    <%= form_for @article, url: {action: "create"}, html: {class: "nifty_form"} do |f| %>
    <%= f.text_field :title %>
    <%= f.text_area :body, size: "60x12" %>
    <%= f.submit "Create" %>
    <% end %>
```
2. 这里有几点需要注意：

实际需要修改的对象是 @article。
form_for 辅助方法的选项是一个散列，其中 :url 键对应的值是路由选项，:html 键对应的值是 HTML 选项，这两个选项本身也是散列。还可以提供 :namespace 选项来确保表单元素具有唯一的 ID 属性，自动生成的 ID 会以 :namespace 选项的值和下划线作为前缀。
form_for 辅助方法会产出一个表单生成器对象，即变量 f。
用于生成表单控件的辅助方法都在表单生成器对象 f 上调用。
上面的代码会生成下面的 HTML：

```html
<form accept-charset="UTF-8" action="/articles" method="post" class="nifty_form">
  <input id="article_title" name="article[title]" type="text" />
  <textarea id="article_body" name="article[body]" cols="60" rows="12"></textarea>
  <input name="commit" type="submit" value="Create" />
</form>
```
form_for 辅助方法的第一个参数决定了 params 使用哪个键来访问表单数据。在上面的例子中，这个参数为 @article，因此所有 input 控件的 name 属性都是 article[attribute_name] 这种形式，而在 create 动作中 params[:article] 是一个拥有 :title 和 :body 键的散列。关于 input 控件 name 属性重要性的更多介绍，请参阅 理解参数命名约定。