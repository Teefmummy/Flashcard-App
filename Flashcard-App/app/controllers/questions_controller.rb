class QuestionsController < ApplicationController
  before_action :set_question, only: [:show, :update, :destroy]
  def index
    @question = Question.all
    render json:  @question
  end
  def show
    render json: @question
  end


  def create
    @question = Question.new(question_params_for_create)
    if @question.save
      render json: @question, status: :created
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end
  def update
    if @question.update(question_params_for_create)
      render json: @question
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end
  def destroy
    @question.destroy
  end

  private
  def set_question
      @question = Question.find(params[:id])
  end
  def question_params_for_create
    params.require(:question).permit(:q_value, :a_value, :quiz_id)
  end
  def question_params
    params.require(:question).permit(:quiz_id)
  end
end
