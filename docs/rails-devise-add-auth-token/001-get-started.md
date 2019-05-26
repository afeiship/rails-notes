# get-started

1. Add auth_token midgration
   ```shell
   rails g migration addAuthTokenToUser
   ```

   ```rb
   class AddAuthTokenToUser < ActiveRecord::Migration  
        def change  
            change_table :users do |t|  
                t.string :authentication_token  
            end  
            add_index  :users, :authentication_token, :unique => true  
        end
   end
   ```
2. 编辑models/user.rb,增加相应的devise功能 :token_authenticatable
    ```rb
    devise :database_authenticatable, :registerable,  
        :recoverable, :rememberable, :trackable, :validatable, :token_authenticatable  
    ```

3. 建立控制器与路由
> 我们需要建立一个名为Token的控制器作为登陆/获取授权代码的入口
> 则先配置相应的路由，在config/routes.rb文件中增加以下代码

```rb
#config/routes.rb    
namespace :api do  
    namespace :v1  do  
      resources :tokens,:only => [:create, :destroy]  
      resources :products  
    end  
 end  
```

4. 然后新建相应的tokens_controller.rb文件，首先先写一个登陆登陆的方法
```rb
#controllers/api/v1/tokens_controller.rb  
class Api::V1::TokensController  < ApplicationController  
  
    skip_before_filter :verify_authenticity_token  
    respond_to :json  
      
    def create        
      email = params[:email]  
      password = params[:password]  
         
       if email.nil? or password.nil?  
         render :status=>400,:json=>{:message=>"Password&Username cannot be blank"}  
       return  
       end  
  
       @user=User.find_by_email(email.downcase)  
          
      @user=User.find_by_email(email.downcase)  
   
      if @user.nil?  
         render :status=>401, :json=>{:message=>"Invalid email or passoword."}  
        return  
      end  
  
       if not @user.valid_password?(password)  
         render :status=>401, :json=>{:message=>"Invalid email or password."}  
       else  
         render :status=>200, :json=> {:token=>@user.authentication_token}  
       end  
    end  
  
end  
```

## resources
- https://akiraray.iteye.com/blog/1976634