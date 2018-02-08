class CreateMeditations < ActiveRecord::Migration[5.1]
  def change
    create_table :meditations do |t|
      t.string :name
      t.string :description
      t.string :length
      t.timestamps
    end
  end
end
