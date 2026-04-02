Prompt.destroy_all

prompts = [

  # 🟢 INICIANTE
  { text: "Desenhe uma maçã", difficulty: "iniciante", category: "objeto", description: "simples… mas capricha hein. 2 coelhos 🐰" },
  { text: "Desenhe uma caneca", difficulty: "iniciante", category: "objeto", description: "cilindro disfarçado 👀 3 batatas 🥔" },
  { text: "Desenhe um peixe", difficulty: "iniciante", category: "animal", description: "não complica… por enquanto. 2 sapos 🐸" },
  { text: "Desenhe um gato sentado", difficulty: "iniciante", category: "animal", description: "fofo mas traiçoeiro. 3 coelhos 🐰" },
  { text: "Desenhe um cacto", difficulty: "iniciante", category: "natureza", description: "espinhos = personalidade. 2 girafas 🦒" },
  { text: "Desenhe uma nuvem estilizada", difficulty: "iniciante", category: "natureza", description: "parece fácil… não é. 2 bananas 🍌" },
  { text: "Desenhe um copo com água", difficulty: "iniciante", category: "objeto", description: "transparência te observa 👁️ 3 batatas 🥔" },
  { text: "Desenhe uma flor simples", difficulty: "iniciante", category: "natureza", description: "clássico dos clássicos. 2 coelhos 🐰" },

  # 🟡 INTERMEDIÁRIO
  { text: "Desenhe uma mão aberta", difficulty: "intermediario", category: "anatomia", description: "aqui começa o sofrimento. 5 sapos 🐸" },
  { text: "Desenhe um rosto de perfil", difficulty: "intermediario", category: "rosto", description: "confia no processo… 6 coelhos 🐰" },
  { text: "Desenhe um sapato", difficulty: "intermediario", category: "objeto", description: "ângulos suspeitos. 5 batatas 🥔" },
  { text: "Desenhe um cachorro correndo", difficulty: "intermediario", category: "animal", description: "movimento é traiçoeiro 👀 6 sapos 🐸" },
  { text: "Desenhe uma cadeira em perspectiva", difficulty: "intermediario", category: "perspectiva", description: "linhas vão te testar. 6 girafas 🦒" },
  { text: "Desenhe uma pessoa sentada", difficulty: "intermediario", category: "anatomia", description: "proporção é tudo. 6 coelhos 🐰" },
  { text: "Desenhe um olho realista", difficulty: "intermediario", category: "rosto", description: "a alma tá nos detalhes. 5 sapos 🐸" },

  # 🔴 AVANÇADO
  { text: "Desenhe duas pessoas interagindo", difficulty: "avancado", category: "anatomia", description: "caos controlado. 8 girafas 🦒" },
  { text: "Desenhe uma rua em perspectiva", difficulty: "avancado", category: "perspectiva", description: "linhas infinitas te observam 👁️ 9 sapos 🐸" },
  { text: "Desenhe um corpo em movimento", difficulty: "avancado", category: "anatomia", description: "fluidez ou nada. 8 coelhos 🐰" },
  { text: "Desenhe um quarto bagunçado", difficulty: "avancado", category: "cenario", description: "detalhes infinitos. 9 batatas 🥔" },
  { text: "Desenhe um retrato com sombras fortes", difficulty: "avancado", category: "luz", description: "luz e sombra brigando. 9 sapos 🐸" },

  # 🟣 PROFISSIONAL
  { text: "Desenhe uma cena com 3 personagens", difficulty: "profissional", category: "composicao", description: "isso aqui é dor. 12 dragões 🐉" },
  { text: "Desenhe uma ilustração completa", difficulty: "profissional", category: "composicao", description: "boa sorte… sério. 12 girafas 🦒" },
  { text: "Desenhe um cenário complexo com profundidade", difficulty: "profissional", category: "perspectiva", description: "profundidade mental também. 13 entidades 👁️" },

  # ⚫ CAOS
  { text: "Desenhe um peixe com pernas humanas", difficulty: "caos", category: "criatividade", description: "não questione. 15 entidades 👁️" },
  { text: "Desenhe um cavalo feito de gelatina", difficulty: "caos", category: "criatividade", description: "isso foi um erro. 17 girafas 🦒" },
  { text: "Desenhe um objeto cotidiano vivo", difficulty: "caos", category: "criatividade", description: "ele te observa. 16 sapos 🐸" },
  { text: "Desenhe algo que não deveria existir", difficulty: "caos", category: "criatividade", description: "nem olha muito. 20 entidades 👁️" }

]

Prompt.create!(prompts)
puts "Seed criada com #{Prompt.count} prompts 🌱"