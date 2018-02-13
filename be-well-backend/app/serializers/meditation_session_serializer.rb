class MeditationSessionSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :streak
  belongs_to :meditation
end
