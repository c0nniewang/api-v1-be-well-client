Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, :goals, :daily_updates, :thought_entries
      resources :cognitive_distortions, only: [:index]
      post '/login', to: 'auth#create'
      get '/current_user', to: 'auth#show'
    end
  end
end