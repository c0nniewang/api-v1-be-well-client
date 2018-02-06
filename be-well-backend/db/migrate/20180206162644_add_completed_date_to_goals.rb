class AddCompletedDateToGoals < ActiveRecord::Migration[5.1]
  def change
    add_column :goals, :date_completed, :date
  end
end
