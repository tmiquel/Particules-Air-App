# frozen_string_literal: true

class CreateDefinitions < ActiveRecord::Migration[6.0]
  def change
    create_table :definitions do |t|
      t.string :term

      t.timestamps
    end
  end
end
