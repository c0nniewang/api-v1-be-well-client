class Goal < ApplicationRecord
  belongs_to :user
  has_many :goal_reflections, :dependent => :destroy
end
