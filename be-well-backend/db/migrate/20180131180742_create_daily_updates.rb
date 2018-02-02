class CreateDailyUpdates < ActiveRecord::Migration[5.1]
  def change
    create_table :daily_updates do |t|
      t.integer :energy_level
      t.string :mood_desc
      t.integer :mood_num
      t.string :day_desc
      t.string :grateful1
      t.string :grateful2
      t.string :grateful3
      t.integer :sleep
      t.integer :user_id

      t.timestamps
    end
  end
end
