# frozen_string_literal: true

# == Schema Information
#
# Table name: topics
#
#  id                :bigint           not null, primary key
#  long_description  :text
#  short_description :text
#  title             :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Topic < ApplicationRecord
  has_many :posts, dependent: :nullify
end
