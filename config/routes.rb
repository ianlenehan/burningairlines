Rails.application.routes.draw do
  root :to => 'flights#home'

  resources :users
  resources :reservations
  resources :flights
  resources :planes

  get '/signup' => 'users#new'

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

end
