# frozen_string_literal: true

class CreateStakeholders < ActiveRecord::Migration[6.0]
  def change
    create_table :stakeholders do |t|
      t.string :name
      t.string :email
      t.boolean :show_email, default: false
      t.string :twitter
      t.string :linkedin
      t.string :facebook

      t.timestamps
    end
  end
end
