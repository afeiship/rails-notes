# record-recognition
~~~
在处理 REST 架构的资源时，使用记录识别技术可以大大简化 form_for 辅助方法的调用。简而言之，使用记录识别技术后，我们只需把模型实例传递给 form_for 方法作为参数，Rails 会找出模型名称和其他信息
~~~


## code
```rb
## 创建一篇新文章
# 冗长风格：
form_for(@article, url: articles_path)
# 简短风格，效果一样（用到了记录识别技术）：
form_for(@article)
 
## 编辑一篇现有文章
# 冗长风格：
form_for(@article, url: article_path(@article), html: {method: "patch"})
# 简短风格：
form_for(@article)
```

## namespace
如果在路由中使用了命名空间，我们同样可以使用 form_for 方法调用的短格式。例如，假设有 admin 命名空间，那么 form_for 方法调用的短格式可以写成：

`form_for [:admin, @article]`

上面的代码会创建提交到 admin 命名空间中 ArticlesController 控制器的表单（在更新文章时会提交到 admin_article_path(@article) 这个地址）。对于多层命名空间的情况，语法也类似：

`form_for [:admin, :management, @article]`
