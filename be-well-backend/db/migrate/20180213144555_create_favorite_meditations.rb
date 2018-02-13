class CreateFavoriteMeditations < ActiveRecord::Migration[5.1]
  def change
    create_table :favorite_meditations do |t|
      t.integer :user_id
      t.integer :meditation_id

      t.timestamps
    end
  end
end
