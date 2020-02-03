# frozen_string_literal: true

class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :summary
      t.references :user, null: false, foreign_key: true
      t.references :topic, null: false, foreign_key: true
      t.references :following_post, index: true

      t.timestamps
    end
  end
end
