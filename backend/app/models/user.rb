class User < ApplicationRecord
    has_many :drawings, dependent: :destroy
end
