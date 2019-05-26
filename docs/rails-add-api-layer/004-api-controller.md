# api-controller
> Now we are ready to code. Create an api_controller.rb file in `app/controllers/api/v1`.

~~~
Why v1?
It's always a very good idea to versioning your API, because in the future you can increment features without breaking anything for old customers.
~~~

1. app/controllers/api/v1/api_controller.rb

```rb
# app/controllers/api/v1/api_controller.rb
module Api::V1
  class ApiController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, :with => :request_not_found

    before_filter :authenticate_user_from_token!
    before_filter :authenticate_user!

    def invalid_request
      @response = Hash.new

      @response[:message] = "Invalid request"
      @response[:code] = 400
      @response[:help] = "Invalid request. Please check the docs. ERR: 001"

      return render json: @response, status: 400
    end

    def request_not_found
      @response = Hash.new

      @response[:message] = "Invalid request"
      @response[:code] = 404
      @response[:help] = "Invalid request. Please check the docs. ERR: 002"

      return render json: @response, status: 404
    end

    private

    def authenticate_user_from_token!
      user_email = params[:user_email].presence
      user = user_email && User.find_by_email(user_email)

      if user && Devise.secure_compare(user.authentication_token, params[:user_token])
        sign_in user, store: false
      end
    end
  end
end
```

2. 路由： routes

```rb
Rails.application.routes.draw do
  # ... some old code here

  constraints subdomain: 'api' do
    namespace :api, defaults: {format: 'json'} do
      namespace :v1 do
        resources :posts
      end
    end
  end
end
```

3. Fetching data

```rb
# app/controllers/api/v1/posts_controller.rb
module Api::V1
  class PostsController < ApiController
    before_action :set_post, only: [:show]

    respond_to :json

    def show
    end

    private

    def set_post
      @post = Post.find(params[:id])
    end
  end
end
```

4. Rabl 
> 这个好像做的事情是 jbuilder 做的，暂时不看了。
