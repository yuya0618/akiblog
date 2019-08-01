class Tweet < ApplicationRecord
  validates:tweet, presence: true, length:{minimum:2}
end