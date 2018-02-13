class FavoriteMeditationSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :meditation
end