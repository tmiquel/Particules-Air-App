# frozen_string_literal: true

require 'administrate/base_dashboard'

class PostDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    author:         Field::BelongsTo.with_options(class_name: 'User'),
    topic:          Field::BelongsTo,
    following_post: Field::BelongsTo.with_options(class_name: 'Post'),
    previous_post:  Field::HasOne.with_options(class_name: 'Post'), # only to Show, not in form
    graphs:         Field::NestedHasMany.with_options(find_or_create: :post_graphs),
    stakeholders:   Field::NestedHasMany.with_options(find_or_create: :post_stakeholders),
    definitions:    Field::NestedHasMany.with_options(find_or_create: :post_definitions),
    sources:        Field::NestedHasMany,
    content:        RichTextAreaField,
    banner:         Field::ActiveStorage,
    id:             Field::Number,
    title:          Field::String,
    summary:        Field::Text,
    published:      Field::Boolean,
    created_at:     Field::DateTime,
    updated_at:     Field::DateTime
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = %i[
    title
    topic
    author
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
    id
    title
    banner
    summary
    topic
    author
    content
    graphs
    stakeholders
    definitions
    sources
    following_post
    published
    created_at
    updated_at
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
    title
    banner
    summary
    topic
    author
    content
    graphs
    stakeholders
    definitions
    sources
    following_post
    published
  ].freeze

  # COLLECTION_FILTERS
  # a hash that defines filters that can be used while searching via the search
  # field of the dashboard.
  #
  # For example to add an option to search for open resources by typing "open:"
  # in the search field:
  #
  #   COLLECTION_FILTERS = {
  #     open: ->(resources) { where(open: true) }
  #   }.freeze
  COLLECTION_FILTERS = {}.freeze

  # Overwrite this method to customize how posts are displayed
  # across all pages of the admin dashboard.
  #
  def display_resource(post)
    post.title
  end

  def permitted_attributes
    super + [
      post_definitions_attributes:  [
        :id, :definition_id,
        definition_attributes: [:id, :term, :meaning]
      ],
      post_stakeholders_attributes: [
        :id, :stakeholder_id,
        stakeholder_attributes: %i[id email facebook linkedin name show_email twitter avatar content]
      ],
      post_graphs_attributes:       [
        :id, :graph_id,
        graph_attributes: %i[id slug]
      ]
    ]
  end
end
