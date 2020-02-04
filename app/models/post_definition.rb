# frozen_string_literal: true

# == Schema Information
#
# Table name: post_definitions
#
#  id            :bigint           not null, primary key
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  definition_id :bigint           not null
#  post_id       :bigint           not null
#
# Indexes
#
#  index_post_definitions_on_definition_id  (definition_id)
#  index_post_definitions_on_post_id        (post_id)
#
# Foreign Keys
#
#  fk_rails_...  (definition_id => definitions.id)
#  fk_rails_...  (post_id => posts.id)
#

class PostDefinition < ApplicationRecord
  belongs_to :post
  belongs_to :definition

  accepts_nested_attributes_for :definition, reject_if: :all_blank
end
