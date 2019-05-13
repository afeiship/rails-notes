# merging-db-migration-files




## description
~~~
Well, i can imagine that you want to have a clean start. While being in project development mode for your first version release you don't want all the separate migration files. Although they can't hurt obviously.

Basically what you can do, is this.

FIRST BACKUP your schema and data.

The db/schema.rb contains (or should contain) the latest version of your schema. Otherwise run:
~~~

```rb
rake db:schema:dump
```

Now you can clean your migration folder.

Then run:
```rb
rake db:drop
rake db:schema:load
```

The last command runs the db/schema.rb and create a new schema. This should bring you to the last version of your database.
show db task

```rb
rake -T db
```

## resources
- https://stackoverflow.com/questions/8086638/merging-db-migration-files