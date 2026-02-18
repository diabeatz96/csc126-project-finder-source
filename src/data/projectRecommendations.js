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
      {
        name: "Tic Tac Toe",
        difficulty: "Beginner",
        description:
          "Build a classic two-player Tic Tac Toe game. Draw the 3x3 grid, let players click to place X or O, detect wins and draws, and display the result. A great intro to grid-based game logic.",
        concepts: ["2D grid logic with variables or arrays", "Mouse click detection on grid cells", "Win condition checking with if statements", "Turn-based game state"],
        raylibFunctions: ["InitWindow", "DrawLine", "DrawText", "DrawCircleLines", "IsMouseButtonPressed", "GetMouseX", "GetMouseY", "ClearBackground"],
        starterHint:
          "Use 9 variables (or a 3x3 array) to store the board state (0=empty, 1=X, 2=O). Divide the screen into a 3x3 grid. When the mouse is clicked, figure out which cell was clicked by dividing mouse position by cell size.",
        steps: [
          "Set up the window and create 9 variables for the 3x3 board (all start at 0)",
          "Draw the grid lines: two vertical and two horizontal lines",
          "Track whose turn it is with a currentPlayer variable (1 or 2)",
          "On mouse click, calculate which cell was clicked (mouseX / cellWidth, mouseY / cellHeight)",
          "If the cell is empty, place the current player's mark and switch turns",
          "Draw X's and O's in the appropriate cells",
          "Check all 8 win conditions (3 rows, 3 columns, 2 diagonals) after each move",
          "Display the winner or 'Draw!' when the game ends, press R to restart",
        ],
      },
      {
        name: "Hangman",
        difficulty: "Intermediate",
        description:
          "The classic word-guessing game. A random word is chosen, and the player guesses letters using the keyboard. Correct letters are revealed, wrong guesses draw parts of the hangman. Great for practicing string/character logic.",
        concepts: ["Character input and comparison", "Tracking guessed letters", "Drawing based on game state", "Win/lose condition checking"],
        raylibFunctions: ["InitWindow", "DrawText", "DrawLine", "DrawCircle", "DrawCircleLines", "GetKeyPressed", "IsKeyPressed", "ClearBackground"],
        starterHint:
          "Store the secret word as a string. Use a second string or set of variables to track which letters have been guessed. Each frame, display the word with underscores for unguessed letters and the actual letter for guessed ones.",
        steps: [
          "Set up the window and define a list of possible words",
          "Pick a random word using GetRandomValue for the index",
          "Create variables to track guessed letters and wrong guess count",
          "Display the word with blanks for unguessed letters (e.g., _ a _ _ )",
          "Use GetKeyPressed to detect letter input from the keyboard",
          "If the letter is in the word, reveal it. If not, increment wrong guesses",
          "Draw the hangman figure piece by piece based on wrong guess count (head, body, arms, legs)",
          "Show 'You Win!' or 'Game Over' when the game ends",
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
      {
        name: "Bank Account Simulator",
        difficulty: "Beginner",
        description:
          "Simulate a simple bank account with deposits, withdrawals, and a running balance. Display transactions on screen and show a visual balance bar. Great for understanding how real-world data flows through a program.",
        concepts: ["Variables for balance and transaction amounts", "If statements for validation (no negative balance)", "Arithmetic for deposits and withdrawals", "Transaction history tracking"],
        raylibFunctions: ["InitWindow", "DrawText", "DrawRectangle", "TextFormat", "IsKeyPressed", "DrawRectangleRounded", "ClearBackground"],
        starterHint:
          "Start with a balance variable. Use number keys to select preset amounts (1=$10, 2=$50, 3=$100). Use D for deposit and W for withdraw. Keep a running list of the last 5 transactions to display on screen.",
        steps: [
          "Set up the window and create a balance variable starting at 100.00",
          "Display the current balance prominently at the top",
          "Draw a visual 'balance bar' that fills based on the balance amount",
          "Use number keys (1-3) to select an amount ($10, $50, $100)",
          "Press D to deposit the selected amount, W to withdraw",
          "Add an if statement to prevent withdrawals that would go negative",
          "Track and display the last 5 transactions as a list",
          "Show a 'Transaction denied!' message when balance is insufficient",
        ],
      },
      {
        name: "Prime Number Sieve Visualizer",
        difficulty: "Intermediate",
        description:
          "Visualize the Sieve of Eratosthenes, one of the oldest known algorithms. Display numbers 1-100 in a grid, then animate the sieve crossing out non-primes step by step. Watch math in action.",
        concepts: ["Nested loops and grid layout", "Boolean tracking for prime/not-prime", "Modulo operator for divisibility", "Step-by-step algorithm animation"],
        raylibFunctions: ["InitWindow", "DrawRectangle", "DrawText", "TextFormat", "IsKeyPressed", "GetTime", "ClearBackground"],
        starterHint:
          "Create 100 variables (or an array) where each is true (prime) or false (not prime). Start with 2: mark all multiples of 2 as not-prime, then move to 3, and so on. Animate by doing one step per key press.",
        steps: [
          "Set up the window and create a grid of 100 cells (10x10)",
          "Mark all numbers as potentially prime (except 1)",
          "Draw each number in a colored box: green for prime, gray for crossed out",
          "Start with currentFactor = 2",
          "On key press, cross out all multiples of currentFactor",
          "Highlight the multiples being crossed out in red as they're eliminated",
          "Move to the next un-crossed number and repeat",
          "When done, display how many primes were found",
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
        name: "Music Visualizer",
        difficulty: "Intermediate",
        description:
          "Load a music file and create a visual display that reacts to the audio. Draw bars, circles, or waves that pulse and change color with the beat. Combines audio programming with creative graphics.",
        concepts: ["Audio loading and playback", "Drawing shapes based on audio data", "Color cycling and animation", "Time-based visual effects"],
        raylibFunctions: ["InitWindow", "DrawRectangle", "DrawCircle", "DrawLine", "ClearBackground", "GetTime", "IsKeyPressed", "SetTargetFPS"],
        starterHint:
          "Start by using GetTime() to drive visual animations — create bars or circles that pulse rhythmically. Use sine waves (sin function) with different frequencies to simulate audio-reactive visuals. Add color cycling based on time.",
        steps: [
          "Set up the window and initialize variables for bar heights and colors",
          "Create a row of vertical bars across the screen (15-20 bars)",
          "Use sin(GetTime() + offset) to make each bar pulse at a different phase",
          "Scale the bar heights so they create a wave-like pattern",
          "Add color that shifts based on bar height (use ColorFromHSV)",
          "Use DrawCircle at the center with a radius that pulses with the beat",
          "Press 1-3 to switch between visualizer styles (bars, circles, waves)",
          "Bonus: Add a mirror effect or particle trail for extra flair",
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
      {
        name: "Two-Player Snake",
        difficulty: "Intermediate",
        description:
          "A two-player snake game on one keyboard! Player 1 uses WASD, Player 2 uses arrow keys. Both snakes grow when eating food and the game ends when someone crashes. Perfect for couch co-op fun.",
        concepts: ["Keyboard input for two players", "Grid-based movement and position tracking", "Collision detection (walls, self, other snake)", "Growing data structures"],
        raylibFunctions: ["InitWindow", "DrawRectangle", "DrawText", "TextFormat", "IsKeyPressed", "GetTime", "ClearBackground", "GetRandomValue"],
        starterHint:
          "Each snake is a list of (x, y) positions. Each frame, add a new head in the movement direction. If the snake didn't eat food, remove the tail. Use WASD for player 1's direction and arrow keys for player 2.",
        steps: [
          "Set up the window with a grid system (e.g., 20x20 cells)",
          "Create two snakes, each starting at a different position",
          "Use WASD for player 1 and arrow keys for player 2 to set direction",
          "Each tick, move each snake by adding a new head segment in its direction",
          "Place food at a random empty cell, draw it as a special colored square",
          "When a snake's head hits food, grow it (don't remove the tail that turn)",
          "Check collisions: wall, self, and other snake — end game on collision",
          "Display winner and scores, press R to restart",
        ],
      },
      {
        name: "Chat Bubble Simulator",
        difficulty: "Beginner",
        description:
          "Create a messaging-style interface where the user types messages using the keyboard and they appear as chat bubbles on screen. Alternate between two 'users' with different colored bubbles. A fun, social-themed UI project.",
        concepts: ["Character input handling", "String building from keyboard", "Drawing styled rectangles for bubbles", "Scrolling message history"],
        raylibFunctions: ["InitWindow", "DrawRectangleRounded", "DrawText", "IsKeyPressed", "GetKeyPressed", "MeasureText", "ClearBackground"],
        starterHint:
          "Use GetKeyPressed() in a loop to build up a string character by character. When ENTER is pressed, add the completed message to a list and start a new one. Draw each message as a rounded rectangle with text inside.",
        steps: [
          "Set up the window and create variables for the current message and message list",
          "Use GetKeyPressed to capture typed characters and build the current message",
          "When ENTER is pressed, save the message and toggle to the other 'user'",
          "Draw each saved message as a rounded rectangle (chat bubble)",
          "User 1 bubbles on the left (blue), User 2 on the right (green)",
          "Use MeasureText to size each bubble to fit its text content",
          "Scroll older messages up as new ones are added",
          "Press ESC to clear the conversation and start over",
        ],
      },
    ],
  },
  enterprising: {
    title: "The Leader",
    emoji: "🚀",
    tagline: "You like taking charge and making things happen. Let's build something competitive.",
    color: "#e67e22",
    description:
      "You're ambitious, persuasive, and enjoy competition. You like projects where there's a goal to win, resources to manage, or decisions that matter. Games with strategy and business simulations are right up your alley.",
    projects: [
      {
        name: "Lemonade Stand Simulator",
        difficulty: "Beginner",
        description:
          "Run your own lemonade stand! Each day, decide how many cups to make and what price to charge. The weather changes randomly and affects how many customers show up. Track your profits and try to earn the most money in 10 days.",
        concepts: ["Variables for money, inventory, and pricing", "Random number generation for weather", "If statements for business logic", "Profit/loss calculation"],
        raylibFunctions: ["InitWindow", "DrawText", "DrawRectangle", "TextFormat", "IsKeyPressed", "GetRandomValue", "ClearBackground", "DrawRectangleRounded"],
        starterHint:
          "Each 'day' is a game round. The player sets cups to make and price per cup using number keys. Random weather (sunny/cloudy/rainy) determines demand. Profit = (cups sold * price) - (cups made * cost). Display a daily summary.",
        steps: [
          "Set up the window and create variables: money (starts at $20), day (1-10), cupsToMake, pricePerCup",
          "Display the current day, money, and weather forecast",
          "Let the player use UP/DOWN to set cups to make and LEFT/RIGHT for price",
          "Press ENTER to start the day — generate random weather",
          "Calculate demand based on weather and price (sunny = high, rainy = low, high price = fewer buyers)",
          "Calculate profit/loss and update the money total",
          "Display a day summary showing cups sold, revenue, and costs",
          "After day 10, show the final score and a rating (Bankrupt / OK / Tycoon!)",
        ],
      },
      {
        name: "Clicker Tycoon",
        difficulty: "Beginner",
        description:
          "An idle/clicker game where clicking earns coins. Spend coins on upgrades that earn more per click or generate coins automatically. Watch your empire grow! Great for understanding exponential growth and game balance.",
        concepts: ["Click tracking and accumulation", "Upgrade cost scaling", "Auto-generation with timers", "Displaying large numbers"],
        raylibFunctions: ["InitWindow", "DrawText", "DrawRectangle", "TextFormat", "IsMouseButtonPressed", "GetTime", "DrawCircle", "ClearBackground"],
        starterHint:
          "Start with a coins variable. Each click adds 1 coin. Create upgrade buttons: one doubles click value (costs 10 coins), another adds auto-generation (costs 50 coins). Upgrades get more expensive each time.",
        steps: [
          "Set up the window and create variables: coins, coinsPerClick (1), autoCoinsPerSec (0)",
          "Draw a big clickable button in the center of the screen",
          "When the player clicks it, add coinsPerClick to coins",
          "Display the coin total prominently with a large font",
          "Add upgrade buttons on the side: 'Better Click ($10)' and 'Auto Earner ($50)'",
          "When upgrades are purchased, deduct coins and increase the relevant stat",
          "Make upgrade costs increase each purchase (cost = baseCost * 2^timesBought)",
          "Use GetTime() for auto-generation: add autoCoinsPerSec every second",
        ],
      },
      {
        name: "Stock Ticker Display",
        difficulty: "Intermediate",
        description:
          "Simulate a stock market with 3-4 stocks whose prices change randomly each round. The player buys and sells to make a profit. Displays a scrolling price history graph for each stock. Learn about risk, reward, and data visualization.",
        concepts: ["Random price fluctuation", "Buy/sell logic with if statements", "Tracking price history for graphing", "Portfolio value calculation"],
        raylibFunctions: ["InitWindow", "DrawText", "DrawLine", "DrawRectangle", "TextFormat", "IsKeyPressed", "GetRandomValue", "ClearBackground"],
        starterHint:
          "Each stock has a price and a history of past prices. Each round, add a random change (-5 to +5) to each price. Draw the price history as a line graph. Let the player press 1-4 to select a stock and B/S to buy/sell.",
        steps: [
          "Set up the window and define 3-4 stocks with names and starting prices ($50-$150)",
          "Create variables for the player's cash ($1000) and shares owned per stock",
          "Each round (press SPACE), change each stock price by a random amount",
          "Store the last 20 prices for each stock in an array for graphing",
          "Draw a line graph of each stock's price history using DrawLine",
          "Use number keys to select a stock, B to buy one share, S to sell",
          "Display portfolio value (cash + shares * current prices)",
          "Color stocks green if up from start, red if down",
        ],
      },
      {
        name: "Tournament Bracket Maker",
        difficulty: "Intermediate",
        description:
          "Create a tournament bracket for 8 or 16 teams. The player enters team names, then the bracket simulates or lets you pick winners for each matchup. Visual bracket lines connect the rounds. Great for sports fans.",
        concepts: ["Array/list management for teams", "Bracket elimination logic", "Drawing connected lines and layout", "User input for selections"],
        raylibFunctions: ["InitWindow", "DrawText", "DrawRectangle", "DrawLine", "IsKeyPressed", "ClearBackground", "TextFormat", "MeasureText"],
        starterHint:
          "Start with 8 teams. Round 1 has 4 matchups, round 2 has 2, and the final has 1. Draw each matchup as two boxes connected by lines. Use UP/DOWN to highlight a team and ENTER to advance the winner.",
        steps: [
          "Set up the window and define 8 team names",
          "Draw the bracket layout: 4 matchups on the left, 2 in the middle, 1 final on the right",
          "Connect matchups with lines showing the bracket flow",
          "Highlight the current matchup being decided",
          "Use UP/DOWN to select a team and ENTER to advance the winner",
          "Move the winner to the next round's bracket slot",
          "When the final is decided, display the champion with a celebration",
          "Press R to reset and start a new tournament",
        ],
      },
      {
        name: "Racing Game",
        difficulty: "Intermediate",
        description:
          "A simple top-down racing game where the player steers a car left and right to avoid obstacles on a scrolling track. Speed increases over time. Track distance and try to beat your high score.",
        concepts: ["Continuous scrolling and speed", "Collision detection with obstacles", "Score tracking (distance)", "Increasing difficulty over time"],
        raylibFunctions: ["InitWindow", "DrawRectangle", "DrawText", "TextFormat", "IsKeyDown", "GetFrameTime", "GetRandomValue", "CheckCollisionRecs"],
        starterHint:
          "The car is a rectangle at the bottom of the screen, controlled by LEFT/RIGHT. Obstacles are rectangles that scroll downward. Each frame, move obstacles down by speed * deltaTime. Spawn new obstacles at the top with random x positions.",
        steps: [
          "Set up the window and draw a road with lane markings",
          "Create the player car as a rectangle near the bottom, controlled by arrow keys",
          "Spawn obstacles at the top of the screen at random x positions",
          "Move all obstacles downward each frame (speed * GetFrameTime())",
          "Check collision between the car and each obstacle using CheckCollisionRecs",
          "Increase speed gradually over time for escalating difficulty",
          "Track and display distance as the score",
          "On collision, show 'Game Over' with the final distance and high score",
        ],
      },
    ],
  },
  conventional: {
    title: "The Organizer",
    emoji: "📋",
    tagline: "You love order, structure, and getting things just right. Let's build something precise.",
    color: "#16a085",
    description:
      "You're detail-oriented, systematic, and appreciate well-organized information. You'd rather have a clean, structured system than a messy creative one. Data-driven visualizations and utility tools are your forte.",
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
      {
        name: "Task Manager / To-Do List",
        difficulty: "Intermediate",
        description:
          "A visual to-do list app where users can add tasks by typing, mark them complete with a click, and delete them. Tasks are displayed in a clean, organized list with checkboxes. A practical utility that teaches data management.",
        concepts: ["Text input handling", "List/array management", "Boolean state per task (done/not done)", "Drawing a scrollable UI"],
        raylibFunctions: ["InitWindow", "DrawText", "DrawRectangle", "DrawRectangleRounded", "IsKeyPressed", "GetKeyPressed", "MeasureText", "IsMouseButtonPressed", "GetMouseY"],
        starterHint:
          "Use GetKeyPressed() to build a text string character by character. When ENTER is pressed, add the string as a new task. Store tasks and their completion status. Draw each task with a checkbox that toggles on click.",
        steps: [
          "Set up the window and create arrays/variables for task names and completion status",
          "Draw a text input field at the top for entering new tasks",
          "Use GetKeyPressed to capture typed characters into a buffer string",
          "When ENTER is pressed, add the buffer as a new task and clear the buffer",
          "Display each task with a checkbox (empty square or checked square)",
          "When the user clicks a task's checkbox, toggle its completion status",
          "Draw completed tasks with strikethrough styling and a different color",
          "Press DELETE on a selected task to remove it from the list",
        ],
      },
      {
        name: "Calendar Day Planner",
        difficulty: "Intermediate",
        description:
          "Display a monthly calendar grid with days of the week. Users can navigate between months and click on days to add simple events. A satisfying project that combines grid layout with data organization.",
        concepts: ["Grid layout and positioning", "Date/day calculation logic", "Mouse click on grid cells", "Data storage per day"],
        raylibFunctions: ["InitWindow", "DrawRectangle", "DrawRectangleLines", "DrawText", "TextFormat", "IsKeyPressed", "IsMouseButtonPressed", "GetMouseX", "GetMouseY"],
        starterHint:
          "Draw a 7-column by 6-row grid for the calendar. Use a currentMonth and currentYear variable. Calculate which day of the week the month starts on. Fill in the day numbers starting from that position.",
        steps: [
          "Set up the window and draw column headers (Sun, Mon, Tue, ...)",
          "Create variables for currentMonth and currentYear",
          "Calculate the starting day of the week for the current month",
          "Draw a grid of cells, numbering each day in the correct position",
          "Highlight today's date with a special color",
          "Use LEFT/RIGHT arrow keys to navigate between months",
          "When a day is clicked, allow the user to type a short event label",
          "Display event labels inside their corresponding day cells",
        ],
      },
      {
        name: "Unit Converter Tool",
        difficulty: "Beginner",
        description:
          "A practical utility that converts between common units: temperature (F/C/K), distance (miles/km), and weight (lbs/kg). Clean interface with input and instant output. Simple but genuinely useful.",
        concepts: ["Arithmetic for conversion formulas", "If statements for unit selection", "Number input handling", "Formatted number display"],
        raylibFunctions: ["InitWindow", "DrawText", "DrawRectangle", "TextFormat", "IsKeyPressed", "IsKeyDown", "ClearBackground", "DrawRectangleRounded"],
        starterHint:
          "Use a category variable (1=temp, 2=distance, 3=weight) to switch between converters. Use UP/DOWN to adjust the input value. Apply the conversion formula and display both the input and output values.",
        steps: [
          "Set up the window and create variables: category, inputValue, direction (e.g., F→C or C→F)",
          "Display three category buttons: Temperature, Distance, Weight",
          "Use number keys (1-3) to select the category",
          "Use UP/DOWN arrow keys to increase/decrease the input value",
          "Apply the appropriate conversion formula (e.g., C = (F - 32) * 5/9)",
          "Display both the input and converted output with their units",
          "Press TAB to swap the conversion direction (e.g., F→C becomes C→F)",
          "Add decimal precision for accurate results",
        ],
      },
    ],
  },
};

export default projectRecommendations;
