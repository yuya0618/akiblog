
RailsとjQueryを使って初めて自分で0から作った簡単なチャットアプリです。


![660092d44768d964e819a0cdb0aedad0](https://user-images.githubusercontent.com/52994356/66020859-8b962600-e523-11e9-857b-23edc734c864.gif)


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
