export interface PromptResponse {
  id: number;
  text: string;
  description: string;
}

const API_URL = import.meta.env.VITE_API_URL;

export async function fetchRandomPrompt(
  difficulty: string,
  excludeIds: number[],
): Promise<PromptResponse> {
  const params = new URLSearchParams({
    difficulty,
    exclude_ids: excludeIds.join(","),
  });

  const response = await fetch(
    `${API_URL}/api/v1/prompts/random?${params}`,
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar prompt");
  }

  return response.json();
}