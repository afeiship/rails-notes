require "execjs"
res = ExecJS.eval "'red yellow blue'.split(' ')"
p res
# => ["red", "yellow", "blue"]


# gem install execjs