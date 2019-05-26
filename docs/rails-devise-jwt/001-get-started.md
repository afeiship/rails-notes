# get-started
> We will use devise-jwt gem which is a “is a devise extension that uses JWT tokens for user authentication.”. 

## step
1. Add to Gemfile `gem 'devise-jwt'`
2. Then we need to install devise as usual. 
3. Add code to `model/user.rb`
    ```rb
    class User < ApplicationRecord
        devise :database_authenticatable,
                :jwt_authenticatable,
                jwt_revocation_strategy: JWTBlacklist
    end
    ```
4. Now we need to setup JWT Revocation Strategies
    ```shell
    ./bin/rails g model JWTBlacklist
    ```

    ```rb
    class CreateJwtBlacklist < ActiveRecord::Migration[5.0]
        def change
            create_table :jwt_blacklist do |t|
            t.string :jti, null: false
            end
            add_index :jwt_blacklist, :jti
        end
    end
    ```