class User < ApplicationRecord
  has_secure_password
  has_many :goals
  has_many :thought_entries
  has_many :daily_updates
  has_many :meditation_sessions
  has_many :favorite_meditations

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  # validates :phone, length: {is: 10}
end
