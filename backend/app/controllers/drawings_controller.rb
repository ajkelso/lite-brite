class DrawingsController < ApplicationController
    def index
        drawings = Drawing.all
        render json: drawings
    end

end
