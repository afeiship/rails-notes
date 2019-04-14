# helper
> 视图层中使用的 helper

## application_helper 
> 添加 ： include SessionsHellper


## some customize helpers
```rb
module SesssionsHelper
    # 登录存 session
    def login(user)
        session[:user_id] = user.id
    end

    # 返回当前用户
    def current_user
        uid = session[:user_id]

        # find: 如果找不到，会返回 exception
        # find_by: 如果找不到，会返回 nil
        @current_user = @current_user || User.find_by(uid)
    end

    # 判断用户是否已经登录
    def login?
        @current_user.nil?
    end

    # 注销登录
    def logout
        session.delete(:user_id)
        @current_user = nil
    end
end
```