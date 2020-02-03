# == Schema Information
#
# Table name: post_graphs
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  graph_id   :bigint           not null
#  post_id    :bigint           not null
#
# Indexes
#
#  index_post_graphs_on_graph_id  (graph_id)
#  index_post_graphs_on_post_id   (post_id)
#
# Foreign Keys
#
#  fk_rails_...  (graph_id => graphs.id)
#  fk_rails_...  (post_id => posts.id)
#

class PostGraph < ApplicationRecord
  belongs_to :post
  belongs_to :graph
end
