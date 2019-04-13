# session
> 这里是用来做登录、退出登录用的。

## controller
```shell
rails generate controller Sessions new create destroy
```

## routes
```rb
get 'login' => 'session#new'
post 'login' => 'session#create'
delete 'logout' => 'session#destroy'
```

## code
```rb
class SessionsController < ApplicationController
    def new
    end
    
    def create
        @user = User.find_by(params[:session][:email].downcase)
        if @user && @user.authenticate(params[:session][:password])
            # 关键：登录就靠这个啦
            session[:user_id] = @user.id
            redirect_to @user
        else
            render :new
        end
    end

    def destroy
        session.delete :user_id
    end
end
```

## logout
```rb
<%= link_to 'logout', logout_path, method:'delete' %>
```