# failed

- https://www.reddit.com/r/ruby/comments/b0wtav/why_does_bundle_install_always_fail_to_install/


## sassc failed
~~~

An error occurred while installing sassc (2.4.0), and Bundler cannot continue.
Make sure that `gem install sassc -v '2.4.0' --source 'https://rubygems.org/'` succeeds before bundling.

~~~

> solution
```shell
gem install sassc -v '2.4.0' --source 'https://rubygems.org/'
```

## nokogiri failed
~~~
An error occurred while installing nokogiri (1.10.10), and Bundler cannot continue.
Make sure that `gem install nokogiri -v '1.10.10' --source 'https://rubygems.org/'` succeeds before bundling.
~~~

> soluton
```shell
sudo apt-get install libxslt-dev libxml2-dev
```