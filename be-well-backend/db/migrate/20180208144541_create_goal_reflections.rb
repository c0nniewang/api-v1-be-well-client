class CreateGoalReflections < ActiveRecord::Migration[5.1]
  def change
    create_table :goal_reflections do |t|
      t.integer :goal_id
      t.string :success
      t.string :emotions
      t.integer :mood_num
      t.timestamps
    end
  end
end
