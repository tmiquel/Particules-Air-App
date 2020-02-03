# frozen_string_literal: true

# == Schema Information
#
# Table name: posts
#
#  id                :bigint           not null, primary key
#  published         :boolean          default(FALSE)
#  summary           :text
#  title             :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  following_post_id :bigint
#  topic_id          :bigint           not null
#  user_id           :bigint           not null
#
# Indexes
#
#  index_posts_on_following_post_id  (following_post_id)
#  index_posts_on_topic_id           (topic_id)
#  index_posts_on_user_id            (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (topic_id => topics.id)
#  fk_rails_...  (user_id => users.id)
#

class Post < ApplicationRecord
  belongs_to :author, class_name: 'User', foreign_key: 'user_id', inverse_of: :posts
  belongs_to :topic
  belongs_to :following_post, optional: true, class_name: 'Post', inverse_of: :previous_post
  has_one :previous_post, class_name:  'Post', foreign_key: 'following_post_id',
                          inverse_of:  :following_post, dependent: :nullify
  has_many :post_graphs, dependent: :destroy
  has_many :graphs, through: :post_graphs
  has_many :post_stakeholders, dependent: :destroy
  has_many :stakeholders, through: :post_stakeholders
  has_many :post_definitions, dependent: :destroy
  has_many :definitions, through: :post_definitions
  has_many :sources, dependent: :destroy

  has_rich_text :content
  has_one_attached :banner

  scope :published, -> { where(published: true) }

  validates :summary, :title, :content, presence: true
end
