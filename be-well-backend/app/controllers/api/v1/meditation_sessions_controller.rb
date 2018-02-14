class Api::V1::MeditationSessionsController < ApplicationController
  def index
    @meditation_sessions = MeditationSession.all
    render json: @meditation_sessions
  end

  def create
    if MeditationSession.last.streak != nil
      last = MeditationSession.last.created_at
      yest = Time.now - 1.day
      streak = MeditationSession.last.streak.to_i

      if yest < last
        streak += 1
      elsif
        streak = MeditationSession.last.streak
      end
    else
      streak = 0
    end

    meditation_session = MeditationSession.new({user_id: meditation_session_params[:user_id], meditation_id: meditation_session_params[:meditation_id], streak: streak})

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