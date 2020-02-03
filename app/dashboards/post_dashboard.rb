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
    author:            Field::BelongsTo.with_options(class_name: 'User', foreign_key: 'user_id'),
    topic:             Field::BelongsTo,
    following_post:    Field::BelongsTo.with_options(class_name: 'Post'),
    previous_post:     Field::HasOne.with_options(class_name: 'Post'), # only to Show, not in form
    post_graphs:       Field::HasMany,
    graphs:            Field::HasMany,
    post_stakeholders: Field::HasMany,
    stakeholders:      Field::HasMany,
    post_definitions:  Field::HasMany,
    definitions:       Field::HasMany,
    sources:           Field::HasMany,
    content:           RichTextAreaField,
    banner:            Field::ActiveStorage,
    id:                Field::Number,
    title:             Field::String,
    summary:           Field::Text,
    published:         Field::Boolean,
    created_at:        Field::DateTime,
    updated_at:        Field::DateTime
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = %i[
    author
    topic
    title
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
    author
    topic
    post_graphs
    graphs
    post_stakeholders
    stakeholders
    post_definitions
    definitions
    sources
    content
    banner
    id
    title
    summary
    published
    created_at
    updated_at
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
    title
    author
    topic
    content
    summary
    banner
    published
    graphs
    stakeholders
    definitions
    sources
    following_post
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
end
