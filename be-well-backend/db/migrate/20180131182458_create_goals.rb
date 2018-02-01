class CreateGoals < ActiveRecord::Migration[5.1]
  def change
    create_table :goals do |t|
      t.string :title
      t.string :action1
      t.string :action2
      t.string :action3
      t.string :attainable
      t.string :relevance
      t.date :target_date
      t.integer :user_id

      t.timestamps
    end
  end
end
