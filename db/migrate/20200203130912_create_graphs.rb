# frozen_string_literal: true

class CreateGraphs < ActiveRecord::Migration[6.0]
  def change
    create_table :graphs do |t|
      t.string :slug

      t.timestamps
    end
  end
end
