# frozen_string_literal: true

class AddInfosToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :full_name, :string
    add_column :users,  :tel, :string
    add_column :users,  :show_email, :boolean, default: false
    add_column :users,  :twitter, :string
  end
end
