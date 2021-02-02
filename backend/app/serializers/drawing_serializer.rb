class DrawingSerializer < ActiveModel::Serializer
  attributes :id, :title, :pattern, :user

  def user
    {
      id: object.user.id,
      name: object.user.name
    }
  end
end
