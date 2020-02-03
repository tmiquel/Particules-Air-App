# frozen_string_literal: true

# == Schema Information
#
# Table name: graphs
#
#  id         :bigint           not null, primary key
#  slug       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Graph < ApplicationRecord
  has_many :post_graphs, dependent: :destroy
  has_many :posts, through: :post_graphs

  validates :slug, presence: true
end
