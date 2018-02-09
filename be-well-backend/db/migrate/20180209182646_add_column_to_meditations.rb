class AddColumnToMeditations < ActiveRecord::Migration[5.1]
  def change
    add_column :meditations, :audio_url, :string
  end
end
