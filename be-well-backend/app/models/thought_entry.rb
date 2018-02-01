class ThoughtEntry < ApplicationRecord
  belongs_to :user
  has_many :entry_distortion_joins
  has_many :cognitive_distortions, through: :entry_distortion_joins
end
