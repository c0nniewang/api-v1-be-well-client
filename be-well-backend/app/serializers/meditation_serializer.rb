class MeditationSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :length
end
