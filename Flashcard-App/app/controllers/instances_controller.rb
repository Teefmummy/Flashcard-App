class InstancesController < ApplicationController
  before_action :set_instance, only: [:show]
  def index
  end

  def show
    render json: @instance
  end
  def create
    @instance = Instance.new(instance_params)
    if @instance.save
      render json: @instance, status: :created
    else
      render json: @instance.errors, status: :unprocessable_entity
    end
  end

  private
  def set_instance
    @instance = Instance.find(params[:id])
  end

  def instance_params
    params.require(:instance).permit(:quiz_id, :user_id)
  end
end
