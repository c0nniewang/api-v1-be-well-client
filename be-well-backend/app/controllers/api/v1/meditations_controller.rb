class Api::V1::MeditationsController < ApplicationController
  def index
    @meditations = Meditation.all
    render json: @meditations
  end
end
