# assets-pipline
> 未来的替代产品应该是 webpacker 吧。

## structure
+ assets
  - images
  - stylesheets
  - styles

## applicaion.js
```js
// 仅加载 common 目录下的文件
= require_tree ./common
// 只加载当前目录下的文件，而不加载 当前目录下的其它目录的文件
= require_dictionary .

// MORE....
= require_self
```
