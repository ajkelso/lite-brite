class DrawingSerializer < ActiveModel::Serializer
  attributes :id, :title, :pattern, :user_id
end
