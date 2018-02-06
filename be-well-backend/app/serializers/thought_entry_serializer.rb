class ThoughtEntrySerializer < ActiveModel::Serializer
  attributes :id, :current_mood, :emotions, :situation, :negative_thoughts, :created_at, :title, :outcome
  has_many :cognitive_distortions
end
