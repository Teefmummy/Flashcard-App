class QuestionsController < ApplicationController
  def index
    @question = Question.all
    render json:  @question
  end

  def create
    @question = Question.new(question_params_for_create)
    if @question.save
      render json: @question, status: :created
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end
  private
  def question_params_for_create
    params.require(:question).permit(:q_value, :a_value, :quiz_id)
  end
  def question_params
    params.require(:question).permit(:quiz_id)
  end
end
