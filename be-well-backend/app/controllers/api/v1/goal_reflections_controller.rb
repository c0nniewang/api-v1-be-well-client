class Api::V1::GoalReflectionsController < ApplicationController
  def index
    @goal_reflections = GoalReflection.all
    render json: @goal_reflections
  end

  def create
    goal_reflection = GoalReflection.new(goal_reflection_params)
    if goal_reflection.save
      render json: goal_reflection, status: 201
    else
      render json: {message: "Please try again"}, status: 400
    end
  end

  def update
    @goal_reflection = GoalReflection.find(params[:id])

    @goal_reflection.update(goal_reflection_params)
    if @goal_reflection.save
      render json: @goal_reflection
    else
      render json: {errors: @goal_reflection.errors.full_messages}, status: 422
    end
  end

  private
  def goal_reflection_params
    params.permit(:success, :emotions, :mood_num, :goal_id)
  end
end
