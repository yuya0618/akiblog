class TweetsController < ApplicationController
  before_action :move_to_index, except: :index

  def index
    @tweets = Tweet.page(params[:page]).per(5).order("created_at DESC")
  end

  def new
  end

  def create
    @tweet = Tweet.create(tweet: tweet_params[:tweet], user_id: current_user.id)
    respond_to do |f|
      f.html{ redirect_to root_path }
      f.json
    end
  end

  def edit
    @tweet = Tweet.find(params[:id])
  end

  def update
    tweet = Tweet.find(params[:id])
    tweet.update(tweet_params) if tweet.user_id == current_user.id
    redirect_to root_path
  end

  def destroy
    tweet = Tweet.find(params[:id])
    tweet.destroy if tweet.user_id == current_user.id
    redirect_to root_path
  end

  private
  def tweet_params
    params.permit(:tweet)
  end

  def move_to_index
    redirect_to action: :index unless user_signed_in?
  end

end
