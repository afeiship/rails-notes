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
