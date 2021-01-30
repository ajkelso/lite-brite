class AddTitleToDrawings < ActiveRecord::Migration[6.0]
  def change
    add_column :drawings, :title, :string
  end
end
