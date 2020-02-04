# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  root to: 'admin/posts#index'

  # ADMIN
  namespace :admin do
    resources :posts
    resources :topics
    resources :graphs
    resources :stakeholders
    resources :definitions
    resources :sources
    resources :authors
    resources :users

    root to: 'posts#index'
  end

  # API
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      get 'hello', to: 'base#hello'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
