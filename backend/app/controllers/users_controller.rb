class UsersController < ApplicationController
    before_action :find_user, only: [:show, :update, :destroy]

    def index
        users = User.all
        render json: users
    end

    def show
        render json: @user
    end

    def create
        user = User.new(user_params)
        if user.save
            render json: user
        else
            render json: { error: "Couldn't create user", status: 400 }
        end
    end

    def update
        if @user.update(user_params)
            render json: @user
        else
            render json: {error: "Couldn't update user", status: 400}, status: 400
        end
    end

    def destroy
        @user.destroy
        render json: @user
    end

    private

    def find_user
        @user = User.find_by_id(params[:id])
    end

    def user_params
        params.require(:user).permit(:name)
    end
end
