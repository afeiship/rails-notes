# rails whenever

## installation
```shell
gem install whenever

# or add to gemfile
gem 'whenever'
```

> schedule.rb
```rb
set :output, "log/cron_log.log"
env :PATH, ENV['PATH']
set :environment, :development
every 1.day, at: '10:00' do
  rake "send_daily_mail"
end
```

## usage
```shell
# 1. config/shedule.rb
wheneverize .

# 2. add rake taks
lib/tasks/daily_routine.rake
```
> daily_routine.rake
```rb
desc "A task used for sending daily mail"
task :send_daily_mail do
  DailyMailer.send_notification.deliver_later!
end
```


## resources
- https://medium.com/@pk60905/rails-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8whenever-gem-%E5%BB%BA%E7%AB%8B%E5%9B%BA%E5%AE%9A%E6%8E%92%E7%A8%8B-aef211150561
- https://stackoverflow.com/questions/11514968/rails-using-whenever-gem-in-development

