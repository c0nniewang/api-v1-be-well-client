class Api::V1::MeditationsController < ApplicationController
  def index
    @meditation_sessions = MeditationSession.all
    render json: @meditation_sessions
  end

  def create
    meditation_session = MeditationSession.new(meditation_session_params["meditation_session"])
    if meditation_session.save
        render json: meditation_session, status: 201
    else
      render json: {message: "Please try again"}, status: 400
    end
  end

  def update
    @meditation_session = MeditationSession.find(params[:id])

    @meditation_session.update(meditation_session_params)
    if @meditation_session.save
      render json: @meditation_session
    else
      render json: {errors: @meditation_session.errors.full_messages}, status: 422
    end
  end

  private
  def meditation_session_params
    params.permit(:user_id, :meditation_id)
  end
end