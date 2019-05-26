# get-started
1. Add to Gemfile && bundle intsall
   ```rb
   gem 'devise_token_auth'
   ```
   ```shell
   bundle install
   ```
2. Creating User Model and Migration
    ```shell
    ./bin/rails g devise_token_auth:install User auth
    ```
3. model/user.rb
   ```rb
    class User < ActiveRecord::Base
        # Include default devise modules.
        devise :database_authenticatable, :registerable,
                :recoverable, :rememberable, :trackable, :validatable,
                :confirmable
        include DeviseTokenAuth::Concerns::User
    end
   ```
4. db:migrate
   ```shell
   rake db:migrate
   ```

## resources
- https://www.jianshu.com/p/8068d539a539