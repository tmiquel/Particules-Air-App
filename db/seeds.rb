# frozen_string_literal: true

# To clean and seed the database use : `rails db:seed:replant`

topic = Topic.create! title:             'Les particules fines',
                      short_description: 'Short Description',
                      long_description:  'Long Description',
                      image:             {
                        io:       File.open('db/seeds/pollution.jpg'),
                        filename: 'Pollution'
                      }

author = User.create! full_name:  'Thibaut Miquel',
                      email:      'author@gmail.com',
                      password:   'password',
                      tel:        '0612345678',
                      show_email: true,
                      role:       :author

author.posts.create! title:   '1er article',
                     topic:   topic,
                     summary: 'This is a summary',
                     content: '<h1>Rich Text</h1> <p>Text main content</p>',
                     banner:  {
                       io:       File.open('db/seeds/pollution.jpg'),
                       filename: 'Pollution'
                     }
