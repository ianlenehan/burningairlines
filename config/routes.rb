Rails.application.routes.draw do
  root :to => 'users#new'

  resources :users
  resources :reservations
  resources :flights
  resources :planes

get '/search' => 'flights#home'
get '/signup' => 'users#new'
get '/login' => 'session#new'
post '/login' => 'session#create'
delete '/login' => 'session#destroy'

end
