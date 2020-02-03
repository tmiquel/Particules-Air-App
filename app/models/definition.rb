# frozen_string_literal: true

# == Schema Information
#
# Table name: definitions
#
#  id         :bigint           not null, primary key
#  term       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Definition < ApplicationRecord
  has_many :post_definitions, dependent: :destroy
  has_many :posts, through: :post_definitions

  has_rich_text :meaning
  validates :term, :meaning, presence: true
end
