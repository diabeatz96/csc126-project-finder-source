const projectRecommendations = {
  realistic: {
    title: "The Builder",
    emoji: "🔧",
    tagline: "You like making things that work. Let's build something real.",
    color: "#e74c3c",
    description:
      "You're hands-on, practical, and enjoy seeing tangible results from your work. You'd rather tinker with something than read about it. Physics simulations and interactive tools are your sweet spot because they let you model the real world with code.",
    projects: [
      {
        name: "Bouncing Ball Physics Simulator",
        difficulty: "Beginner",
        description:
          "Create a window with a ball that bounces off the walls. Use arithmetic to update the ball's position each frame and if statements to detect when it hits an edge and reverse direction. Add gravity as a bonus.",
        concepts: ["Variables for position and speed", "Arithmetic to update position each frame", "If statements for wall collision", "While loop for the game loop"],
        raylibFunctions: ["InitWindow", "CloseWindow", "WindowShouldClose", "BeginDrawing", "EndDrawing", "ClearBackground", "DrawCircle", "SetTargetFPS", "GetFrameTime"],
        starterHint:
          "Start with two variables: ballX and ballY for position, and speedX and speedY for movement. Each frame, add speed to position. When ballX hits the edge, multiply speedX by -1.",
        steps: [
          "Set up a raylib window (800x450) and the game loop",
          "Create variables for ball position (x, y) and speed (dx, dy)",
          "Each frame, update position: x = x + dx, y = y + dy",
          "Add if statements: if ball hits left/right wall, flip dx. Same for top/bottom with dy",
          "Draw the ball at its current position using DrawCircle",
          "Bonus: Add gravity by increasing dy a tiny amount each frame",
          "Bonus: Add multiple balls with different colors",
        ],
      },
      {
        name: "Click Target Practice",
        difficulty: "Beginner",
        description:
          "A target appears at a random spot on screen. The player clicks on it to score a point, and it moves somewhere new. Track the score and display it. Uses mouse input, collision detection, and arithmetic for scoring.",
        concepts: ["Mouse input detection", "Random number generation", "Score tracking with variables", "Collision detection (point vs circle)"],
        raylibFunctions: ["InitWindow", "DrawCircle", "DrawText", "TextFormat", "GetMouseX", "GetMouseY", "IsMouseButtonPressed", "GetRandomValue", "CheckCollisionPointCircle"],
        starterHint:
          "Use GetRandomValue to place a circle somewhere on screen. Each frame, check if the mouse was clicked and if the click position is inside the circle.",
        steps: [
          "Set up the window and create variables for target position and score",
          "Use GetRandomValue to pick a random x and y for the target",
          "Draw a colored circle at the target position",
          "Use IsMouseButtonPressed to check for clicks",
          "Use CheckCollisionPointCircle to see if the click hit the target",
          "If hit: increase score, move target to a new random position",
          "Display the score using DrawText and TextFormat",
        ],
      },
      {
        name: "Paddle and Ball (Mini Pong)",
        difficulty: "Intermediate",
        description:
          "A ball bounces around the screen while the player controls a paddle at the bottom using arrow keys. If the ball hits the paddle, it bounces back up. If it falls off the bottom, game over.",
        concepts: ["Keyboard input for movement", "Multiple collision checks", "Game state (playing vs game over)", "Rectangle vs circle collision"],
        raylibFunctions: ["IsKeyDown", "DrawRectangle", "DrawCircle", "DrawText", "CheckCollisionCircleRec", "GetScreenWidth", "GetScreenHeight"],
        starterHint:
          "The paddle is a rectangle controlled by KEY_LEFT and KEY_RIGHT. The ball logic is similar to the bouncing ball project, but now you also check collision against the paddle rectangle.",
        steps: [
          "Start with the bouncing ball code from the first project",
          "Add a rectangle (paddle) at the bottom of the screen",
          "Use IsKeyDown(KEY_LEFT) and IsKeyDown(KEY_RIGHT) to move the paddle",
          "Add collision between ball and paddle using CheckCollisionCircleRec",
          "If ball falls below the screen, set a gameOver variable to true",
          "When gameOver is true, show 'Game Over' text instead of the game",
          "Bonus: Track and display the score (how many paddle hits)",
        ],
      },
    ],
  },
  investigative: {
    title: "The Analyst",
    emoji: "🔬",
    tagline: "You love understanding how things work. Let's visualize it.",
    color: "#3498db",
    description:
      "You're analytical, curious, and enjoy solving problems methodically. You're the person who asks 'but why?' and actually wants to know the answer. Visualization projects let you see abstract concepts come alive, which is exactly how your brain prefers to work.",
    projects: [
      {
        name: "Number Sorting Visualizer",
        difficulty: "Beginner",
        description:
          "Display an array of numbers as bars of different heights. Implement a simple sorting algorithm (like bubble sort) and animate each swap so you can SEE how sorting works. Great for understanding both algorithms and visual feedback.",
        concepts: ["Arrays (even a simple set of variables works)", "Comparison with if statements", "Swapping values using a temp variable", "Visual representation of data"],
        raylibFunctions: ["InitWindow", "DrawRectangle", "DrawText", "ClearBackground", "IsKeyPressed", "GetScreenWidth"],
        starterHint:
          "Create 10 integer variables (or an array if you've learned them) representing bar heights. Each frame, do one comparison/swap step of bubble sort. Draw each value as a rectangle whose height matches the value.",
        steps: [
          "Set up the window and create variables for 8-10 bar heights",
          "Draw each bar as a rectangle, spaced evenly across the screen",
          "Color the two bars currently being compared differently",
          "On each key press (or timer), do one bubble sort comparison",
          "If the left bar is taller than the right, swap their values",
          "Show which bars just swapped by highlighting them green",
          "When fully sorted, display 'Sorted!' on screen",
        ],
      },
      {
        name: "Math Function Plotter",
        difficulty: "Beginner",
        description:
          "Draw X and Y axes on screen, then plot a mathematical function like y = x*x or y = sin(x) by drawing a dot at each point. Let the user switch between different functions with number keys.",
        concepts: ["Coordinate systems and mapping math to pixels", "Arithmetic expressions", "If statements for function selection", "Drawing lines point-by-point"],
        raylibFunctions: ["InitWindow", "DrawPixel", "DrawLine", "DrawText", "IsKeyPressed", "GetScreenWidth", "GetScreenHeight"],
        starterHint:
          "The tricky part is converting math coordinates to screen coordinates. The center of your window is (400, 225). For each x pixel, calculate y using your math function, then draw a pixel there.",
        steps: [
          "Set up the window and draw X and Y axis lines through the center",
          "Create a variable to track which function is selected (1, 2, or 3)",
          "Loop through each x pixel on screen and calculate the math y value",
          "Convert the math y to a screen y (remember: screen y goes DOWN)",
          "Draw a pixel or small circle at each calculated point",
          "Use IsKeyPressed to let users switch functions with 1, 2, 3 keys",
          "Display the current function name on screen",
        ],
      },
      {
        name: "Binary Counter Display",
        difficulty: "Beginner",
        description:
          "A visual binary counter that shows both the decimal number and its binary representation using filled/empty circles (bits). Press up/down to count. Teaches binary while using basic C++ concepts.",
        concepts: ["Integer division and modulo for binary conversion", "If statements for bit display", "Keyboard input", "Number systems"],
        raylibFunctions: ["InitWindow", "DrawCircle", "DrawCircleLines", "DrawText", "TextFormat", "IsKeyPressed"],
        starterHint:
          "To get each bit of a number: use modulo 2 to get the last bit, then divide by 2 to shift right. Repeat for 8 bits. Draw a filled circle for 1 and an empty circle for 0.",
        steps: [
          "Set up the window with a counter variable starting at 0",
          "Use IsKeyPressed(KEY_UP) and KEY_DOWN to increment/decrement",
          "Display the decimal value using DrawText and TextFormat",
          "For each of 8 bits: calculate if that bit is 1 or 0",
          "Draw a filled circle for 1, an outline circle for 0",
          "Label each bit position (128, 64, 32, 16, 8, 4, 2, 1)",
          "Bonus: Add color coding and animate bit changes",
        ],
      },
    ],
  },
  artistic: {
    title: "The Creator",
    emoji: "🎨",
    tagline: "You think visually and love making beautiful things. Let's create art with code.",
    color: "#9b59b6",
    description:
      "You're creative, expressive, and drawn to aesthetics. You notice color, pattern, and design in everyday life. Generative art projects are perfect for you because the code itself becomes a creative medium where math and beauty intersect.",
    projects: [
      {
        name: "Interactive Color Mixer",
        difficulty: "Beginner",
        description:
          "Three sliders (red, green, blue) that the player adjusts with keyboard keys. The screen fills with the mixed color and displays the RGB values. A hands-on way to understand how digital color works.",
        concepts: ["Variables for each color channel (0-255)", "Arithmetic to increase/decrease values", "If statements to clamp values in range", "Real-time visual feedback"],
        raylibFunctions: ["InitWindow", "DrawRectangle", "DrawText", "TextFormat", "IsKeyDown", "ClearBackground", "Fade"],
        starterHint:
          "Create three int variables: red, green, blue (all start at 128). Use Q/W for red, A/S for green, Z/X for blue. Clamp each between 0-255 with if statements. Use the Color struct: (Color){red, green, blue, 255}.",
        steps: [
          "Set up the window and create variables: red=128, green=128, blue=128",
          "Use IsKeyDown to adjust each channel (Q/W for red up/down, etc.)",
          "Add if statements to keep values between 0 and 255",
          "Clear the background with your custom color each frame",
          "Draw a preview rectangle with the mixed color",
          "Display the RGB values as text using TextFormat",
          "Bonus: Add a palette that saves your favorite colors",
        ],
      },
      {
        name: "Geometric Pattern Generator",
        difficulty: "Beginner",
        description:
          "Draw repeating geometric patterns using circles, rectangles, and lines in a grid. Each key press changes the pattern style, colors, or spacing. Simple math creates surprisingly beautiful results.",
        concepts: ["Nested counting for grid positions", "Arithmetic for spacing and sizing", "If statements for pattern variation", "Color manipulation"],
        raylibFunctions: ["InitWindow", "DrawCircle", "DrawRectangle", "DrawLine", "DrawPoly", "IsKeyPressed", "GetRandomValue"],
        starterHint:
          "Use two counters (row and column) to draw shapes in a grid. For each position, calculate the x and y from the row/column number times the spacing. Change what you draw based on a pattern variable.",
        steps: [
          "Set up the window and define grid spacing (e.g., 50 pixels)",
          "Use nested counting to visit each grid position",
          "At each position, draw a shape (circle, square, or triangle)",
          "Use a variable to track the current pattern style",
          "Press 1-5 to switch between different pattern styles",
          "Add color variation based on position (e.g., hue shifts across rows)",
          "Bonus: Make the pattern animate slowly over time",
        ],
      },
      {
        name: "Digital Etch-a-Sketch",
        difficulty: "Beginner",
        description:
          "Use arrow keys to move a cursor around the screen, leaving a colored trail behind it. Press C to clear, press number keys to change the drawing color. Simple but surprisingly fun and creative.",
        concepts: ["Position tracking with variables", "Keyboard input for movement", "If statements for color selection", "Drawing persistent trails"],
        raylibFunctions: ["InitWindow", "DrawCircle", "DrawLine", "IsKeyDown", "IsKeyPressed", "ClearBackground", "BeginDrawing", "EndDrawing"],
        starterHint:
          "The trick is to NOT clear the background each frame (or clear it only when the user presses C). Move a cursor with arrow keys and draw a small circle at its position each frame, building up a drawing over time.",
        steps: [
          "Set up the window and create cursorX, cursorY variables (center of screen)",
          "Use IsKeyDown with arrow keys to move the cursor",
          "Draw a small filled circle at the cursor position each frame",
          "Do NOT call ClearBackground every frame (so the trail persists)",
          "Use IsKeyPressed to change the drawing color with number keys",
          "Add IsKeyPressed(KEY_C) to clear the screen",
          "Bonus: Change brush size with +/- keys",
        ],
      },
    ],
  },
  social: {
    title: "The Connector",
    emoji: "🤝",
    tagline: "You care about people. Let's build something others can enjoy.",
    color: "#2ecc71",
    description:
      "You're people-oriented, empathetic, and enjoy creating things that others will use and appreciate. Interactive apps and games where people can participate are your thing. You want your code to make someone smile or help them learn.",
    projects: [
      {
        name: "Trivia Quiz Game",
        difficulty: "Beginner",
        description:
          "A multiple-choice trivia game with questions displayed on screen. The player selects answers using number keys. Track the score and show results at the end. Easy to customize with any topic your friends would enjoy.",
        concepts: ["Variables for question number and score", "If statements for answer checking", "Game states (question, correct, wrong, results)", "Text display and formatting"],
        raylibFunctions: ["InitWindow", "DrawText", "DrawRectangle", "TextFormat", "IsKeyPressed", "ClearBackground", "DrawRectangleRounded"],
        starterHint:
          "Use a variable to track which question you're on (0, 1, 2...). For each question, display the question text and four options. When a key is pressed, check if it matches the correct answer.",
        steps: [
          "Set up the window and define your questions, options, and correct answers",
          "Create variables: currentQuestion, score, totalQuestions",
          "Display the current question text and four numbered options",
          "Use IsKeyPressed(KEY_ONE) through KEY_FOUR to get the player's choice",
          "If correct, increase score and show 'Correct!' briefly",
          "If wrong, show the right answer briefly",
          "After all questions, display the final score as a results screen",
        ],
      },
      {
        name: "Reaction Time Tester",
        difficulty: "Beginner",
        description:
          "The screen starts red, then turns green at a random time. The player clicks as fast as they can and sees their reaction time in milliseconds. Perfect for friendly competition.",
        concepts: ["Timer tracking with GetTime()", "Random delay generation", "State management (waiting, ready, clicked)", "Displaying calculated results"],
        raylibFunctions: ["InitWindow", "ClearBackground", "DrawText", "TextFormat", "GetTime", "IsMouseButtonPressed", "GetRandomValue", "IsKeyPressed"],
        starterHint:
          "Use GetTime() to track elapsed time. Pick a random delay (2-5 seconds). When that time passes, change the screen to green. When the player clicks, calculate the difference between green-time and click-time.",
        steps: [
          "Set up the window with a state variable (waiting, ready, results)",
          "In the waiting state, show a red screen with 'Wait for green...'",
          "Use GetTime() and a random delay to decide when to switch to green",
          "When green appears, record the exact time with GetTime()",
          "When the player clicks, calculate reaction time (click time minus green time)",
          "Display the reaction time in milliseconds",
          "Press SPACE to try again, track best score across attempts",
        ],
      },
      {
        name: "Mood Tracker / Daily Check-in",
        difficulty: "Intermediate",
        description:
          "A visual mood tracker where the user selects how they're feeling using number keys. Each mood maps to a color and emoji. Over time, build a row of colored blocks showing the mood history.",
        concepts: ["State tracking with variables", "If statements for mood selection", "Color arrays and mapping", "Simple data visualization"],
        raylibFunctions: ["InitWindow", "DrawRectangle", "DrawRectangleRounded", "DrawText", "IsKeyPressed", "DrawCircle"],
        starterHint:
          "Create an array (or a set of variables) to store mood history. Each entry is a number 1-5. Draw each mood as a colored rectangle in a row, building a visual history strip.",
        steps: [
          "Set up the window and define 5 moods with colors and labels",
          "Display the mood options: 1=Great, 2=Good, 3=Okay, 4=Meh, 5=Rough",
          "When a key is pressed, record that mood and its color",
          "Draw the mood history as a row of colored blocks at the bottom",
          "Show the currently selected mood as a large colored circle",
          "Add labels and make it look inviting",
          "Bonus: Calculate and display the average mood",
        ],
      },
    ],
  },
  humanist: {
    title: "The Storyteller",
    emoji: "📚",
    tagline: "You love stories, history, and the power of words. Let's bring narratives to life with code.",
    color: "#8b4513",
    description:
      "You're drawn to history, literature, and the art of storytelling. You appreciate how narratives shape our understanding of the world. These projects let you combine your love of words and stories with the creative possibilities of programming.",
    projects: [
      {
        name: "Interactive Timeline Explorer",
        difficulty: "Beginner",
        description:
          "Create a visual timeline that displays historical events. Use arrow keys to scroll through time periods, with each era showing its key events, dates, and descriptions. Perfect for history buffs who want to make learning interactive.",
        concepts: ["Variables for current position/era", "If statements for navigation", "Text display and formatting", "State management for different views"],
        raylibFunctions: ["InitWindow", "DrawText", "DrawRectangle", "DrawLine", "IsKeyPressed", "TextFormat", "ClearBackground"],
        starterHint:
          "Create variables for different eras (e.g., era1Title, era1Year, era1Description). Use a currentEra variable and arrow keys to navigate. Draw a timeline line with markers for each era.",
        steps: [
          "Set up the window and define 5-6 historical events with titles, years, and descriptions",
          "Create a currentEvent variable starting at 0",
          "Draw a horizontal timeline with circular markers for each event",
          "Highlight the current event's marker with a different color",
          "Display the current event's title, year, and description text",
          "Use LEFT/RIGHT arrow keys to move between events",
          "Add smooth visual feedback when changing events",
        ],
      },
      {
        name: "Text Adventure Game",
        difficulty: "Beginner",
        description:
          "A choose-your-own-adventure story where the player reads narrative text and makes choices using number keys. Each choice leads to different story branches. Great for writers who want to create interactive fiction.",
        concepts: ["Variables for story state/location", "If statements for branching narratives", "Text display across multiple lines", "Game state management"],
        raylibFunctions: ["InitWindow", "DrawText", "DrawRectangle", "IsKeyPressed", "ClearBackground", "TextFormat"],
        starterHint:
          "Use a 'scene' variable to track where in the story the player is. Each scene shows different text and options. When the player presses 1, 2, or 3, change the scene variable to the next part of the story.",
        steps: [
          "Set up the window and plan your story with 6-8 scenes",
          "Create a currentScene variable starting at 0 (the intro)",
          "For each scene, define: narrative text and 2-3 choices",
          "Display the current scene's story text (use multiple DrawText calls)",
          "Show numbered choices at the bottom of the screen",
          "Use IsKeyPressed to detect which choice the player makes",
          "Update currentScene based on the choice to branch the story",
          "Add an ending scene that congratulates the player",
        ],
      },
      {
        name: "Typewriter Text Effect",
        difficulty: "Beginner",
        description:
          "Display text one character at a time with a classic typewriter effect, complete with a blinking cursor. Add quotes, poems, or historical speeches that reveal themselves dramatically. A simple but satisfying project for lovers of words.",
        concepts: ["Timer tracking with GetTime()", "Character counting variables", "If statements for animation timing", "Text substring display"],
        raylibFunctions: ["InitWindow", "DrawText", "DrawRectangle", "GetTime", "IsKeyPressed", "ClearBackground"],
        starterHint:
          "Store your full text in a variable. Use a charactersShown variable that increases over time. Draw only the first 'charactersShown' characters of your text. Increment it every 0.05 seconds using GetTime().",
        steps: [
          "Set up the window and store a quote or passage as text",
          "Create variables: charactersShown (starts at 0) and lastUpdateTime",
          "Each frame, check if enough time has passed (0.05 seconds)",
          "If so, increment charactersShown and update lastUpdateTime",
          "Draw only the first charactersShown characters of your text",
          "Draw a blinking cursor after the last visible character",
          "Press SPACE to restart with a different quote",
          "Bonus: Add typing sound effects or multiple passages",
        ],
      },
      {
        name: "Poetry Generator",
        difficulty: "Intermediate",
        description:
          "Generate simple poems or haikus by randomly combining words from themed lists (nature words, emotions, actions). Each key press creates a new unique poem. A creative blend of randomness and language.",
        concepts: ["Random selection from word lists", "String formatting and display", "If statements for structure rules", "Variables for word storage"],
        raylibFunctions: ["InitWindow", "DrawText", "GetRandomValue", "IsKeyPressed", "ClearBackground", "TextFormat"],
        starterHint:
          "Create lists of words by category: nouns (moon, river, flower), verbs (dances, whispers, falls), adjectives (silent, golden, ancient). Use GetRandomValue to pick one from each list and combine them into lines.",
        steps: [
          "Set up the window and create word lists for different categories",
          "Define your poem structure (e.g., 3 lines, specific word order)",
          "Use GetRandomValue to pick random words from each category",
          "Combine words into lines following your poem structure",
          "Display the generated poem with nice formatting and spacing",
          "Press SPACE to generate a completely new poem",
          "Add a title or frame around the poem for visual appeal",
          "Bonus: Create haikus by counting syllables",
        ],
      },
      {
        name: "Historical Quote Flashcards",
        difficulty: "Beginner",
        description:
          "A flashcard app that displays famous historical quotes. Press SPACE to reveal who said it and when. Press arrow keys to navigate between quotes. Great for studying or sharing wisdom from history.",
        concepts: ["Variables for quote data", "State management (hidden vs revealed)", "Keyboard navigation", "Text formatting and layout"],
        raylibFunctions: ["InitWindow", "DrawText", "DrawRectangle", "DrawRectangleRounded", "IsKeyPressed", "ClearBackground"],
        starterHint:
          "Store quotes as pairs: the quote text and the attribution (who said it + when). Use a 'revealed' variable to track if the answer is showing. Toggle it with SPACE.",
        steps: [
          "Set up the window and define 8-10 historical quotes with attributions",
          "Create variables: currentQuote (0) and isRevealed (false)",
          "Draw a card-like rectangle in the center of the screen",
          "Display the current quote text on the card",
          "If isRevealed is false, show 'Press SPACE to reveal'",
          "If isRevealed is true, show who said it and when",
          "Use LEFT/RIGHT to change quotes, SPACE to toggle reveal",
          "Reset isRevealed to false when changing quotes",
        ],
      },
    ],
  },
};

export default projectRecommendations;
