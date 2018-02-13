class Api::V1::FavoriteMeditationsController < ApplicationController
  def index
    @favorite_meditations = FavoriteMeditation.all
    render json: @favorite_meditations
  end

  def create
    favorite_meditation = FavoriteMeditation.new(favorite_meditation_params)
   
      render json: favorite_meditation, status: 201
    else
      render json: {message: "Please try again"}, status: 400
    end
  end

  def destroy
    favorite_meditation = FavoriteMeditation.find(params[:id])

    favorite_meditation.destroy
    
    render json: {message: 'successfully deleted', id: favorite_meditation.id}
  end

  private
  def favorite_meditation_params
    params.permit(:user_id, :meditation_id)
  end
end
