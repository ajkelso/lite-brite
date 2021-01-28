class DrawingSerializer < ActiveModel::Serializer
  attributes :id, :pattern, :user_id
end
