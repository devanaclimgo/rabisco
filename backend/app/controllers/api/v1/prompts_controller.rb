class Api::V1::PromptsController < ApplicationController
  def random
    difficulty = params[:difficulty]
    exclude_ids = params[:exclude_ids]&.split(",") || []

    prompts = Prompt.all
    prompts = prompts.where(difficulty: difficulty) if difficulty.present?
    prompts = prompts.where.not(id: exclude_ids) if exclude_ids.any?

    prompt = prompts.order("RANDOM()").first

    if prompt.nil?
      prompts = Prompt.all
      prompts = prompts.where(difficulty: difficulty) if difficulty.present?
      prompt = prompts.order("RANDOM()").first
    end

    render json: prompt
  end
end