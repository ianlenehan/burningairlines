Rails.application.routes.draw do
  root :to => 'flights#home'

  resources :users
  resources :reservations
  resources :flights
  resources :planes

end
