import type { Difficulty } from "../components/dashboard/difficulty-selector"

interface PromptData {
  prompt: string
  description: string
}

const prompts: Record<Difficulty, PromptData[]> = {
  iniciante: [
    { prompt: 'Desenhe uma maçã', description: 'tranquilo… comece devagar. 1 maçã 🍎' },
    { prompt: 'Desenhe uma caneca de café', description: 'nada mal pra começar o dia ☕' },
    { prompt: 'Desenhe uma árvore simples', description: 'natureza básica, sem stress 🌳' },
    { prompt: 'Desenhe um gato dormindo', description: 'zzz... um gatinho relaxado 😺' },
    { prompt: 'Desenhe uma casa com chaminé', description: 'clássico e aconchegante 🏠' },
    { prompt: 'Desenhe um sol sorridente', description: 'vibes positivas garantidas ☀️' },
    { prompt: 'Desenhe uma flor simples', description: 'só uma florzinha fofa 🌸' },
    { prompt: 'Desenhe um pássaro no galho', description: 'tweet tweet 🐦' },
  ],
  intermediário: [
    { prompt: 'Desenhe uma pessoa lendo um livro', description: 'já complica um pouco hein 👀 1 humano + 1 livro' },
    { prompt: 'Desenhe um dragão bebê', description: 'fofo mas perigoso 🐉' },
    { prompt: 'Desenhe uma cena de piquenique', description: 'comida + natureza = desafio 🧺' },
    { prompt: 'Desenhe um robô jardineiro', description: 'tecnologia encontra natureza 🤖🌱' },
    { prompt: 'Desenhe um castelo nas nuvens', description: 'arquitetura + fantasia ☁️🏰' },
    { prompt: 'Desenhe uma sereia no coral', description: 'vida marinha com estilo 🧜‍♀️' },
    { prompt: 'Desenhe um mago preparando poção', description: 'magia em processo ✨🧪' },
    { prompt: 'Desenhe dois coelhos brincando', description: 'tranquilo… mas não vacila. 2 coelhos 🐰' },
  ],
  avançado: [
    { prompt: 'Desenhe uma batalha épica entre um cavaleiro e um dragão', description: 'isso vai doer... no bom sentido ⚔️🔥' },
    { prompt: 'Desenhe uma cidade steampunk vista de cima', description: 'perspectiva + detalhes = caos controlado 🏙️⚙️' },
    { prompt: 'Desenhe 5 sapos em uma orquestra', description: 'já complica um pouco hein 👀 5 sapos 🐸' },
    { prompt: 'Desenhe uma floresta encantada com criaturas mágicas', description: 'prepare sua paciência 🌲✨' },
    { prompt: 'Desenhe um submarino explorador', description: 'nas profundezas do desafio 🌊' },
    { prompt: 'Desenhe uma cena de mercado medieval', description: 'muitas pessoas, muitos detalhes 🏪' },
    { prompt: 'Desenhe um phoenix renascendo das cinzas', description: 'dramático e intenso 🔥🦅' },
  ],
  profissional: [
    { prompt: 'Desenhe uma cena de 9 girafas em uma savana ao pôr do sol', description: 'boa sorte… você vai precisar. 9 girafas 🦒' },
    { prompt: 'Desenhe uma metrópole cyberpunk à noite com reflexos na chuva', description: 'prepare café, vai demorar ☔🌃' },
    { prompt: 'Desenhe uma batalha aérea entre dragões e naves espaciais', description: 'fantasy meets sci-fi 🐉🚀' },
    { prompt: 'Desenhe um banquete real com 12 convidados', description: 'anatomia + perspectiva + comida = sofrimento gostoso 👑' },
    { prompt: 'Desenhe uma biblioteca infinita em estilo Escher', description: 'geometria impossível awaits 📚' },
    { prompt: 'Desenhe uma guerra entre exércitos de formigas e abelhas', description: 'milhares de detalhes microscópicos 🐜🐝' },
  ],
  caos: [
    { prompt: 'Desenhe 20 entidades desconhecidas jogando xadrez em uma dimensão paralela', description: 'nem eu tentaria isso. 20 entidades desconhecidas 👁️' },
    { prompt: 'Desenhe todos os seus medos como um só monstro tomando chá', description: 'terapia através da arte? talvez 🍵👹' },
    { prompt: 'Desenhe o conceito de saudade em forma de paisagem', description: 'abstração: nível impossível 💭' },
    { prompt: 'Desenhe uma festa onde todos os convidados são seus objetos de casa', description: 'sua geladeira está dançando? 🎉🪑' },
    { prompt: 'Desenhe o som do silêncio', description: '... 🤫' },
    { prompt: 'Desenhe uma conversa entre o sol e a lua sobre a humanidade', description: 'filosófico e absurdo ☀️🌙' },
    { prompt: 'Desenhe como seria se as cores tivessem cheiro', description: 'sinestesia artística 🎨👃' },
    { prompt: 'Desenhe o WiFi tendo um dia ruim', description: 'a dor é real 📶😭' },
    { prompt: 'Desenhe uma receita de bolo explicada por aliens', description: '👽🎂 ???' },
    { prompt: 'Desenhe todos os seus pensamentos intrusivos como gatinhos', description: 'caos fofo garantido 🐱💭' },
  ],
}

export function getRandomPrompt(difficulty: Difficulty): PromptData {
  const categoryPrompts = prompts[difficulty]
  const randomIndex = Math.floor(Math.random() * categoryPrompts.length)
  return categoryPrompts[randomIndex]
}
