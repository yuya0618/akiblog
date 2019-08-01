class TweetsController < ApplicationController
  before_action :move_to_index, except: :index

  def index
    @tweets = Tweet.page(params[:page]).per(5).order("created_at DESC")
  end

  def new
  end

  def create
    Tweet.create(tweet: tweet_params[:tweet], user_id: current_user.id)
    redirect_to root_path
  end

  def update
  end

  def edit
  end

  private
  def tweet_params
    params.permit(:tweet)
  end

  def move_to_index
    redirect_to action: :index unless user_signed_in?
  end

end
