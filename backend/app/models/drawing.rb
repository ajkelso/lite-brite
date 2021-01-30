class Drawing < ApplicationRecord
    belongs_to :user
    serialize :pattern

    accepts_nested_attributes_for :user

    def user_attributes=(user_attributes)
        user = User.find_or_create_by(user_attributes)
        self.user= user
    end
end
