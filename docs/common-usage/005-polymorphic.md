# polymorphic
```rb
class Comment < ActiveRecord::Base
  belongs_to :commentable, polymorphic: true
end

class Post < ActiveRecord::Base
  has_many :comments, as: :commentable
end

class Image < ActiveRecord::Base
  has_many :comments, as: :commentable
end
```


## rails command
```shell
./bin/rails g model Comment content:text
```

## add polymorphic

```shell
./bin/rails g migration AddCommentableToPosts commentable:references{polymorphic}
./bin/rails g migration AddCommentableToPictures commentable:references{polymorphic}
```

```rb
class AddCommentableToPosts < ActiveRecord::Migration
  def up
    change_table :posts do |t|
      t.references :commentable, polymorphic: true
    end
  end

  def down
    change_table :posts do |t|
      t.remove_references :commentable, polymorphic: true
    end
  end
end
```

## resources
- https://til.hashrocket.com/posts/kaawvv04xh-generate-a-migration-with-polymorphic-association