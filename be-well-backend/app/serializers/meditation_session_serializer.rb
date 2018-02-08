class MeditationSessionSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :meditation
end
