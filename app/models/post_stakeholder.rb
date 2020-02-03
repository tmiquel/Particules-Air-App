# == Schema Information
#
# Table name: post_stakeholders
#
#  id             :bigint           not null, primary key
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  post_id        :bigint           not null
#  stakeholder_id :bigint           not null
#
# Indexes
#
#  index_post_stakeholders_on_post_id         (post_id)
#  index_post_stakeholders_on_stakeholder_id  (stakeholder_id)
#
# Foreign Keys
#
#  fk_rails_...  (post_id => posts.id)
#  fk_rails_...  (stakeholder_id => stakeholders.id)
#

class PostStakeholder < ApplicationRecord
  belongs_to :post
  belongs_to :stakeholder
end
