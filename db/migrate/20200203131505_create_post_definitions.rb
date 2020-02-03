# frozen_string_literal: true

class CreatePostDefinitions < ActiveRecord::Migration[6.0]
  def change
    create_table :post_definitions do |t|
      t.references :post, null: false, foreign_key: true
      t.references :definition, null: false, foreign_key: true

      t.timestamps
    end
  end
end
