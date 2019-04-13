# rails routes
> Cool cool rails routes.

## except
```rb
resources :posts, :except => :show
resoruces :posts, :except[:show]
```

## anthoer show
```rb
get 'posts/:id', :to=>'posts#show'
```

## link_to
```rb
# link_to 为 application 的一个 helper
<%= link_to 'id为1的post', { controller:'posts', action:'show', id:'1' }  %>
```

## naming routes(具名路由)
```rb
get 'posts/:id', :to=>'posts#show', :as=>'show_post'
```

## optmize link_to
```rb
<%= link_to 'id为1的post', show_post_path(post[:id]) %>
```