# format-response

```rb
def format_response
  json = local_assigns[:json]
  json.status "ok"
  json.error nil
  json.data &block
end
```


## resources
- https://github.com/rails/jbuilder/issues/250
- https://rubyinrails.com/2018/11/10/rails-building-json-api-resopnses-with-jbuilder/
- https://stackoverflow.com/questions/28618233/format-jbuilder-with-code-message-and-data
- http://cn.voidcc.com/question/p-adswymxu-ga.html
- https://ihower.tw/rails/web-api-cn.html