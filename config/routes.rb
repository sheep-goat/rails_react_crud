Rails.application.routes.draw do
  resources :books

  namespace :api, { format: 'json' } do
    resources :books
  end
end
