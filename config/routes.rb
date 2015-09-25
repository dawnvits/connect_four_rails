Rails.application.routes.draw do
  root 'home#index'
  
  resources :board do
    collection do
      patch 'add_pieces_to_column_one'
      patch 'add_pieces_to_column_two'
      patch 'add_pieces_to_column_three'
      patch 'add_pieces_to_column_four'
      patch 'add_pieces_to_column_five'
      patch 'add_pieces_to_column_six'
      patch 'add_pieces_to_column_seven'
      put 'reset'
    end
  end
  
end
