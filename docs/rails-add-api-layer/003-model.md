# model
> Add authentication_token filed.

1. Create the following migration and run rake db:migrate
   ```rb
   class AddAuthenticationTokenToUsers < ActiveRecord::Migration
        def change
            add_column :users, :authentication_token, :string
        end
   end
   ```
2. 更新 `user.rb`
   ```rb
   class User < ActiveRecord::Base
        devise :database_authenticatable, :registerable,
                :recoverable, :rememberable, :trackable, :validatable

        before_save :ensure_authentication_token

        def ensure_authentication_token
            if authentication_token.blank?
                self.authentication_token = generate_authentication_token
            end
        end

        private

        def generate_authentication_token
            loop do
                token = Devise.friendly_token
                break token unless User.where(authentication_token: token).first
            end
        end
    end
   ```
3. 更新现有用户的 `token`
   ~~~
   You probably already have some users in your DB, so just run: `User.find_each(&:save)` to update the records
   ~~~