# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_03_131844) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "definitions", force: :cascade do |t|
    t.string "term"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "graphs", force: :cascade do |t|
    t.string "slug"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "post_definitions", force: :cascade do |t|
    t.bigint "post_id", null: false
    t.bigint "definition_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["definition_id"], name: "index_post_definitions_on_definition_id"
    t.index ["post_id"], name: "index_post_definitions_on_post_id"
  end

  create_table "post_graphs", force: :cascade do |t|
    t.bigint "post_id", null: false
    t.bigint "graph_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["graph_id"], name: "index_post_graphs_on_graph_id"
    t.index ["post_id"], name: "index_post_graphs_on_post_id"
  end

  create_table "post_stakeholders", force: :cascade do |t|
    t.bigint "post_id", null: false
    t.bigint "stakeholder_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["post_id"], name: "index_post_stakeholders_on_post_id"
    t.index ["stakeholder_id"], name: "index_post_stakeholders_on_stakeholder_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "title"
    t.text "summary"
    t.bigint "user_id", null: false
    t.bigint "topic_id", null: false
    t.bigint "following_post_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["following_post_id"], name: "index_posts_on_following_post_id"
    t.index ["topic_id"], name: "index_posts_on_topic_id"
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "sources", force: :cascade do |t|
    t.string "title"
    t.string "website_url"
    t.string "description"
    t.bigint "post_id", null: false
    t.bigint "stakeholder_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["post_id"], name: "index_sources_on_post_id"
    t.index ["stakeholder_id"], name: "index_sources_on_stakeholder_id"
  end

  create_table "stakeholders", force: :cascade do |t|
    t.string "name"
    t.string "emails"
    t.boolean "show_email", default: false
    t.string "twitter"
    t.string "linkedin"
    t.string "facebook"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "topics", force: :cascade do |t|
    t.string "title"
    t.text "short_description"
    t.text "long_description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "full_name"
    t.string "tel"
    t.boolean "show_email", default: false
    t.string "twitter"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "post_definitions", "definitions"
  add_foreign_key "post_definitions", "posts"
  add_foreign_key "post_graphs", "graphs"
  add_foreign_key "post_graphs", "posts"
  add_foreign_key "post_stakeholders", "posts"
  add_foreign_key "post_stakeholders", "stakeholders"
  add_foreign_key "posts", "topics"
  add_foreign_key "posts", "users"
  add_foreign_key "sources", "posts"
  add_foreign_key "sources", "stakeholders"
end
