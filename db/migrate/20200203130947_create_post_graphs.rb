# frozen_string_literal: true

class CreatePostGraphs < ActiveRecord::Migration[6.0]
  def change
    create_table :post_graphs do |t|
      t.references :post, null: false, foreign_key: true
      t.references :graph, null: false, foreign_key: true

      t.timestamps
    end
  end
end
