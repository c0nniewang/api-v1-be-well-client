class GoalReflection < ApplicationRecord
  belongs_to :goal
  validates :title, presence: true
  validates :target_date, presence: true
end
