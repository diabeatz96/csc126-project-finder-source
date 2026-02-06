const quizQuestions = [
  {
    id: 1,
    question: "When you have a free afternoon, what sounds most appealing?",
    options: [
      { text: "Building or fixing something with my hands", scores: { realistic: 3, investigative: 0, artistic: 0, social: 0, humanist: 0 } },
      { text: "Reading about how something works or solving a puzzle", scores: { realistic: 0, investigative: 3, artistic: 0, social: 0, humanist: 0 } },
      { text: "Drawing, playing music, or working on a creative project", scores: { realistic: 0, investigative: 0, artistic: 3, social: 0, humanist: 0 } },
      { text: "Reading a novel, writing, or learning about history", scores: { realistic: 0, investigative: 0, artistic: 0, social: 0, humanist: 3 } },
    ],
  },
  {
    id: 2,
    question: "What kind of video games or apps do you enjoy most?",
    options: [
      { text: "Sandbox games where I can build things (Minecraft, Terraria)", scores: { realistic: 3, investigative: 1, artistic: 1, social: 0, humanist: 0 } },
      { text: "Strategy or puzzle games (chess, Sudoku, logic games)", scores: { realistic: 0, investigative: 3, artistic: 0, social: 0, humanist: 0 } },
      { text: "Story-driven games or visual novels with rich narratives", scores: { realistic: 0, investigative: 0, artistic: 1, social: 0, humanist: 3 } },
      { text: "Social or multiplayer games where I play with others", scores: { realistic: 0, investigative: 0, artistic: 0, social: 3, humanist: 0 } },
    ],
  },
  {
    id: 3,
    question: "If you could instantly master one skill, which would it be?",
    options: [
      { text: "Engineering or electronics", scores: { realistic: 3, investigative: 1, artistic: 0, social: 0, humanist: 0 } },
      { text: "Mathematics or data analysis", scores: { realistic: 0, investigative: 3, artistic: 0, social: 0, humanist: 0 } },
      { text: "Animation or graphic design", scores: { realistic: 0, investigative: 0, artistic: 3, social: 0, humanist: 0 } },
      { text: "Creative writing or storytelling", scores: { realistic: 0, investigative: 0, artistic: 1, social: 0, humanist: 3 } },
    ],
  },
  {
    id: 4,
    question: "Which school subject do (or did) you enjoy the most?",
    options: [
      { text: "Science labs or shop class", scores: { realistic: 3, investigative: 1, artistic: 0, social: 0, humanist: 0 } },
      { text: "Math or science theory", scores: { realistic: 0, investigative: 3, artistic: 0, social: 0, humanist: 0 } },
      { text: "Art, music, or creative writing", scores: { realistic: 0, investigative: 0, artistic: 3, social: 0, humanist: 1 } },
      { text: "History, English literature, or social studies", scores: { realistic: 0, investigative: 0, artistic: 0, social: 1, humanist: 3 } },
    ],
  },
  {
    id: 5,
    question: "When learning something new, how do you prefer to learn?",
    options: [
      { text: "Jump in and start tinkering, figure it out as I go", scores: { realistic: 3, investigative: 0, artistic: 1, social: 0, humanist: 0 } },
      { text: "Read documentation and understand the theory first", scores: { realistic: 0, investigative: 3, artistic: 0, social: 0, humanist: 1 } },
      { text: "Watch a tutorial or see visual examples", scores: { realistic: 0, investigative: 0, artistic: 3, social: 1, humanist: 0 } },
      { text: "Read stories or case studies about how others did it", scores: { realistic: 0, investigative: 0, artistic: 0, social: 1, humanist: 3 } },
    ],
  },
  {
    id: 6,
    question: "What would make you proudest about a program you built?",
    options: [
      { text: "It simulates something from the real world accurately", scores: { realistic: 3, investigative: 2, artistic: 0, social: 0, humanist: 0 } },
      { text: "It solves a complex problem elegantly", scores: { realistic: 0, investigative: 3, artistic: 0, social: 0, humanist: 0 } },
      { text: "It looks amazing and is fun to interact with", scores: { realistic: 0, investigative: 0, artistic: 3, social: 0, humanist: 0 } },
      { text: "It tells a story or brings historical events to life", scores: { realistic: 0, investigative: 0, artistic: 1, social: 0, humanist: 3 } },
    ],
  },
  {
    id: 7,
    question: "Pick a YouTube video you would actually click on:",
    options: [
      { text: "\"How Bridges Actually Work (Engineering Explained)\"", scores: { realistic: 3, investigative: 1, artistic: 0, social: 0, humanist: 0 } },
      { text: "\"The Math Behind Why You Can't Beat the Casino\"", scores: { realistic: 0, investigative: 3, artistic: 0, social: 0, humanist: 0 } },
      { text: "\"Making Pixel Art from Scratch in 10 Minutes\"", scores: { realistic: 0, investigative: 0, artistic: 3, social: 0, humanist: 0 } },
      { text: "\"The Untold Story of How Rome Really Fell\"", scores: { realistic: 0, investigative: 1, artistic: 0, social: 0, humanist: 3 } },
    ],
  },
  {
    id: 8,
    question: "What type of project would you MOST want to show a friend?",
    options: [
      { text: "A physics simulation with bouncing balls and gravity", scores: { realistic: 3, investigative: 2, artistic: 0, social: 0, humanist: 0 } },
      { text: "A visualizer that shows how a sorting algorithm works", scores: { realistic: 0, investigative: 3, artistic: 1, social: 0, humanist: 0 } },
      { text: "A colorful screensaver or generative art piece", scores: { realistic: 0, investigative: 0, artistic: 3, social: 0, humanist: 0 } },
      { text: "An interactive story or historical timeline explorer", scores: { realistic: 0, investigative: 0, artistic: 1, social: 1, humanist: 3 } },
    ],
  },
];

export default quizQuestions;
