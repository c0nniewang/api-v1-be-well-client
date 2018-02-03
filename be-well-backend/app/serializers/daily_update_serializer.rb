class DailyUpdateSerializer < ActiveModel::Serializer
  attributes :id, :energy_level, :mood_desc, :mood_num, :grateful1, :grateful2, :grateful3, :sleep, :created_at
  # def date_created
  #   object.created_at
  # end
end
