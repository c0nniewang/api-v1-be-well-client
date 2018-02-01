class CognitiveDistortion < ApplicationRecord
  has_many :entry_distortion_joins
  has_many :thought_entries, through: :entry_distortion_joins
end
