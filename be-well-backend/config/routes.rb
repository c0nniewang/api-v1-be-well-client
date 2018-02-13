Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, :goals, :daily_updates, :thought_entries, :goal_reflections, :meditation_sessions
      resources :meditations, only: [:index]
      resources :cognitive_distortions, only: [:index]
      post '/login', to: 'auth#create'
      get '/current_user', to: 'auth#show'
      patch 'completed', to: 'goals#completed_goal'
      post '/users/:id/favorite_meditations', to: 'users#add_favorite_med'
      delete '/users/:id/favorite_meditations', to: 'users#delete_favorite_med'
    end
  end
end
