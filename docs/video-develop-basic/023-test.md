# test
> 测试。

## add `about` test case
```rb
class StaticPagesTest < ApplicationController::TestCase
    # 页面的可访问性：
    test "should about page" do
        get :about
        asset_response :success
    end
end
```

## controller
```shell
rails g controller StaticPages
```