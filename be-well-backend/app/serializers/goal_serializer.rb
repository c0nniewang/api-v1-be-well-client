class GoalSerializer < ActiveModel::Serializer
  attributes :id, :title, :action1, :action2, :action3, :attainable, :relevance, :target_date, :created_at, :completed, :date_completed
end
