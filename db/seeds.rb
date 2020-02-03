# frozen_string_literal: true

# To clean and seed the database use : `rails db:seed:replant`

topic = Topic.create! title: 'Les particules fines'

author = User.create! full_name:  'Thibaut Miquel',
                      email:      'author@gmail.com',
                      password:   'password',
                      tel:        '0612345678',
                      show_email: true

author.posts.create!(title: '1er article', topic: topic)
