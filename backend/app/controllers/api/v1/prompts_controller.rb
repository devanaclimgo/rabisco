class Api::V1::PromptsController < ApplicationController
  def random
    difficulty = params[:difficulty]

    prompts = if difficulty.present?
      Prompt.where(difficulty: difficulty)
    else
      Prompt.all
    end

    prompt = prompts.order("RANDOM()").first

    if prompt
      render json: prompt
    else
      render json: { error: "Nenhum prompt encontrado" }, status: :not_found
    end
  end
end