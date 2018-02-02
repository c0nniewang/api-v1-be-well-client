class Api::V1::ThoughtEntriesController < ApplicationController
  def index
    @thought_entries = ThoughtEntry.all
    render json: @thought_entries
  end

  def create
    thought_entry = ThoughtEntry.new(thought_entry_params)
    if thought_entry.save
      render json: thought_entry, status: 201
    else
      render json: {message: "Please try again"}, status: 400
    end
  end

  def update
    @thought_entry = ThoughtEntry.find(params[:id])

    @thought_entry.update(thought_entry_params)
    if @thought_entry.save
      render json: @thought_entry
    else
      render json: {errors: @thought_entry.errors.full_messages}, status: 422
    end
  end

  private
  def thought_entry_params
    params.permit(:name, :phone, :email, :password)
  end
end