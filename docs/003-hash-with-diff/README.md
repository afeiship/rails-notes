# hash with idff
> HashWithIndifferentAccess

## example code
```rb
counters = ActiveSupport::HashWithIndifferentAccess.new
counters[:foo] = 1

counters['foo'] # => 1
counters[:foo]  # => 1
counters[:zoo]  # => nil
```

## resources
- https://api.rubyonrails.org/classes/ActiveSupport/HashWithIndifferentAccess.html
- https://www.cnblogs.com/fanxiaopeng/p/5231602.html
