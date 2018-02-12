class MeditationSessionSerializer < ActiveModel::Serializer
  attributes :id, :created_at
  belongs_to :meditation
end
