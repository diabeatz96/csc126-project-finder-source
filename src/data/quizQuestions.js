const quizQuestions = [
  // --- Realistic-focused (Questions 1-3) ---
  {
    id: 1,
    question: "When you have a free afternoon, what sounds most appealing?",
    options: [
      { text: "Building or fixing something with my hands", scores: { realistic: 3, investigative: 0, artistic: 0, social: 0, enterprising: 0, conventional: 0 } },
      { text: "Reading about how something works or solving a puzzle", scores: { realistic: 0, investigative: 3, artistic: 0, social: 0, enterprising: 0, conventional: 0 } },
      { text: "Drawing, playing music, or working on a creative project", scores: { realistic: 0, investigative: 0, artistic: 3, social: 0, enterprising: 0, conventional: 0 } },
      { text: "Organizing my room, planner, or phone apps", scores: { realistic: 0, investigative: 0, artistic: 0, social: 0, enterprising: 0, conventional: 3 } },
    ],
  },
  {
    id: 2,
    question: "What kind of video games or apps do you enjoy most?",
    options: [
      { text: "Sandbox games where I can build things (Minecraft, Terraria)", scores: { realistic: 3, investigative: 1, artistic: 1, social: 0, enterprising: 0, conventional: 0 } },
      { text: "Strategy or puzzle games (chess, Sudoku, logic games)", scores: { realistic: 0, investigative: 3, artistic: 0, social: 0, enterprising: 1, conventional: 0 } },
      { text: "Social or multiplayer games where I play with others", scores: { realistic: 0, investigative: 0, artistic: 0, social: 3, enterprising: 1, conventional: 0 } },
      { text: "Tycoon or management sims (RollerCoaster Tycoon, SimCity)", scores: { realistic: 0, investigative: 0, artistic: 0, social: 0, enterprising: 3, conventional: 1 } },
    ],
  },
  {
    id: 3,
    question: "If you could instantly master one skill, which would it be?",
    options: [
      { text: "Engineering or electronics", scores: { realistic: 3, investigative: 1, artistic: 0, social: 0, enterprising: 0, conventional: 0 } },
      { text: "Mathematics or data analysis", scores: { realistic: 0, investigative: 3, artistic: 0, social: 0, enterprising: 0, conventional: 1 } },
      { text: "Animation or graphic design", scores: { realistic: 0, investigative: 0, artistic: 3, social: 0, enterprising: 0, conventional: 0 } },
      { text: "Public speaking or sales", scores: { realistic: 0, investigative: 0, artistic: 0, social: 1, enterprising: 3, conventional: 0 } },
    ],
  },

  // --- Investigative-focused (Questions 4-6) ---
  {
    id: 4,
    question: "Which school subject do (or did) you enjoy the most?",
    options: [
      { text: "Science labs or shop class", scores: { realistic: 3, investigative: 1, artistic: 0, social: 0, enterprising: 0, conventional: 0 } },
      { text: "Math or science theory", scores: { realistic: 0, investigative: 3, artistic: 0, social: 0, enterprising: 0, conventional: 0 } },
      { text: "Art, music, or creative writing", scores: { realistic: 0, investigative: 0, artistic: 3, social: 1, enterprising: 0, conventional: 0 } },
      { text: "Business, economics, or accounting", scores: { realistic: 0, investigative: 0, artistic: 0, social: 0, enterprising: 2, conventional: 2 } },
    ],
  },
  {
    id: 5,
    question: "When learning something new, how do you prefer to learn?",
    options: [
      { text: "Jump in and start tinkering, figure it out as I go", scores: { realistic: 3, investigative: 0, artistic: 1, social: 0, enterprising: 0, conventional: 0 } },
      { text: "Read documentation and understand the theory first", scores: { realistic: 0, investigative: 3, artistic: 0, social: 0, enterprising: 0, conventional: 1 } },
      { text: "Watch a tutorial or see visual examples", scores: { realistic: 0, investigative: 0, artistic: 3, social: 1, enterprising: 0, conventional: 0 } },
      { text: "Follow a step-by-step guide and take careful notes", scores: { realistic: 0, investigative: 1, artistic: 0, social: 0, enterprising: 0, conventional: 3 } },
    ],
  },
  {
    id: 6,
    question: "What would make you proudest about a program you built?",
    options: [
      { text: "It simulates something from the real world accurately", scores: { realistic: 3, investigative: 2, artistic: 0, social: 0, enterprising: 0, conventional: 0 } },
      { text: "It solves a complex problem elegantly", scores: { realistic: 0, investigative: 3, artistic: 0, social: 0, enterprising: 0, conventional: 0 } },
      { text: "It looks amazing and is fun to interact with", scores: { realistic: 0, investigative: 0, artistic: 3, social: 1, enterprising: 0, conventional: 0 } },
      { text: "It manages data or tracks things efficiently", scores: { realistic: 0, investigative: 0, artistic: 0, social: 0, enterprising: 1, conventional: 3 } },
    ],
  },

  // --- Artistic-focused (Questions 7-9) ---
  {
    id: 7,
    question: "Pick a YouTube video you would actually click on:",
    options: [
      { text: "\"How Bridges Actually Work (Engineering Explained)\"", scores: { realistic: 3, investigative: 1, artistic: 0, social: 0, enterprising: 0, conventional: 0 } },
      { text: "\"The Math Behind Why You Can't Beat the Casino\"", scores: { realistic: 0, investigative: 3, artistic: 0, social: 0, enterprising: 1, conventional: 0 } },
      { text: "\"Making Pixel Art from Scratch in 10 Minutes\"", scores: { realistic: 0, investigative: 0, artistic: 3, social: 0, enterprising: 0, conventional: 0 } },
      { text: "\"How a 22-Year-Old Built a $1M App\"", scores: { realistic: 0, investigative: 0, artistic: 0, social: 0, enterprising: 3, conventional: 0 } },
    ],
  },
  {
    id: 8,
    question: "What type of project would you MOST want to show a friend?",
    options: [
      { text: "A physics simulation with bouncing balls and gravity", scores: { realistic: 3, investigative: 2, artistic: 0, social: 0, enterprising: 0, conventional: 0 } },
      { text: "A colorful screensaver or generative art piece", scores: { realistic: 0, investigative: 0, artistic: 3, social: 0, enterprising: 0, conventional: 0 } },
      { text: "A multiplayer game I can play with them right now", scores: { realistic: 0, investigative: 0, artistic: 0, social: 3, enterprising: 1, conventional: 0 } },
      { text: "A working business simulator with real decisions", scores: { realistic: 0, investigative: 0, artistic: 0, social: 0, enterprising: 3, conventional: 1 } },
    ],
  },
  {
    id: 9,
    question: "When you doodle or sketch, what do you tend to draw?",
    options: [
      { text: "Geometric patterns, mandalas, or abstract shapes", scores: { realistic: 0, investigative: 1, artistic: 3, social: 0, enterprising: 0, conventional: 0 } },
      { text: "Charts, tables, or floor plans", scores: { realistic: 1, investigative: 0, artistic: 0, social: 0, enterprising: 0, conventional: 3 } },
      { text: "Logos, characters, or comic panels", scores: { realistic: 0, investigative: 0, artistic: 3, social: 1, enterprising: 0, conventional: 0 } },
      { text: "Diagrams of how to build something", scores: { realistic: 3, investigative: 1, artistic: 0, social: 0, enterprising: 0, conventional: 0 } },
    ],
  },

  // --- Social-focused (Questions 10-12) ---
  {
    id: 10,
    question: "At a group hackathon, what role do you naturally take?",
    options: [
      { text: "The coder who builds the core features", scores: { realistic: 3, investigative: 1, artistic: 0, social: 0, enterprising: 0, conventional: 0 } },
      { text: "The designer who makes it look and feel great", scores: { realistic: 0, investigative: 0, artistic: 3, social: 0, enterprising: 0, conventional: 0 } },
      { text: "The teammate who keeps everyone motivated and on track", scores: { realistic: 0, investigative: 0, artistic: 0, social: 3, enterprising: 1, conventional: 0 } },
      { text: "The pitcher who presents the idea to judges", scores: { realistic: 0, investigative: 0, artistic: 0, social: 1, enterprising: 3, conventional: 0 } },
    ],
  },
  {
    id: 11,
    question: "What motivates you most when working on a project?",
    options: [
      { text: "Seeing it work correctly and doing something useful", scores: { realistic: 3, investigative: 0, artistic: 0, social: 0, enterprising: 0, conventional: 1 } },
      { text: "Understanding how everything fits together under the hood", scores: { realistic: 0, investigative: 3, artistic: 0, social: 0, enterprising: 0, conventional: 0 } },
      { text: "Knowing other people will enjoy using it", scores: { realistic: 0, investigative: 0, artistic: 0, social: 3, enterprising: 1, conventional: 0 } },
      { text: "Making it look polished and visually impressive", scores: { realistic: 0, investigative: 0, artistic: 3, social: 1, enterprising: 0, conventional: 0 } },
    ],
  },
  {
    id: 12,
    question: "You just finished a coding assignment. What do you do next?",
    options: [
      { text: "Help a classmate who's stuck on theirs", scores: { realistic: 0, investigative: 0, artistic: 0, social: 3, enterprising: 0, conventional: 1 } },
      { text: "Refactor and clean up my code until it's perfect", scores: { realistic: 0, investigative: 1, artistic: 0, social: 0, enterprising: 0, conventional: 3 } },
      { text: "Add extra features or visual flair just for fun", scores: { realistic: 0, investigative: 0, artistic: 3, social: 0, enterprising: 1, conventional: 0 } },
      { text: "Start thinking about what project I could build with this concept", scores: { realistic: 2, investigative: 0, artistic: 0, social: 0, enterprising: 2, conventional: 0 } },
    ],
  },

  // --- Enterprising-focused (Questions 13-15) ---
  {
    id: 13,
    question: "If you started a club at school, what kind would it be?",
    options: [
      { text: "Robotics or maker club", scores: { realistic: 3, investigative: 1, artistic: 0, social: 0, enterprising: 0, conventional: 0 } },
      { text: "Debate or entrepreneurship club", scores: { realistic: 0, investigative: 0, artistic: 0, social: 1, enterprising: 3, conventional: 0 } },
      { text: "Art or film club", scores: { realistic: 0, investigative: 0, artistic: 3, social: 1, enterprising: 0, conventional: 0 } },
      { text: "Tutoring or community service club", scores: { realistic: 0, investigative: 0, artistic: 0, social: 3, enterprising: 0, conventional: 1 } },
    ],
  },
  {
    id: 14,
    question: "Which of these sounds like the most fun challenge?",
    options: [
      { text: "Competing in a coding competition against other teams", scores: { realistic: 0, investigative: 1, artistic: 0, social: 0, enterprising: 3, conventional: 0 } },
      { text: "Figuring out why a mysterious bug keeps crashing the program", scores: { realistic: 0, investigative: 3, artistic: 0, social: 0, enterprising: 0, conventional: 0 } },
      { text: "Creating an animation or visual effect that wows people", scores: { realistic: 0, investigative: 0, artistic: 3, social: 1, enterprising: 0, conventional: 0 } },
      { text: "Building a filing or tracking system that keeps everything tidy", scores: { realistic: 0, investigative: 0, artistic: 0, social: 0, enterprising: 0, conventional: 3 } },
    ],
  },
  {
    id: 15,
    question: "Your friend has an app idea. What excites you about it?",
    options: [
      { text: "Figuring out the technical challenges of making it work", scores: { realistic: 2, investigative: 2, artistic: 0, social: 0, enterprising: 0, conventional: 0 } },
      { text: "The chance to lead the project and make it a success", scores: { realistic: 0, investigative: 0, artistic: 0, social: 0, enterprising: 3, conventional: 0 } },
      { text: "Designing the look, feel, and user experience", scores: { realistic: 0, investigative: 0, artistic: 3, social: 0, enterprising: 0, conventional: 0 } },
      { text: "Teaching others how to use it and getting their feedback", scores: { realistic: 0, investigative: 0, artistic: 0, social: 3, enterprising: 0, conventional: 0 } },
    ],
  },

  // --- Conventional-focused (Questions 16-18) ---
  {
    id: 16,
    question: "How do you keep track of your assignments and deadlines?",
    options: [
      { text: "Color-coded planner, spreadsheet, or to-do app", scores: { realistic: 0, investigative: 0, artistic: 0, social: 0, enterprising: 0, conventional: 3 } },
      { text: "I just remember — deadlines motivate me at the last minute", scores: { realistic: 0, investigative: 0, artistic: 0, social: 0, enterprising: 2, conventional: 0 } },
      { text: "Sticky notes and visual reminders on my desk or wall", scores: { realistic: 0, investigative: 0, artistic: 2, social: 0, enterprising: 0, conventional: 1 } },
      { text: "I ask friends and classmates to remind me", scores: { realistic: 0, investigative: 0, artistic: 0, social: 3, enterprising: 0, conventional: 0 } },
    ],
  },
  {
    id: 17,
    question: "Which of these desktop apps would you most enjoy building?",
    options: [
      { text: "A calculator with a clean, precise interface", scores: { realistic: 1, investigative: 1, artistic: 0, social: 0, enterprising: 0, conventional: 3 } },
      { text: "A drawing app where you paint with your mouse", scores: { realistic: 0, investigative: 0, artistic: 3, social: 0, enterprising: 0, conventional: 0 } },
      { text: "A party game you can play with friends on one keyboard", scores: { realistic: 0, investigative: 0, artistic: 0, social: 3, enterprising: 1, conventional: 0 } },
      { text: "A dashboard that tracks stats and shows charts", scores: { realistic: 0, investigative: 2, artistic: 0, social: 0, enterprising: 1, conventional: 3 } },
    ],
  },
  {
    id: 18,
    question: "When you look at someone else's code, what do you notice first?",
    options: [
      { text: "Whether the variable names make sense and it's well-organized", scores: { realistic: 0, investigative: 0, artistic: 0, social: 0, enterprising: 0, conventional: 3 } },
      { text: "Whether the logic is clever or uses an interesting approach", scores: { realistic: 0, investigative: 3, artistic: 0, social: 0, enterprising: 0, conventional: 0 } },
      { text: "Whether the output looks cool or does something creative", scores: { realistic: 0, investigative: 0, artistic: 3, social: 0, enterprising: 0, conventional: 0 } },
      { text: "Whether it actually works and does what it's supposed to", scores: { realistic: 3, investigative: 0, artistic: 0, social: 0, enterprising: 0, conventional: 0 } },
    ],
  },
];

export default quizQuestions;
