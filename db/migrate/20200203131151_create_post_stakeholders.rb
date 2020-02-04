# frozen_string_literal: true

class CreatePostStakeholders < ActiveRecord::Migration[6.0]
  def change
    create_table :post_stakeholders do |t|
      t.references :post, null: false, foreign_key: true
      t.references :stakeholder, null: false, foreign_key: true

      t.timestamps
    end
  end
end
