class CreatePrompts < ActiveRecord::Migration[8.1]
  def change
    create_table :prompts do |t|
      t.string :text
      t.string :difficulty
      t.string :category
      t.string :description

      t.timestamps
    end
  end
end
