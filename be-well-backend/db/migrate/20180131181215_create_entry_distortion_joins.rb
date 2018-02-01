class CreateEntryDistortionJoins < ActiveRecord::Migration[5.1]
  def change
    create_table :entry_distortion_joins do |t|
      t.integer :thought_entry_id
      t.integer :cognitive_distortion_id

      t.timestamps
    end
  end
end
