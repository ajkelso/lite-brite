class Drawing < ApplicationRecord
    belongs_to :user
    serialize :pattern
end
