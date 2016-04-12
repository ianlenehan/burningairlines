Rails.application.routes.draw do
  root :to => 'search#home'

  resources :users
  resources :reservations
  resources :flights
  resources :planes

end
