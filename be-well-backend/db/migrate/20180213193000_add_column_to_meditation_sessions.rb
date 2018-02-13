class AddColumnToMeditationSessions < ActiveRecord::Migration[5.1]
  def change
    add_column :meditation_sessions, :streak, :integer
  end
end
