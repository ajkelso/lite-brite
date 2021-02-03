class DrawingSerializer < ActiveModel::Serializer
  attributes :id, :title, :pattern, :user_id, :user_name

  def user_name
    object.user.name
  end

end
