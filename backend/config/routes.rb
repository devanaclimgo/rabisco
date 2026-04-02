Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get "prompts/random", to: "prompts#random"
    end
  end
end