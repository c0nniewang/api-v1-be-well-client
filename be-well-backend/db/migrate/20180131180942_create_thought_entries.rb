class CreateThoughtEntries < ActiveRecord::Migration[5.1]
  def change
    create_table :thought_entries do |t|
      t.string :title
      t.integer :current_mood
      t.string :emotions
      t.string :situation
      t.string :negative_thoughts
      t.string :outcome
      t.integer :user_id

      t.timestamps
    end
  end
end
