# new users
> 添加用户功能 - 注册页面。

## controller
```shell
rails g controller Users new
```
## controller code
```rb
class UsersController < ApplicationController
    def new
        @user = User.new
    end
    
    # 注册逻辑
    def create
        # Rails 4+ 健壮参数的特性
        @user = User.new(allow_params)
        if @user.save
            redirect_to @user
        else
            render :new
        end
    end

    private
    def allow_params
        params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end
```


## routes
```rb
```
