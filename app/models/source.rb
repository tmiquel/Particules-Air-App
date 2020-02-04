# frozen_string_literal: true

# == Schema Information
#
# Table name: sources
#
#  id          :bigint           not null, primary key
#  description :string
#  title       :string
#  website_url :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  post_id     :bigint           not null
#  producer_id :bigint
#
# Indexes
#
#  index_sources_on_post_id      (post_id)
#  index_sources_on_producer_id  (producer_id)
#
# Foreign Keys
#
#  fk_rails_...  (post_id => posts.id)
#

class Source < ApplicationRecord
  belongs_to :post
  belongs_to :producer, class_name: 'Stakeholder', optional: true

  validates :description, :title, :website_url, presence: true
end
