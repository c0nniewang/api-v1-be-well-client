class DailyUpdateSerializer < ActiveModel::Serializer
  attributes :id, :energy_level, :description, :grateful1, :grateful2, :grateful3, :sleep, :created_at
end
