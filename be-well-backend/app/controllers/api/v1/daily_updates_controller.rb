class Api::V1::DailyUpdatesController < ApplicationController
  def index
    @daily_update = DailyUpdate.all
    render json: @daily_update
  end

  def create
    daily_update = DailyUpdate.new(daily_update_params)
    if daily_update.save
      render json: daily_update, status: 201
    else
      render json: {message: "Please try again"}, status: 400
    end
  end

  def update
    @daily_update = DailyUpdate.find(params[:id])

    @daily_update.update(daily_update_params)
    if @daily_update.save
      render json: @daily_update
    else
      render json: {errors: @daily_update.errors.full_messages}, status: 422
    end
  end

  private
  def daily_update_params
    params.permit(:energy_level, :mood_desc, :mood_num, :day_desc, :grateful1, :grateful2, :grateful3, :sleep, :user_id)
  end
end
