class Api::V1::CognitiveDistortionsController < ApplicationController
  def index
    @cognitive_distortions = CognitiveDistortion.all
    render json: @cognitive_distortions
  end
end
