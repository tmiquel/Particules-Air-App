# frozen_string_literal: true

require 'administrate/base_dashboard'

class UserDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    posts:                  Field::HasMany.with_options(foreign_key: :author_id),
    avatar:                 Field::ActiveStorage,
    id:                     Field::Number,
    email:                  Field::String,
    encrypted_password:     Field::String,
    reset_password_token:   Field::String,
    reset_password_sent_at: Field::DateTime,
    remember_created_at:    Field::DateTime,
    created_at:             Field::DateTime,
    updated_at:             Field::DateTime,
    full_name:              Field::String,
    tel:                    Field::String,
    show_email:             Field::Boolean,
    twitter:                Field::String
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = %i[
    full_name
    email
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
    id
    full_name
    avatar
    email
    show_email
    tel
    twitter
    posts
    reset_password_sent_at
    remember_created_at
    created_at
    updated_at
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
    avatar
    email
    reset_password_sent_at
    remember_created_at
    full_name
    tel
    show_email
    twitter
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

  # Overwrite this method to customize how users are displayed
  # across all pages of the admin dashboard.
  #
  def display_resource(user)
    user.full_name
  end
end
