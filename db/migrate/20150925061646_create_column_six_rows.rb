class CreateColumnSixRows < ActiveRecord::Migration
  def change
    create_table :column_six_rows do |t|
      t.string :name, :default => ""
      t.boolean :taken, :default => false
      t.boolean :player_one, :default => false
    end
  end
end
