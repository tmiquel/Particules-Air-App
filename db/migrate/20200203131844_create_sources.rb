# frozen_string_literal: true

class CreateSources < ActiveRecord::Migration[6.0]
  def change
    create_table :sources do |t|
      t.string :title
      t.string :website_url
      t.string :description
      t.references :post, null: false, foreign_key: true
      t.references :producer, foreign_key: { to_table: :stakeholders }

      t.timestamps
    end
  end
end
