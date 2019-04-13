# rails routes

## except
```rb
resources :posts, :except => :show
resoruces :posts, :except[:show]
```

## anthoer show
```rb
get 'posts/:id', :to=>'posts#show'
```