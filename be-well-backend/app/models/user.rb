class User < ApplicationRecord
  has_secure_password
  has_many :goals
  has_many :thought_entries
  has_many :daily_updates
end
