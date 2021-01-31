class DrawingsController < ApplicationController
    before_action :find_drawing, only: [:show, :update, :destroy]

    def index
        drawings = Drawing.all
        render json: drawings
    end

    def show
        render json: @drawing
    end

    def create
        drawing = Drawing.new(drawing_params)
        if drawing.save
            render json: drawing
        else
            render json: { error: "Couldn't create drawing", status: 400 }
        end
    end

    def update
        if @drawing.update(drawing_params)
            render json: @drawing
        else
            render json: {error: "Couldn't update drawing", status: 400}, status: 400
        end
    end

    def destroy
        @drawing.destroy
        render json: @drawing
    end

    private

    def find_drawing
        @drawing = Drawing.find_by_id(params[:id])
    end

    def drawing_params
        params.require(:drawing).permit(:user_id, :title, pattern: [], user_attributes: [:name])
    end
end
