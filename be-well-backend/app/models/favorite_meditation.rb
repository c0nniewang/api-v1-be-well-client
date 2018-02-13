class FavoriteMeditation < ApplicationRecord
  belongs_to :meditation
  belongs_to :user
end
