# resources routes
> 资源路由，是比较常用的方式。


## 资源路由的扩展 member/collection

1. 集合路由 collection 
    ```rb
    # 集合路由
    reources :posts do 
        get 'recent', on=>:collection
    end

    # 多条集合路由
    reources :posts do 
        collection do
            get 'recent'
            get 'follow'
        end
    end
    ```
2. 成员路由：
    ```rb
    # posts/:id/recent
    # 如果需要 id 的时候，就需要用这个啦
    ```