# frozen_string_literal: true

# == Schema Information
#
# Table name: sources
#
#  id             :bigint           not null, primary key
#  description    :string
#  title          :string
#  website_url    :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  post_id        :bigint           not null
#  stakeholder_id :bigint           not null
#
# Indexes
#
#  index_sources_on_post_id         (post_id)
#  index_sources_on_stakeholder_id  (stakeholder_id)
#
# Foreign Keys
#
#  fk_rails_...  (post_id => posts.id)
#  fk_rails_...  (stakeholder_id => stakeholders.id)
#

class Source < ApplicationRecord
  belongs_to :post
  belongs_to :producer, class_name: 'Stakeholder'

  validates :description, :title, :website_url, presence: true
end
