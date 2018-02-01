class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone_number, :email
  has_many :goals
  has_many :thought_entries
  has_many :daily_updates
end
