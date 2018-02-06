class Api::V1::GoalsController < ApplicationController
  def index
    @goals = Goal.all
    render json: @goals
  end

  def create
    goal = Goal.new(goal_params)
    if goal.save
      render json: goal, status: 201
    else
      render json: {message: "Please try again"}, status: 400
    end
  end

  def update
    @goal = Goal.find(params[:id])

    @goal.update(goal_params)
    if @goal.save
      render json: @goal
    else
      render json: {errors: @goal.errors.full_messages}, status: 422
    end
  end

  def completed_goal
    @goal = Goal.find(params[:id])

    @goal.completed = true
    @goal.date_completed = Date.today
    @goal.save

    render json: {message: "Success!", goalId: @goal.id}
  end

  private
  def goal_params
    params.permit(:title, :action1, :action2, :action3, :attainable, :relevance, :target_date, :user_id)
  end
end
