class MeditationSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :length, :audio_url
end
