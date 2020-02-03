# frozen_string_literal: true

# == Schema Information
#
# Table name: stakeholders
#
#  id         :bigint           not null, primary key
#  email      :string
#  facebook   :string
#  linkedin   :string
#  name       :string
#  show_email :boolean          default(FALSE)
#  twitter    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Stakeholder < ApplicationRecord
  has_many :post_stakeholders, dependent: :destroy
  has_many :posts, through: :post_stakeholders

  has_rich_text :content
  has_one_attached :avatar

  validates :name, presence: true
end
