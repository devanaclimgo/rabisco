Prompt.destroy_all

prompts = [

  # 🟢 INICIANTE
  { text: "Desenhe uma maçã", difficulty: "iniciante", category: "objeto", description: "tranquilo… comece devagar. 1 maçã 🍎" },
  { text: "Desenhe uma caneca de café", difficulty: "iniciante", category: "objeto", description: "nada mal pra começar o dia ☕" },
  { text: "Desenhe uma árvore simples", difficulty: "iniciante", category: "natureza", description: "natureza básica, sem stress 🌳" },
  { text: "Desenhe um gato dormindo", difficulty: "iniciante", category: "animal", description: "zzz... um gatinho relaxado 😺" },
  { text: "Desenhe uma casa com chaminé", difficulty: "iniciante", category: "cenario", description: "clássico e aconchegante 🏠" },
  { text: "Desenhe um sol sorridente", difficulty: "iniciante", category: "natureza", description: "vibes positivas garantidas ☀️" },
  { text: "Desenhe uma flor simples", difficulty: "iniciante", category: "natureza", description: "só uma florzinha fofa 🌸" },
  { text: "Desenhe um pássaro no galho", difficulty: "iniciante", category: "animal", description: "tweet tweet 🐦" },
  { text: "Desenhe um copo com água", difficulty: "iniciante", category: "objeto", description: "transparência te observa 👁️ 3 batatas 🥔" },
  { text: "Desenhe um cacto", difficulty: "iniciante", category: "natureza", description: "espinhos = personalidade. 2 girafas 🦒" },

  # 🟡 INTERMEDIÁRIO
  { text: "Desenhe uma pessoa lendo um livro", difficulty: "intermediario", category: "anatomia", description: "já complica um pouco hein 👀" },
  { text: "Desenhe um dragão bebê", difficulty: "intermediario", category: "criatura", description: "fofo mas perigoso 🐉" },
  { text: "Desenhe uma cena de piquenique", difficulty: "intermediario", category: "composicao", description: "comida + natureza = desafio 🧺" },
  { text: "Desenhe um robô jardineiro", difficulty: "intermediario", category: "criatividade", description: "tecnologia encontra natureza 🤖🌱" },
  { text: "Desenhe um castelo nas nuvens", difficulty: "intermediario", category: "cenario", description: "arquitetura + fantasia ☁️🏰" },
  { text: "Desenhe uma sereia no coral", difficulty: "intermediario", category: "criatura", description: "vida marinha com estilo 🧜‍♀️" },
  { text: "Desenhe um mago preparando poção", difficulty: "intermediario", category: "fantasia", description: "magia em processo ✨🧪" },
  { text: "Desenhe dois coelhos brincando", difficulty: "intermediario", category: "animal", description: "tranquilo… mas não vacila. 2 coelhos 🐰" },
  { text: "Desenhe uma mão aberta", difficulty: "intermediario", category: "anatomia", description: "aqui começa o sofrimento. 5 sapos 🐸" },
  { text: "Desenhe um rosto de perfil", difficulty: "intermediario", category: "rosto", description: "confia no processo… 6 coelhos 🐰" },

  # 🔴 AVANÇADO
  { text: "Desenhe uma batalha épica entre um cavaleiro e um dragão", difficulty: "avancado", category: "acao", description: "isso vai doer... no bom sentido ⚔️🔥" },
  { text: "Desenhe uma cidade steampunk vista de cima", difficulty: "avancado", category: "cenario", description: "perspectiva + detalhes = caos controlado 🏙️⚙️" },
  { text: "Desenhe 5 sapos em uma orquestra", difficulty: "avancado", category: "criatividade", description: "5 sapos... boa sorte 🐸" },
  { text: "Desenhe uma floresta encantada com criaturas mágicas", difficulty: "avancado", category: "fantasia", description: "prepare sua paciência 🌲✨" },
  { text: "Desenhe um submarino explorador", difficulty: "avancado", category: "objeto", description: "nas profundezas do desafio 🌊" },
  { text: "Desenhe uma cena de mercado medieval", difficulty: "avancado", category: "composicao", description: "muitas pessoas, muitos detalhes 🏪" },
  { text: "Desenhe um phoenix renascendo das cinzas", difficulty: "avancado", category: "criatura", description: "dramático e intenso 🔥🦅" },
  { text: "Desenhe duas pessoas interagindo", difficulty: "avancado", category: "anatomia", description: "caos controlado. 8 girafas 🦒" },
  { text: "Desenhe uma rua em perspectiva", difficulty: "avancado", category: "perspectiva", description: "linhas infinitas 👁️" },
  { text: "Desenhe um quarto bagunçado", difficulty: "avancado", category: "cenario", description: "detalhes infinitos 🥔" },

  # 🟣 PROFISSIONAL
  { text: "Desenhe 9 girafas em uma savana ao pôr do sol", difficulty: "profissional", category: "composicao", description: "boa sorte… 9 girafas 🦒" },
  { text: "Desenhe uma metrópole cyberpunk à noite com chuva", difficulty: "profissional", category: "cenario", description: "prepare café ☔🌃" },
  { text: "Desenhe uma batalha aérea entre dragões e naves", difficulty: "profissional", category: "acao", description: "fantasy meets sci-fi 🐉🚀" },
  { text: "Desenhe um banquete real com 12 convidados", difficulty: "profissional", category: "composicao", description: "anatomia + comida = dor 👑" },
  { text: "Desenhe uma biblioteca infinita estilo Escher", difficulty: "profissional", category: "perspectiva", description: "geometria impossível 📚" },
  { text: "Desenhe uma guerra entre formigas e abelhas", difficulty: "profissional", category: "criatividade", description: "milhares de detalhes 🐜🐝" },
  { text: "Desenhe uma cena com 3 personagens principais", difficulty: "profissional", category: "composicao", description: "isso aqui é dor. 12 dragões 🐉" },

  # ⚫ CAOS
  { text: "Desenhe 20 entidades jogando xadrez em outra dimensão", difficulty: "caos", category: "absurdo", description: "nem eu tentaria 👁️" },
  { text: "Desenhe todos os seus medos como um monstro tomando chá", difficulty: "caos", category: "emocional", description: "terapia talvez 🍵👹" },
  { text: "Desenhe o conceito de saudade", difficulty: "caos", category: "abstrato", description: "nível impossível 💭" },
  { text: "Desenhe uma festa com objetos da sua casa", difficulty: "caos", category: "criatividade", description: "a geladeira dança 🎉" },
  { text: "Desenhe o som do silêncio", difficulty: "caos", category: "abstrato", description: "... 🤫" },
  { text: "Desenhe uma conversa entre o sol e a lua", difficulty: "caos", category: "fantasia", description: "filosófico ☀️🌙" },
  { text: "Desenhe como cores teriam cheiro", difficulty: "caos", category: "sinestesia", description: "arte avançada 🎨👃" },
  { text: "Desenhe o WiFi tendo um dia ruim", difficulty: "caos", category: "humor", description: "dor real 📶😭" },
  { text: "Desenhe uma receita explicada por aliens", difficulty: "caos", category: "absurdo", description: "👽🎂 ???" },
  { text: "Desenhe pensamentos intrusivos como gatinhos", difficulty: "caos", category: "emocional", description: "caos fofo 🐱💭" }

]

Prompt.create!(prompts)

puts "🌱 Seed criada com #{Prompt.count} prompts"