class Api::V1::MeditationSessionsController < ApplicationController
  def index
    @meditation_sessions = MeditationSession.all
    render json: @meditation_sessions
  end

  def create
    #fix for individual user
    if MeditationSession.all.length == 0
      streak = 0
    else
      last = MeditationSession.last.created_at.to_date
      yest = Time.now.to_date - 1.day
      today = Time.now.to_date
      streak = MeditationSession.last.streak.to_i

      if yest <= last && last.to_date != today
        streak += 1
      elsif
        streak = MeditationSession.last.streak
      end
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