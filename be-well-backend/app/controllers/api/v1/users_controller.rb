class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def create
    user = User.new(user_params)
    if user.save

      token = JWT.encode({user_id: user.id}, ENV['secret_key'], 'HS256')

      render json: {user: user, jwt: token}, status: 201
    else
      render json: {message: "Please try again"}, status: 400
    end
  end

  def show
    user = User.find(params[:id])
    render json: user, status: 200
  end

  def update
    @user = User.find(params[:id])

    @user.update(user_params)
    if @user.save
      render json: @user
    else
      render json: {errors: @user.errors.full_messages}, status: 422
    end
  end

  def add_favorite_med
    favorite = FavoriteMeditation.create(user_id: params[:user_id], meditation_id: params[:meditation_id])
    if favorite.save
      render json: favorite, status: 200
    else
      render json: {errors: favorite.errors.full_messages}, status: 422
    end
  end

  def delete_favorite_med
    favorite = FavoriteMeditation.where(user_id: params[:user_id], meditation_id: params[:meditation_id])[0]
    FavoriteMeditation.destroy(favorite.id)
    render json: {message: "successfully destroyed", id: favorite.id}
  end

  private
  def user_params
    params.permit(:name, :phone, :email, :password)
  end
end
