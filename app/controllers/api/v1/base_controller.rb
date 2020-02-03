# frozen_string_literal: true

module Api
  module V1
    class BaseController < ActionController::API
      def hello
        render json: { msg: 'Hello' }
      end
    end
  end
end
