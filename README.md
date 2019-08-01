# usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|email|string|null: false, unique: true|
|password|string|null: false|
## Association
- has_many :tweets
- has_many :comments

# tweetsテーブル
|Column|Type|Options|
|------|----|-------|
|tweet|text|null: false|
|user_id|integer|null: false, foreign_key: true|
##Association
- has_many   :comments
- belongs_to :user

# commentsテーブル
|Column|Type|Options|
|------|----|-------|
|comment|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|tweet_id|integer|null: false, foreign_key: true|
##Association
- belongs_to :user
- belongs_to :tweet