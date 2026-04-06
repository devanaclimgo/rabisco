export async function fetchRandomPrompt(
  difficulty: string,
  excludeIds: number[] = []
) {
  const params = new URLSearchParams({
    difficulty,
    exclude_ids: excludeIds.join(","),
  })

  const res = await fetch(`http://localhost:3000/api/v1/prompts/random?${params}`)
  return res.json()
}