const loopTopics = [
  {
    id: "for",
    title: "For Loops",
    emoji: "🔄",
    color: "#3498db",
    description:
      "A for loop repeats a block of code a specific number of times. It's the go-to when you know exactly how many iterations you need.",
    syntax: `for (initialization; condition; update) {
    // code to repeat
}`,
    syntaxExplained: [
      { part: "initialization", desc: "Runs once before the loop starts. Usually creates a counter variable.", example: "int i = 0" },
      { part: "condition", desc: "Checked before each iteration. Loop continues while this is true.", example: "i < 5" },
      { part: "update", desc: "Runs after each iteration. Usually increments the counter.", example: "i++" },
    ],
    keyPoints: [
      "The counter variable (usually i) is created, checked, and updated all in one line",
      "The loop body runs as long as the condition is true",
      "i++ is shorthand for i = i + 1",
      "You can count down too: for (int i = 10; i > 0; i--)",
      "You can skip by any amount: for (int i = 0; i < 100; i += 5)",
    ],
    simulation: {
      title: "Watch a For Loop Run",
      code: [
        "int sum = 0;",
        "for (int i = 1; i <= 4; i++) {",
        "    sum = sum + i;",
        "}",
        "cout << sum;",
      ],
      steps: [
        { line: 0, variables: { sum: 0 }, output: "", explanation: "Declare sum and set it to 0" },
        { line: 1, variables: { sum: 0, i: 1 }, output: "", explanation: "Initialize i = 1. Check: is 1 <= 4? YES → enter loop" },
        { line: 2, variables: { sum: 1, i: 1 }, output: "", explanation: "sum = 0 + 1 = 1" },
        { line: 1, variables: { sum: 1, i: 2 }, output: "", explanation: "Update: i++ → i = 2. Check: is 2 <= 4? YES → continue" },
        { line: 2, variables: { sum: 3, i: 2 }, output: "", explanation: "sum = 1 + 2 = 3" },
        { line: 1, variables: { sum: 3, i: 3 }, output: "", explanation: "Update: i++ → i = 3. Check: is 3 <= 4? YES → continue" },
        { line: 2, variables: { sum: 6, i: 3 }, output: "", explanation: "sum = 3 + 3 = 6" },
        { line: 1, variables: { sum: 6, i: 4 }, output: "", explanation: "Update: i++ → i = 4. Check: is 4 <= 4? YES → continue" },
        { line: 2, variables: { sum: 10, i: 4 }, output: "", explanation: "sum = 6 + 4 = 10" },
        { line: 1, variables: { sum: 10, i: 5 }, output: "", explanation: "Update: i++ → i = 5. Check: is 5 <= 4? NO → exit loop" },
        { line: 4, variables: { sum: 10, i: 5 }, output: "10", explanation: "Print sum → output: 10" },
      ],
    },
    commonMistakes: [
      { mistake: "Off-by-one errors", explanation: "for (int i = 0; i < 5; ...) runs 5 times (0,1,2,3,4). for (int i = 0; i <= 5; ...) runs 6 times (0,1,2,3,4,5). Be careful with < vs <=" },
      { mistake: "Infinite loops", explanation: "If the condition never becomes false, the loop runs forever. for (int i = 0; i < 10; i--) will never stop because i keeps going negative." },
      { mistake: "Using the wrong variable", explanation: "In nested loops, make sure inner loops use a different variable (j, k) than the outer loop (i)." },
    ],
    exercises: [
      {
        type: "predict",
        title: "What does this print?",
        difficulty: "Easy",
        code: `for (int i = 0; i < 5; i++) {
    cout << i << " ";
}`,
        answer: "0 1 2 3 4",
        hint: "i starts at 0 and goes up by 1 each time. It stops when i reaches 5 (because 5 < 5 is false).",
        teachingNote: "Walk through each iteration on the board: i=0 (print 0), i=1 (print 1), ... i=4 (print 4), i=5 (stop).",
      },
      {
        type: "predict",
        title: "Tracing a countdown",
        difficulty: "Easy",
        code: `for (int i = 5; i > 0; i--) {
    cout << i << " ";
}
cout << "Go!";`,
        answer: "5 4 3 2 1 Go!",
        hint: "This loop counts DOWN. i starts at 5, decreases by 1 each time, and stops when i is no longer greater than 0.",
        teachingNote: "Great for showing loops can go in any direction. Ask students: what happens if we change i > 0 to i >= 0?",
      },
      {
        type: "predict",
        title: "Accumulating a sum",
        difficulty: "Medium",
        code: `int sum = 0;
for (int i = 1; i <= 4; i++) {
    sum = sum + i;
}
cout << sum;`,
        answer: "10",
        hint: "Track both i and sum through each iteration. sum starts at 0.",
        teachingNote: "Have students build a trace table on paper:\n| i | sum (before) | sum + i | sum (after) |\n|---|---|---|---|\n| 1 | 0 | 0+1 | 1 |\n| 2 | 1 | 1+2 | 3 |\n| 3 | 3 | 3+3 | 6 |\n| 4 | 6 | 6+4 | 10 |",
        trace: [
          { iteration: 1, variables: { i: 1, sum: 1 }, explanation: "sum = 0 + 1 = 1" },
          { iteration: 2, variables: { i: 2, sum: 3 }, explanation: "sum = 1 + 2 = 3" },
          { iteration: 3, variables: { i: 3, sum: 6 }, explanation: "sum = 3 + 3 = 6" },
          { iteration: 4, variables: { i: 4, sum: 10 }, explanation: "sum = 6 + 4 = 10" },
        ],
      },
      {
        type: "predict",
        title: "Skip counting",
        difficulty: "Medium",
        code: `for (int i = 0; i <= 10; i += 3) {
    cout << i << " ";
}`,
        answer: "0 3 6 9",
        hint: "i increases by 3 each time, not 1. After 9, the next value would be 12, which is NOT <= 10, so the loop stops.",
        teachingNote: "Ask: why doesn't 10 print? Because after i=9, the update makes i=12, and 12 <= 10 is false.",
      },
      {
        type: "predict",
        title: "Nested loops",
        difficulty: "Hard",
        code: `for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 2; j++) {
        cout << i << "," << j << " ";
    }
}`,
        answer: "1,1 1,2 2,1 2,2 3,1 3,2",
        hint: "The inner loop (j) runs completely for each value of the outer loop (i). Think of it like rows and columns.",
        teachingNote: "Draw this as a grid on the board. For each 'row' (i value), we go through all 'columns' (j values). Total iterations = 3 * 2 = 6.",
        trace: [
          { iteration: 1, variables: { i: 1, j: 1 }, explanation: "Outer i=1, Inner j=1 → print 1,1" },
          { iteration: 2, variables: { i: 1, j: 2 }, explanation: "Outer i=1, Inner j=2 → print 1,2" },
          { iteration: 3, variables: { i: 2, j: 1 }, explanation: "Outer i=2, Inner j=1 → print 2,1" },
          { iteration: 4, variables: { i: 2, j: 2 }, explanation: "Outer i=2, Inner j=2 → print 2,2" },
          { iteration: 5, variables: { i: 3, j: 1 }, explanation: "Outer i=3, Inner j=1 → print 3,1" },
          { iteration: 6, variables: { i: 3, j: 2 }, explanation: "Outer i=3, Inner j=2 → print 3,2" },
        ],
      },
      {
        type: "fix",
        title: "Fix the loop: print 1 through 5",
        difficulty: "Easy",
        code: `for (int i = 0; i < 5; i++) {
    cout << i << " ";
}`,
        bugDescription: "This code is supposed to print: 1 2 3 4 5 — but it prints 0 1 2 3 4 instead.",
        answer: "Change i = 0 to i = 1 and i < 5 to i <= 5 (or i < 6)",
        hint: "The issue is with the starting value and/or the condition. If you want to start at 1, initialize i to 1.",
        teachingNote: "Two valid fixes: (1) start at 1 with i <= 5, or (2) start at 1 with i < 6. Both produce the same result. Discuss which reads more naturally.",
      },
      {
        type: "fix",
        title: "Fix the loop: sum of even numbers",
        difficulty: "Medium",
        code: `int sum = 0;
for (int i = 2; i < 10; i++) {
    sum = sum + i;
}
cout << "Sum of evens: " << sum;`,
        bugDescription: "This should add up only even numbers from 2 to 10 (2+4+6+8+10=30), but it adds ALL numbers from 2 to 9.",
        answer: "Change i++ to i += 2 and i < 10 to i <= 10",
        hint: "To visit only even numbers, the counter should increase by 2 each time, not 1. Also check if 10 should be included.",
        teachingNote: "This is a great exercise for understanding how the update expression controls which values i takes. Alternative fix: keep i++ but add an if (i % 2 == 0) check inside the loop.",
      },
      {
        type: "fillin",
        title: "Complete the loop: draw 5 circles",
        difficulty: "Easy",
        code: `for (int i = ___; i < ___; i++) {
    DrawCircle(100 + i * 80, 225, 30, RED);
}`,
        description: "Fill in the blanks to draw exactly 5 circles spaced 80 pixels apart, starting at x=100.",
        answer: "0, 5",
        acceptableAnswers: ["0, 5", "0,5", "1, 6", "1,6"],
        hint: "You need 5 iterations. Starting at 0 and going to less than 5 gives you i = 0, 1, 2, 3, 4 (five values).",
        teachingNote: "Connect this to raylib! The circles would appear at x = 100, 180, 260, 340, 420. Each one 80 pixels apart.",
      },
      {
        type: "fillin",
        title: "Complete the loop: multiply",
        difficulty: "Medium",
        code: `int result = 1;
for (int i = 1; i <= ___; i++) {
    result = result ___ i;
}
// result should equal 120 (which is 5!)`,
        description: "Fill in the two blanks to calculate 5 factorial (5! = 1 * 2 * 3 * 4 * 5 = 120).",
        answer: "5, *",
        acceptableAnswers: ["5, *", "5,*"],
        hint: "Factorial means multiplying all integers from 1 to n. What operation and upper bound do you need?",
        teachingNote: "Great segue into discussing how loops can calculate formulas. Compare to the sum example — same structure, different operation.",
      },
      {
        type: "predict",
        title: "String of stars",
        difficulty: "Easy",
        code: `for (int i = 1; i <= 4; i++) {
    for (int j = 0; j < i; j++) {
        cout << "*";
    }
    cout << endl;
}`,
        answer: "*\n**\n***\n****",
        altAnswers: ["* ** *** ****", "*  **  ***  ****", "* ***** ****"],
        hint: "The outer loop controls rows (1 through 4). The inner loop prints i stars for each row.",
        trace: [
          { iteration: 1, variables: { i: 1, stars: "*" }, explanation: "Row 1: j goes 0..0 → 1 star" },
          { iteration: 2, variables: { i: 2, stars: "**" }, explanation: "Row 2: j goes 0..1 → 2 stars" },
          { iteration: 3, variables: { i: 3, stars: "***" }, explanation: "Row 3: j goes 0..2 → 3 stars" },
          { iteration: 4, variables: { i: 4, stars: "****" }, explanation: "Row 4: j goes 0..3 → 4 stars" },
        ],
      },
      {
        type: "predict",
        title: "Even numbers only",
        difficulty: "Easy",
        code: `for (int i = 2; i <= 10; i += 2) {
    cout << i << " ";
}`,
        answer: "2 4 6 8 10",
        hint: "i starts at 2 and increases by 2 each time. List out the values: 2, 4, 6, 8, 10.",
      },
      {
        type: "fix",
        title: "Fix the loop: printing backwards",
        difficulty: "Easy",
        code: `for (int i = 10; i >= 1; i++) {
    cout << i << " ";
}`,
        bugDescription: "This should print 10 9 8 7 6 5 4 3 2 1, but it runs forever.",
        answer: "Change i++ to i-- (need to decrement, not increment, when counting down)",
        hint: "Look at the update expression. If we're going from 10 down to 1, should i be getting bigger or smaller?",
      },
      {
        type: "fillin",
        title: "Complete the loop: average",
        difficulty: "Medium",
        code: `int grades[] = {90, 85, 77, 92, 88};
int sum = 0;
for (int i = 0; i < ___; i++) {
    sum = sum + ___;
}
double avg = sum / 5.0;`,
        description: "Fill in the blanks to sum all 5 grades in the array.",
        answer: "5, grades[i]",
        acceptableAnswers: ["5, grades[i]", "5,grades[i]"],
        hint: "The array has 5 elements (indices 0 through 4). To access the element at position i, use the array name with [i].",
      },
    ],
  },
  {
    id: "while",
    title: "While Loops",
    emoji: "🔁",
    color: "#e67e22",
    description:
      "A while loop repeats as long as a condition is true. Use it when you don't know in advance how many times to repeat — like waiting for user input or running a game loop.",
    syntax: `while (condition) {
    // code to repeat
    // (must eventually make condition false!)
}`,
    syntaxExplained: [
      { part: "condition", desc: "Checked BEFORE each iteration. If false from the start, the loop body never runs.", example: "count < 10" },
      { part: "loop body", desc: "The code inside the braces. Must change something that affects the condition, or you get an infinite loop.", example: "count++" },
    ],
    keyPoints: [
      "The condition is checked BEFORE the loop body runs",
      "If the condition is false initially, the body runs zero times",
      "YOU must update the condition variable yourself (unlike for loops where it's in the header)",
      "while loops are the basis of raylib's game loop: while (!WindowShouldClose())",
      "Any for loop can be rewritten as a while loop (and vice versa)",
    ],
    simulation: {
      title: "Watch a While Loop Run",
      code: [
        "int n = 100;",
        "int steps = 0;",
        "while (n > 1) {",
        "    n = n / 2;",
        "    steps++;",
        "}",
        "cout << steps;",
      ],
      steps: [
        { line: 0, variables: { n: 100 }, output: "", explanation: "Declare n and set it to 100" },
        { line: 1, variables: { n: 100, steps: 0 }, output: "", explanation: "Declare steps and set it to 0" },
        { line: 2, variables: { n: 100, steps: 0 }, output: "", explanation: "Check: is 100 > 1? YES → enter loop" },
        { line: 3, variables: { n: 50, steps: 0 }, output: "", explanation: "n = 100 / 2 = 50" },
        { line: 4, variables: { n: 50, steps: 1 }, output: "", explanation: "steps++ → steps = 1" },
        { line: 2, variables: { n: 50, steps: 1 }, output: "", explanation: "Check: is 50 > 1? YES → continue" },
        { line: 3, variables: { n: 25, steps: 1 }, output: "", explanation: "n = 50 / 2 = 25" },
        { line: 4, variables: { n: 25, steps: 2 }, output: "", explanation: "steps++ → steps = 2" },
        { line: 2, variables: { n: 25, steps: 2 }, output: "", explanation: "Check: is 25 > 1? YES → continue" },
        { line: 3, variables: { n: 12, steps: 2 }, output: "", explanation: "n = 25 / 2 = 12 (integer division truncates!)" },
        { line: 4, variables: { n: 12, steps: 3 }, output: "", explanation: "steps++ → steps = 3" },
        { line: 2, variables: { n: 12, steps: 3 }, output: "", explanation: "Check: is 12 > 1? YES → continue" },
        { line: 3, variables: { n: 6, steps: 3 }, output: "", explanation: "n = 12 / 2 = 6" },
        { line: 4, variables: { n: 6, steps: 4 }, output: "", explanation: "steps++ → steps = 4" },
        { line: 2, variables: { n: 6, steps: 4 }, output: "", explanation: "Check: is 6 > 1? YES → continue" },
        { line: 3, variables: { n: 3, steps: 4 }, output: "", explanation: "n = 6 / 2 = 3" },
        { line: 4, variables: { n: 3, steps: 5 }, output: "", explanation: "steps++ → steps = 5" },
        { line: 2, variables: { n: 3, steps: 5 }, output: "", explanation: "Check: is 3 > 1? YES → continue" },
        { line: 3, variables: { n: 1, steps: 5 }, output: "", explanation: "n = 3 / 2 = 1 (integer division!)" },
        { line: 4, variables: { n: 1, steps: 6 }, output: "", explanation: "steps++ → steps = 6" },
        { line: 2, variables: { n: 1, steps: 6 }, output: "", explanation: "Check: is 1 > 1? NO → exit loop" },
        { line: 6, variables: { n: 1, steps: 6 }, output: "6", explanation: "Print steps → output: 6" },
      ],
    },
    commonMistakes: [
      { mistake: "Forgetting to update the condition", explanation: "If you write while (x < 10) but never change x inside the loop, it runs forever." },
      { mistake: "Off-by-one errors", explanation: "Just like for loops, be careful whether you check < or <=." },
      { mistake: "Checking the wrong variable", explanation: "Make sure the variable you change in the loop is the same one in the condition." },
    ],
    exercises: [
      {
        type: "predict",
        title: "Basic while loop",
        difficulty: "Easy",
        code: `int x = 1;
while (x <= 5) {
    cout << x << " ";
    x++;
}`,
        answer: "1 2 3 4 5",
        hint: "x starts at 1. Each iteration prints x then increases it by 1. When x becomes 6, the condition (6 <= 5) is false and the loop stops.",
        teachingNote: "Compare this directly to: for (int x = 1; x <= 5; x++). They produce identical output. Discuss when each is more natural.",
      },
      {
        type: "predict",
        title: "Halving a number",
        difficulty: "Medium",
        code: `int n = 100;
int steps = 0;
while (n > 1) {
    n = n / 2;
    steps++;
}
cout << "Steps: " << steps;`,
        answer: "Steps: 7",
        hint: "Track n at each step: 100 → 50 → 25 → 12 → 6 → 3 → 1. How many divisions?",
        teachingNote: "Trace on the board:\n100 → 50 → 25 → 12 → 6 → 3 → 1\nNote: integer division truncates (25/2 = 12, not 12.5). This is actually calculating log₂(100) ≈ 6.6, rounded up to 7.",
        trace: [
          { iteration: 1, variables: { n: 50, steps: 1 }, explanation: "100 / 2 = 50" },
          { iteration: 2, variables: { n: 25, steps: 2 }, explanation: "50 / 2 = 25" },
          { iteration: 3, variables: { n: 12, steps: 3 }, explanation: "25 / 2 = 12 (integer division!)" },
          { iteration: 4, variables: { n: 6, steps: 4 }, explanation: "12 / 2 = 6" },
          { iteration: 5, variables: { n: 3, steps: 5 }, explanation: "6 / 2 = 3" },
          { iteration: 6, variables: { n: 1, steps: 6 }, explanation: "3 / 2 = 1 (integer division!)" },
          { iteration: 7, variables: { n: 0, steps: 7 }, explanation: "Wait — n=1 means 1 > 1 is false. Loop stops at step 6!" },
        ],
      },
      {
        type: "predict",
        title: "The game loop pattern",
        difficulty: "Easy",
        code: `int lives = 3;
int score = 0;
while (lives > 0) {
    score += 10;
    if (score == 20) {
        lives--;
    }
}
cout << "Score: " << score << " Lives: " << lives;`,
        answer: "This is an infinite loop!",
        altAnswers: ["infinite loop", "infinite", "it loops forever", "loops forever", "never stops"],
        hint: "After score reaches 20, lives goes to 2. But does it keep decreasing? What happens when score goes past 20?",
        teachingNote: "TRICK QUESTION! After score=20, lives becomes 2. Then score=30, 40, 50... the if condition (score == 20) is never true again, so lives stays at 2 forever. Great discussion starter about == vs <= in conditions.",
      },
      {
        type: "predict",
        title: "Digit counter",
        difficulty: "Medium",
        code: `int num = 3456;
int digits = 0;
while (num > 0) {
    num = num / 10;
    digits++;
}
cout << digits;`,
        answer: "4",
        hint: "Dividing by 10 removes the last digit. 3456 → 345 → 34 → 3 → 0. Count the steps.",
        teachingNote: "This is a classic algorithm! Each division by 10 removes one digit. Works for any positive integer. Ask: what would happen if num started at 0?",
        trace: [
          { iteration: 1, variables: { num: 345, digits: 1 }, explanation: "3456 / 10 = 345 (removed the 6)" },
          { iteration: 2, variables: { num: 34, digits: 2 }, explanation: "345 / 10 = 34 (removed the 5)" },
          { iteration: 3, variables: { num: 3, digits: 3 }, explanation: "34 / 10 = 3 (removed the 4)" },
          { iteration: 4, variables: { num: 0, digits: 4 }, explanation: "3 / 10 = 0 (removed the 3). Now 0 > 0 is false → stop" },
        ],
      },
      {
        type: "fix",
        title: "Fix the loop: count down from 10",
        difficulty: "Easy",
        code: `int n = 10;
while (n >= 0) {
    cout << n << " ";
}`,
        bugDescription: "This should print: 10 9 8 7 6 5 4 3 2 1 0 — but instead it prints 10 forever.",
        answer: "Add n-- (or n = n - 1) inside the loop body",
        hint: "The variable n never changes inside the loop. The while condition checks n >= 0, but n is always 10.",
        teachingNote: "The #1 while loop mistake! Unlike for loops, while loops don't have a built-in update step. You MUST remember to change the variable yourself.",
      },
      {
        type: "fix",
        title: "Fix the loop: find first multiple of 7",
        difficulty: "Medium",
        code: `int x = 1;
while (x % 7 == 0) {
    x++;
}
cout << "First multiple of 7: " << x;`,
        bugDescription: "This should find the first multiple of 7 starting from 1, but it prints 1 immediately without looping.",
        answer: "Change the condition to x % 7 != 0 (loop while x is NOT a multiple of 7)",
        hint: "The condition says 'keep going while x IS a multiple of 7.' But 1 is not a multiple of 7, so the condition is immediately false and the loop never runs.",
        teachingNote: "Common logic error: confusing 'loop until' with 'loop while.' While loops continue WHILE the condition is true, so you need the opposite condition from what you might think.",
      },
      {
        type: "fillin",
        title: "Complete the loop: raylib game loop",
        difficulty: "Easy",
        code: `while (!___()) {
    BeginDrawing();
        ClearBackground(RAYWHITE);
        DrawText("Hello!", 350, 200, 20, BLACK);
    EndDrawing();
}`,
        description: "Fill in the function name that checks if the window's close button was clicked.",
        answer: "WindowShouldClose",
        acceptableAnswers: ["WindowShouldClose"],
        hint: "This is THE raylib game loop pattern. What function returns true when the user clicks the X button?",
        teachingNote: "This is the most important while loop students will write! The ! (NOT) flips the condition: keep running WHILE the window should NOT close.",
      },
      {
        type: "fillin",
        title: "Complete the loop: password attempt",
        difficulty: "Medium",
        code: `int attempts = 0;
int guess = 0;
int password = 1234;

while (guess ___ password && attempts ___ 3) {
    cout << "Enter password: ";
    cin >> guess;
    attempts___;
}`,
        description: "Fill in the three blanks: two comparison operators and one update operation. The loop should keep asking while the guess is wrong AND attempts are under 3.",
        answer: "!=, <, ++",
        acceptableAnswers: ["!=, <, ++", "!=,<,++"],
        hint: "We want to loop WHILE the guess doesn't match the password AND we haven't used all attempts. After each guess, increment attempts.",
        teachingNote: "Great real-world example! Discuss: what happens after the loop? We need to check if they got it right (guess == password) or ran out of attempts.",
      },
      {
        type: "predict",
        title: "Power of 2",
        difficulty: "Easy",
        code: `int x = 1;
while (x < 20) {
    cout << x << " ";
    x = x * 2;
}`,
        answer: "1 2 4 8 16",
        hint: "x doubles each time: 1, 2, 4, 8, 16, 32. But 32 is not < 20, so it stops after printing 16.",
        trace: [
          { iteration: 1, variables: { x: 1 }, explanation: "Print 1, then x = 1 * 2 = 2" },
          { iteration: 2, variables: { x: 2 }, explanation: "Print 2, then x = 2 * 2 = 4" },
          { iteration: 3, variables: { x: 4 }, explanation: "Print 4, then x = 4 * 2 = 8" },
          { iteration: 4, variables: { x: 8 }, explanation: "Print 8, then x = 8 * 2 = 16" },
          { iteration: 5, variables: { x: 16 }, explanation: "Print 16, then x = 16 * 2 = 32. Now 32 < 20 is false → stop" },
        ],
      },
      {
        type: "predict",
        title: "Reverse a number",
        difficulty: "Hard",
        code: `int num = 123;
int rev = 0;
while (num > 0) {
    rev = rev * 10 + num % 10;
    num = num / 10;
}
cout << rev;`,
        answer: "321",
        hint: "num % 10 gives the last digit. num / 10 removes the last digit. rev builds up the reversed number digit by digit.",
        trace: [
          { iteration: 1, variables: { num: 12, rev: 3 }, explanation: "123 % 10 = 3, rev = 0*10 + 3 = 3, num = 123/10 = 12" },
          { iteration: 2, variables: { num: 1, rev: 32 }, explanation: "12 % 10 = 2, rev = 3*10 + 2 = 32, num = 12/10 = 1" },
          { iteration: 3, variables: { num: 0, rev: 321 }, explanation: "1 % 10 = 1, rev = 32*10 + 1 = 321, num = 1/10 = 0. Stop!" },
        ],
      },
      {
        type: "fix",
        title: "Fix the loop: sum until negative",
        difficulty: "Medium",
        code: `int sum = 0;
int val = 1;
while (val > 0) {
    sum += val;
}
cout << "Sum: " << sum;`,
        bugDescription: "This should read numbers and add them up, stopping when a negative number is entered. But it loops forever with val always equal to 1.",
        answer: "Add cin >> val; inside the loop body (before or after sum += val, depending on desired behavior)",
        hint: "The loop needs to read a new value from the user each time. Without cin >> val, val never changes.",
      },
      {
        type: "fillin",
        title: "Complete the loop: countdown timer",
        difficulty: "Easy",
        code: `int seconds = 10;
while (seconds ___ 0) {
    cout << seconds << "... ";
    seconds___;
}
cout << "Liftoff!";`,
        description: "Fill in two blanks to create a countdown from 10 to 1, then print Liftoff!",
        answer: ">, --",
        acceptableAnswers: ["> , --", ">,--", "> , --", ">= , --", ">=,--", ">= 1, --", ">0, --"],
        hint: "We want to keep going while seconds is greater than 0, and decrease seconds each iteration.",
      },
    ],
  },
  {
    id: "dowhile",
    title: "Do-While Loops",
    emoji: "🔂",
    color: "#9b59b6",
    description:
      "A do-while loop is like a while loop, but it always runs the body at LEAST once before checking the condition. Perfect for menus, input validation, and situations where you need to do something before you can check if you should continue.",
    syntax: `do {
    // code to repeat (runs at least once!)
} while (condition);  // note the semicolon!`,
    syntaxExplained: [
      { part: "do { ... }", desc: "The loop body runs FIRST, before any condition is checked.", example: "Get user input" },
      { part: "while (condition);", desc: "Checked AFTER each iteration. If true, loop repeats. Don't forget the semicolon!", example: "while (input != 0);" },
    ],
    keyPoints: [
      "The body ALWAYS runs at least once — this is the key difference from while",
      "The condition is checked AFTER the body runs, not before",
      "Don't forget the semicolon after the while condition!",
      "Perfect for: menus ('show menu, then check if user wants to quit'), input validation ('get input, then check if it's valid')",
      "If the condition is false after the first run, the body still ran once",
    ],
    simulation: {
      title: "Watch a Do-While Loop Run",
      code: [
        "int x = 10;",
        "do {",
        "    cout << x << \" \";",
        "    x += 3;",
        "} while (x < 20);",
      ],
      steps: [
        { line: 0, variables: { x: 10 }, output: "", explanation: "Declare x and set it to 10" },
        { line: 1, variables: { x: 10 }, output: "", explanation: "Enter do block — body runs FIRST, no condition check yet!" },
        { line: 2, variables: { x: 10 }, output: "10 ", explanation: "Print x → output: 10" },
        { line: 3, variables: { x: 13 }, output: "10 ", explanation: "x = 10 + 3 = 13" },
        { line: 4, variables: { x: 13 }, output: "10 ", explanation: "Check: is 13 < 20? YES → repeat loop body" },
        { line: 2, variables: { x: 13 }, output: "10 13 ", explanation: "Print x → output: 10 13" },
        { line: 3, variables: { x: 16 }, output: "10 13 ", explanation: "x = 13 + 3 = 16" },
        { line: 4, variables: { x: 16 }, output: "10 13 ", explanation: "Check: is 16 < 20? YES → repeat loop body" },
        { line: 2, variables: { x: 16 }, output: "10 13 16 ", explanation: "Print x → output: 10 13 16" },
        { line: 3, variables: { x: 19 }, output: "10 13 16 ", explanation: "x = 16 + 3 = 19" },
        { line: 4, variables: { x: 19 }, output: "10 13 16 ", explanation: "Check: is 19 < 20? YES → repeat loop body" },
        { line: 2, variables: { x: 19 }, output: "10 13 16 19 ", explanation: "Print x → output: 10 13 16 19" },
        { line: 3, variables: { x: 22 }, output: "10 13 16 19 ", explanation: "x = 19 + 3 = 22" },
        { line: 4, variables: { x: 22 }, output: "10 13 16 19 ", explanation: "Check: is 22 < 20? NO → exit loop" },
      ],
    },
    commonMistakes: [
      { mistake: "Forgetting the semicolon", explanation: "do { ... } while (condition)  ← missing semicolon! This causes a compiler error." },
      { mistake: "Using do-while when while is simpler", explanation: "If you don't need the body to run at least once, a regular while loop is clearer." },
      { mistake: "Same infinite loop issues as while", explanation: "You still need to update the condition variable inside the loop body." },
    ],
    exercises: [
      {
        type: "predict",
        title: "Always runs once",
        difficulty: "Easy",
        code: `int x = 10;
do {
    cout << x << " ";
    x++;
} while (x < 5);`,
        answer: "10",
        hint: "Even though x (10) is already greater than 5, the body runs ONCE before the condition is checked. Then x < 5 is false, so the loop stops.",
        teachingNote: "THE key example! Compare to: while (x < 5) { ... } which would print nothing. This is the fundamental difference between while and do-while.",
      },
      {
        type: "predict",
        title: "Menu system",
        difficulty: "Medium",
        code: `int choice;
int count = 0;
do {
    choice = 3 - count;
    cout << choice << " ";
    count++;
} while (choice > 1);`,
        answer: "3 2 1",
        hint: "Track choice and count at each iteration. choice = 3 - count.",
        teachingNote: "Trace table:\n| count | choice (3-count) | prints | check choice>1 |\n|---|---|---|---|\n| 0 | 3 | 3 | true |\n| 1 | 2 | 2 | true |\n| 2 | 1 | 1 | false → stop |",
        trace: [
          { iteration: 1, variables: { count: 0, choice: 3 }, explanation: "choice = 3 - 0 = 3, print 3, count becomes 1, 3 > 1 → continue" },
          { iteration: 2, variables: { count: 1, choice: 2 }, explanation: "choice = 3 - 1 = 2, print 2, count becomes 2, 2 > 1 → continue" },
          { iteration: 3, variables: { count: 2, choice: 1 }, explanation: "choice = 3 - 2 = 1, print 1, count becomes 3, 1 > 1 is FALSE → stop" },
        ],
      },
      {
        type: "predict",
        title: "vs. while comparison",
        difficulty: "Easy",
        code: `// Version A (while):
int a = 0;
while (a > 0) {
    cout << "A";
    a--;
}

// Version B (do-while):
int b = 0;
do {
    cout << "B";
    b--;
} while (b > 0);`,
        answer: "B",
        hint: "Version A: a starts at 0, so 0 > 0 is false — the body NEVER runs. Version B: the body runs once (prints B), then checks if -1 > 0 (false) and stops.",
        teachingNote: "Side-by-side comparison is the best way to teach this. Same starting value, same condition — different behavior because of when the check happens.",
      },
      {
        type: "predict",
        title: "Input validation pattern",
        difficulty: "Medium",
        code: `int value = -1;
int attempts = 0;
do {
    value = value + 3;
    attempts++;
} while (value < 5);
cout << value << " in " << attempts << " tries";`,
        answer: "5 in 2 tries",
        hint: "Iteration 1: value = -1 + 3 = 2, attempts = 1, check 2 < 5 → continue. Iteration 2: value = 2 + 3 = 5, attempts = 2, check 5 < 5 → false, stop.",
        teachingNote: "Walk through why it stops at exactly 5 and not 8. The condition checks < not <=.",
        trace: [
          { iteration: 1, variables: { value: 2, attempts: 1 }, explanation: "value = -1 + 3 = 2, check: 2 < 5 → true, continue" },
          { iteration: 2, variables: { value: 5, attempts: 2 }, explanation: "value = 2 + 3 = 5, check: 5 < 5 → false, STOP" },
        ],
      },
      {
        type: "fix",
        title: "Fix the loop: missing semicolon",
        difficulty: "Easy",
        code: `int num = 1;
do {
    cout << num << " ";
    num *= 2;
} while (num <= 16)`,
        bugDescription: "This code won't compile. There's a syntax error on the last line.",
        answer: "Add a semicolon after while (num <= 16);",
        hint: "do-while loops require a semicolon at the very end, after the condition. This is different from a regular while loop.",
        teachingNote: "The most common do-while syntax error. Emphasize: do-while has a semicolon at the end, regular while does NOT.",
      },
      {
        type: "fix",
        title: "Fix the loop: validate input range",
        difficulty: "Medium",
        code: `int grade;
do {
    cout << "Enter grade (0-100): ";
    cin >> grade;
} while (grade >= 0 || grade <= 100);
cout << "Valid grade: " << grade;`,
        bugDescription: "This should keep asking until the user enters a number between 0 and 100, but it keeps looping even for valid inputs.",
        answer: "Change || (OR) to && (AND) and flip the conditions: while (grade < 0 || grade > 100) — meaning 'keep going while the grade is INVALID'",
        hint: "The condition should be true when the input is INVALID (so the loop repeats). 'Invalid' means grade < 0 OR grade > 100.",
        teachingNote: "Classic logic error! The original says 'loop while grade >= 0 OR grade <= 100' — every number satisfies at least one of those. We want 'loop while grade < 0 OR grade > 100' (invalid range).",
      },
      {
        type: "fillin",
        title: "Complete the loop: game retry menu",
        difficulty: "Easy",
        code: `char playAgain;
___ {
    cout << "Playing the game..." << endl;
    cout << "Play again? (y/n): ";
    cin >> playAgain;
} ___ (playAgain ___ 'y');`,
        description: "Fill in three blanks to create a game loop that always plays at least once, then asks if the player wants to continue.",
        answer: "do, while, ==",
        acceptableAnswers: ["do, while, ==", "do,while,=="],
        hint: "We need the game to play at least once before asking, so we need a do-while loop. The loop continues while the answer equals 'y'.",
        teachingNote: "This is THE classic do-while use case and the one students should remember: do something first, then decide whether to repeat.",
      },
      {
        type: "predict",
        title: "Summing with do-while",
        difficulty: "Medium",
        code: `int total = 0;
int n = 5;
do {
    total += n;
    n -= 2;
} while (n > 0);
cout << total;`,
        answer: "9",
        hint: "Iteration 1: total = 0+5 = 5, n = 3. Iteration 2: total = 5+3 = 8, n = 1. Iteration 3: total = 8+1 = 9, n = -1. Now -1 > 0 is false → stop.",
        trace: [
          { iteration: 1, variables: { n: 3, total: 5 }, explanation: "total = 0 + 5 = 5, n = 5 - 2 = 3, check 3 > 0 → continue" },
          { iteration: 2, variables: { n: 1, total: 8 }, explanation: "total = 5 + 3 = 8, n = 3 - 2 = 1, check 1 > 0 → continue" },
          { iteration: 3, variables: { n: -1, total: 9 }, explanation: "total = 8 + 1 = 9, n = 1 - 2 = -1, check -1 > 0 → STOP" },
        ],
      },
      {
        type: "predict",
        title: "Guessing game simulation",
        difficulty: "Easy",
        code: `int secret = 7;
int guess = 5;
int tries = 0;
do {
    guess++;
    tries++;
} while (guess != secret);
cout << "Found in " << tries << " tries";`,
        answer: "Found in 2 tries",
        hint: "guess starts at 5. Iteration 1: guess becomes 6, not 7 yet. Iteration 2: guess becomes 7, matches secret → stop.",
      },
      {
        type: "fix",
        title: "Fix the loop: dice roller",
        difficulty: "Medium",
        code: `int roll;
do {
    roll = rand() % 6;
    cout << "Rolled: " << roll << endl;
} while (roll != 6);`,
        bugDescription: "This dice roller should keep rolling until a 6 is rolled, but it can never actually roll a 6.",
        answer: "Change rand() % 6 to rand() % 6 + 1 (rand() % 6 gives 0-5, not 1-6)",
        hint: "rand() % 6 produces values 0, 1, 2, 3, 4, 5. A real die has faces 1 through 6.",
      },
      {
        type: "fillin",
        title: "Complete the loop: number guesser",
        difficulty: "Medium",
        code: `int secret = 42;
int guess;
do {
    cout << "Guess the number: ";
    ___ >> guess;
    if (guess < secret) cout << "Too low!" << endl;
    if (guess > secret) cout << "Too high!" << endl;
} while (guess ___ secret);
cout << "You got it!";`,
        description: "Fill in two blanks: the input stream object and the comparison operator to keep looping while the guess is wrong.",
        answer: "cin, !=",
        acceptableAnswers: ["cin, !=", "cin,!="],
        hint: "We read input using cin. The loop should continue while the guess does NOT equal the secret.",
      },
    ],
  },
  {
    id: "nested",
    title: "Nested Loops",
    emoji: "🔲",
    color: "#16a085",
    description:
      "A nested loop is a loop inside another loop. The inner loop runs completely for EVERY single iteration of the outer loop. Think of it like rows and columns — the outer loop picks the row, and the inner loop fills in every column of that row.",
    syntax: `for (int i = 0; i < rows; i++) {       // outer loop
    for (int j = 0; j < cols; j++) {   // inner loop
        // runs rows * cols times total
    }
}`,
    syntaxExplained: [
      { part: "outer loop (i)", desc: "Controls the 'rows' or the main iterations. Runs first.", example: "for (int i = 0; i < 3; i++)" },
      { part: "inner loop (j)", desc: "Runs COMPLETELY for each iteration of the outer loop. Resets each time.", example: "for (int j = 0; j < 4; j++)" },
      { part: "total iterations", desc: "The inner code runs outer_count × inner_count times.", example: "3 × 4 = 12 total" },
    ],
    keyPoints: [
      "The inner loop runs from start to finish for EVERY iteration of the outer loop",
      "Use different variable names for each loop (i for outer, j for inner, k if triple-nested)",
      "Total iterations = outer iterations × inner iterations (e.g., 3 × 4 = 12)",
      "Common uses: printing grids/patterns, drawing 2D shapes in raylib, working with 2D arrays",
      "The outer loop often controls rows, the inner loop controls columns",
      "You can use the outer variable (i) in the inner loop's condition to create triangles and other patterns",
    ],
    simulation: {
      title: "Watch Nested Loops Run",
      code: [
        "for (int i = 1; i <= 3; i++) {",
        "    for (int j = 1; j <= 2; j++) {",
        "        cout << i << \",\" << j << \" \";",
        "    }",
        "    cout << endl;",
        "}",
      ],
      steps: [
        { line: 0, variables: { i: 1 }, output: "", explanation: "Initialize i = 1. Check: is 1 <= 3? YES → enter outer loop" },
        { line: 1, variables: { i: 1, j: 1 }, output: "", explanation: "Initialize j = 1. Check: is 1 <= 2? YES → enter inner loop" },
        { line: 2, variables: { i: 1, j: 1 }, output: "1,1 ", explanation: "Print i,j → output: 1,1" },
        { line: 1, variables: { i: 1, j: 2 }, output: "1,1 ", explanation: "Update: j++ → j = 2. Check: is 2 <= 2? YES → continue inner" },
        { line: 2, variables: { i: 1, j: 2 }, output: "1,1 1,2 ", explanation: "Print i,j → output: 1,1 1,2" },
        { line: 1, variables: { i: 1, j: 3 }, output: "1,1 1,2 ", explanation: "Update: j++ → j = 3. Check: is 3 <= 2? NO → exit inner loop" },
        { line: 4, variables: { i: 1 }, output: "1,1 1,2 \\n", explanation: "Print endl → new line. Inner loop done for row 1!" },
        { line: 0, variables: { i: 2 }, output: "1,1 1,2 \\n", explanation: "Update: i++ → i = 2. Check: is 2 <= 3? YES → continue outer" },
        { line: 1, variables: { i: 2, j: 1 }, output: "1,1 1,2 \\n", explanation: "Inner loop RESETS! j = 1. Check: is 1 <= 2? YES → enter inner" },
        { line: 2, variables: { i: 2, j: 1 }, output: "1,1 1,2 \\n2,1 ", explanation: "Print i,j → output: 2,1" },
        { line: 1, variables: { i: 2, j: 2 }, output: "1,1 1,2 \\n2,1 ", explanation: "Update: j++ → j = 2. Check: is 2 <= 2? YES → continue inner" },
        { line: 2, variables: { i: 2, j: 2 }, output: "1,1 1,2 \\n2,1 2,2 ", explanation: "Print i,j → output: 2,1 2,2" },
        { line: 1, variables: { i: 2, j: 3 }, output: "1,1 1,2 \\n2,1 2,2 ", explanation: "Update: j++ → j = 3. Check: is 3 <= 2? NO → exit inner loop" },
        { line: 4, variables: { i: 2 }, output: "1,1 1,2 \\n2,1 2,2 \\n", explanation: "Print endl → new line. Inner loop done for row 2!" },
        { line: 0, variables: { i: 3 }, output: "1,1 1,2 \\n2,1 2,2 \\n", explanation: "Update: i++ → i = 3. Check: is 3 <= 3? YES → continue outer" },
        { line: 1, variables: { i: 3, j: 1 }, output: "1,1 1,2 \\n2,1 2,2 \\n", explanation: "Inner loop RESETS! j = 1. Check: is 1 <= 2? YES → enter inner" },
        { line: 2, variables: { i: 3, j: 1 }, output: "1,1 1,2 \\n2,1 2,2 \\n3,1 ", explanation: "Print i,j → output: 3,1" },
        { line: 1, variables: { i: 3, j: 2 }, output: "1,1 1,2 \\n2,1 2,2 \\n3,1 ", explanation: "Update: j++ → j = 2. Check: is 2 <= 2? YES → continue inner" },
        { line: 2, variables: { i: 3, j: 2 }, output: "1,1 1,2 \\n2,1 2,2 \\n3,1 3,2 ", explanation: "Print i,j → output: 3,1 3,2" },
        { line: 1, variables: { i: 3, j: 3 }, output: "1,1 1,2 \\n2,1 2,2 \\n3,1 3,2 ", explanation: "Update: j++ → j = 3. Check: is 3 <= 2? NO → exit inner loop" },
        { line: 4, variables: { i: 3 }, output: "1,1 1,2 \\n2,1 2,2 \\n3,1 3,2 \\n", explanation: "Print endl → new line. Inner loop done for row 3!" },
        { line: 0, variables: { i: 4 }, output: "1,1 1,2 \\n2,1 2,2 \\n3,1 3,2 \\n", explanation: "Update: i++ → i = 4. Check: is 4 <= 3? NO → exit outer loop. Done!" },
      ],
    },
    commonMistakes: [
      { mistake: "Using the same variable for both loops", explanation: "for (int i...) { for (int i...) } — the inner loop's i shadows the outer loop's i. Use i and j instead." },
      { mistake: "Confusing which loop controls what", explanation: "The OUTER loop moves to the next row. The INNER loop fills in all columns of the current row. Don't mix them up." },
      { mistake: "Forgetting endl/newline between rows", explanation: "After the inner loop finishes one row, you usually need cout << endl; before the outer loop starts the next row." },
      { mistake: "Wrong total count", explanation: "If the outer loop runs 5 times and inner runs 3 times, the code inside runs 15 times total — not 8, not 5." },
    ],
    exercises: [
      // ---- PREDICT exercises ----
      {
        type: "predict",
        title: "Simple grid",
        difficulty: "Easy",
        code: `for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++) {
        cout << "* ";
    }
    cout << endl;
}`,
        answer: "* * * \n* * *",
        altAnswers: ["* * *\n* * *", "***\n***", "* * * * * *"],
        hint: "Outer loop runs 2 times (2 rows). Inner loop runs 3 times per row (3 stars). After each row, endl starts a new line.",
        trace: [
          { iteration: "Row 1", variables: { i: 0, j: "0,1,2" }, explanation: "Inner loop prints: * * * then endl" },
          { iteration: "Row 2", variables: { i: 1, j: "0,1,2" }, explanation: "Inner loop prints: * * * then endl" },
        ],
      },
      {
        type: "predict",
        title: "Coordinates",
        difficulty: "Easy",
        code: `for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 2; j++) {
        cout << "(" << i << "," << j << ") ";
    }
    cout << endl;
}`,
        answer: "(0,0) (0,1) \n(1,0) (1,1)",
        altAnswers: ["(0,0) (0,1)\n(1,0) (1,1)", "(0,0)(0,1)(1,0)(1,1)"],
        hint: "For each value of i, j goes through all its values. Row 0: (0,0) (0,1). Row 1: (1,0) (1,1).",
        trace: [
          { iteration: 1, variables: { i: 0, j: 0 }, explanation: "Print (0,0)" },
          { iteration: 2, variables: { i: 0, j: 1 }, explanation: "Print (0,1), then endl" },
          { iteration: 3, variables: { i: 1, j: 0 }, explanation: "Print (1,0)" },
          { iteration: 4, variables: { i: 1, j: 1 }, explanation: "Print (1,1), then endl" },
        ],
      },
      {
        type: "predict",
        title: "Right triangle of stars",
        difficulty: "Medium",
        code: `for (int i = 1; i <= 5; i++) {
    for (int j = 0; j < i; j++) {
        cout << "*";
    }
    cout << endl;
}`,
        answer: "*\n**\n***\n****\n*****",
        altAnswers: ["* ** *** **** *****", "*\n**\n***\n****\n*****"],
        hint: "When i=1, inner loop runs 1 time (1 star). When i=2, inner runs 2 times (2 stars). And so on up to 5 stars.",
        trace: [
          { iteration: "Row 1", variables: { i: 1, "j range": "0..0" }, explanation: "1 star: *" },
          { iteration: "Row 2", variables: { i: 2, "j range": "0..1" }, explanation: "2 stars: **" },
          { iteration: "Row 3", variables: { i: 3, "j range": "0..2" }, explanation: "3 stars: ***" },
          { iteration: "Row 4", variables: { i: 4, "j range": "0..3" }, explanation: "4 stars: ****" },
          { iteration: "Row 5", variables: { i: 5, "j range": "0..4" }, explanation: "5 stars: *****" },
        ],
      },
      {
        type: "predict",
        title: "Inverted triangle",
        difficulty: "Medium",
        code: `for (int i = 4; i >= 1; i--) {
    for (int j = 0; j < i; j++) {
        cout << "#";
    }
    cout << endl;
}`,
        answer: "####\n###\n##\n#",
        altAnswers: ["#### ### ## #", "####\n###\n##\n#"],
        hint: "i starts at 4 and decreases. Row 1: 4 hashes. Row 2: 3 hashes. Row 3: 2. Row 4: 1.",
      },
      {
        type: "predict",
        title: "Number pattern",
        difficulty: "Medium",
        code: `for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        cout << i * j << " ";
    }
    cout << endl;
}`,
        answer: "1 2 3 \n2 4 6 \n3 6 9",
        altAnswers: ["1 2 3\n2 4 6\n3 6 9", "123\n246\n369", "1 2 3 2 4 6 3 6 9"],
        hint: "Each cell prints i * j. Row 1: 1*1, 1*2, 1*3. Row 2: 2*1, 2*2, 2*3. Row 3: 3*1, 3*2, 3*3. It's a multiplication table!",
        trace: [
          { iteration: "Row 1", variables: { i: 1, "j=1,2,3": "1,2,3" }, explanation: "1×1=1, 1×2=2, 1×3=3" },
          { iteration: "Row 2", variables: { i: 2, "j=1,2,3": "2,4,6" }, explanation: "2×1=2, 2×2=4, 2×3=6" },
          { iteration: "Row 3", variables: { i: 3, "j=1,2,3": "3,6,9" }, explanation: "3×1=3, 3×2=6, 3×3=9" },
        ],
      },
      {
        type: "predict",
        title: "Counting total iterations",
        difficulty: "Easy",
        code: `int count = 0;
for (int i = 0; i < 4; i++) {
    for (int j = 0; j < 3; j++) {
        count++;
    }
}
cout << count;`,
        answer: "12",
        hint: "The outer loop runs 4 times. The inner loop runs 3 times for each outer iteration. Total = 4 × 3 = 12.",
      },
      {
        type: "predict",
        title: "Row numbers",
        difficulty: "Easy",
        code: `for (int row = 1; row <= 3; row++) {
    for (int col = 0; col < row; col++) {
        cout << row;
    }
    cout << endl;
}`,
        answer: "1\n22\n333",
        altAnswers: ["1 22 333", "1\n22\n333"],
        hint: "Row 1: print '1' one time. Row 2: print '2' two times. Row 3: print '3' three times.",
      },
      {
        type: "predict",
        title: "Spaces and stars (right-aligned triangle)",
        difficulty: "Hard",
        code: `for (int i = 1; i <= 4; i++) {
    for (int j = 0; j < 4 - i; j++) {
        cout << " ";
    }
    for (int j = 0; j < i; j++) {
        cout << "*";
    }
    cout << endl;
}`,
        answer: "   *\n  **\n ***\n****",
        altAnswers: ["*\n**\n***\n****", "   * ** *** ****"],
        hint: "Two inner loops: first prints spaces (4-i of them), then prints stars (i of them). Row 1: 3 spaces + 1 star. Row 2: 2 spaces + 2 stars. Etc.",
        trace: [
          { iteration: "Row 1", variables: { i: 1, spaces: 3, stars: 1 }, explanation: "'   *' (3 spaces, 1 star)" },
          { iteration: "Row 2", variables: { i: 2, spaces: 2, stars: 2 }, explanation: "'  **' (2 spaces, 2 stars)" },
          { iteration: "Row 3", variables: { i: 3, spaces: 1, stars: 3 }, explanation: "' ***' (1 space, 3 stars)" },
          { iteration: "Row 4", variables: { i: 4, spaces: 0, stars: 4 }, explanation: "'****' (0 spaces, 4 stars)" },
        ],
      },
      {
        type: "predict",
        title: "Hollow rectangle",
        difficulty: "Hard",
        code: `for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 5; j++) {
        if (i == 0 || i == 2 || j == 0 || j == 4) {
            cout << "*";
        } else {
            cout << " ";
        }
    }
    cout << endl;
}`,
        answer: "*****\n*   *\n*****",
        altAnswers: ["***** *   * *****", "*****\n*   *\n*****"],
        hint: "Stars print on the border (first/last row, first/last column). Everything else is a space. The grid is 3 rows × 5 columns.",
      },
      {
        type: "predict",
        title: "Sum of a 2D pattern",
        difficulty: "Hard",
        code: `int total = 0;
for (int i = 1; i <= 3; i++) {
    for (int j = i; j <= 3; j++) {
        total += j;
    }
}
cout << total;`,
        answer: "14",
        hint: "When i=1: j goes 1,2,3 (sum 6). When i=2: j goes 2,3 (sum 5). When i=3: j goes 3 (sum 3). Total = 6+5+3 = 14.",
        trace: [
          { iteration: "i=1", variables: { i: 1, "j values": "1,2,3", subtotal: 6 }, explanation: "j starts at i=1: 1+2+3 = 6" },
          { iteration: "i=2", variables: { i: 2, "j values": "2,3", subtotal: 5 }, explanation: "j starts at i=2: 2+3 = 5" },
          { iteration: "i=3", variables: { i: 3, "j values": "3", subtotal: 3 }, explanation: "j starts at i=3: 3" },
          { iteration: "Final", variables: { total: 14 }, explanation: "6 + 5 + 3 = 14" },
        ],
      },
      // ---- FIX exercises ----
      {
        type: "fix",
        title: "Fix the loop: same variable name",
        difficulty: "Easy",
        code: `for (int i = 0; i < 3; i++) {
    for (int i = 0; i < 3; i++) {
        cout << "* ";
    }
    cout << endl;
}`,
        bugDescription: "This should print a 3×3 grid of stars, but the inner loop uses the same variable name as the outer loop, causing unexpected behavior.",
        answer: "Change the inner loop variable from i to j: for (int j = 0; j < 3; j++)",
        hint: "Both loops use 'i' as their counter. The inner 'i' shadows the outer 'i', so the outer loop doesn't work correctly.",
      },
      {
        type: "fix",
        title: "Fix the loop: missing newline",
        difficulty: "Easy",
        code: `for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 4; j++) {
        cout << "*";
    }
}`,
        bugDescription: "This should print a 3×4 grid (3 rows, 4 columns each) but instead all 12 stars appear on one line: ************",
        answer: "Add cout << endl; after the inner for loop (inside the outer loop, after the inner loop's closing brace)",
        hint: "After printing all 4 stars in a row, you need to move to the next line before the outer loop starts the next row.",
      },
      {
        type: "fix",
        title: "Fix the loop: wrong triangle direction",
        difficulty: "Medium",
        code: `for (int i = 1; i <= 4; i++) {
    for (int j = 0; j < 4; j++) {
        cout << "*";
    }
    cout << endl;
}`,
        bugDescription: "This should print a growing triangle (1 star, then 2, then 3, then 4) but instead prints 4 stars on every row.",
        answer: "Change j < 4 to j < i in the inner loop condition",
        hint: "The inner loop always runs 4 times regardless of which row we're on. We want row i to have i stars.",
      },
      {
        type: "fix",
        title: "Fix the loop: inverted triangle off by one",
        difficulty: "Medium",
        code: `for (int i = 5; i >= 1; i--) {
    for (int j = 1; j <= i; j++) {
        cout << "*";
    }
    cout << endl;
}`,
        bugDescription: "This should print a triangle going from 4 stars down to 1, but it starts at 5 stars instead.",
        answer: "Change i = 5 to i = 4 in the outer loop initialization",
        hint: "The outer loop starts at 5, so the first row gets 5 stars. We want to start at 4.",
      },
      {
        type: "fix",
        title: "Fix the loop: checkerboard pattern",
        difficulty: "Hard",
        code: `for (int i = 0; i < 4; i++) {
    for (int j = 0; j < 4; j++) {
        if ((i + j) % 2 == 0) {
            cout << "X";
        } else {
            cout << "O";
        }
    }
}`,
        bugDescription: "This should print a 4×4 checkerboard pattern with X and O alternating, with each row on a separate line, but everything prints on one line.",
        answer: "Add cout << endl; after the inner for loop's closing brace",
        hint: "The checkerboard logic is correct (i+j even = X, odd = O), but there's no line break between rows.",
      },
      // ---- FILL IN exercises ----
      {
        type: "fillin",
        title: "Complete: 3×3 star grid",
        difficulty: "Easy",
        code: `for (int i = 0; i < 3; ___) {
    for (int j = 0; j < 3; ___) {
        cout << "* ";
    }
    cout << endl;
}`,
        description: "Fill in the two update expressions to make this print a 3×3 grid of stars.",
        answer: "i++, j++",
        acceptableAnswers: ["i++, j++", "i++,j++", "i++ , j++"],
        hint: "Both loops need to increment their counter by 1 each iteration.",
      },
      {
        type: "fillin",
        title: "Complete: right triangle",
        difficulty: "Easy",
        code: `for (int i = 1; i <= 5; i++) {
    for (int j = 0; j < ___; j++) {
        cout << "#";
    }
    cout << endl;
}`,
        description: "Fill in the inner loop condition so row 1 has 1 hash, row 2 has 2, row 3 has 3, etc.",
        answer: "i",
        acceptableAnswers: ["i"],
        hint: "On row i, we want i hashes. So the inner loop should run i times. What condition makes j go from 0 to i-1?",
      },
      {
        type: "fillin",
        title: "Complete: multiplication table",
        difficulty: "Medium",
        code: `for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= 5; j++) {
        cout << ___ << "\\t";
    }
    cout << endl;
}`,
        description: "Fill in the expression to print a 5×5 multiplication table (each cell shows i times j).",
        answer: "i * j",
        acceptableAnswers: ["i * j", "i*j", "i *j", "i* j"],
        hint: "In a multiplication table, each cell shows the product of the row number and column number.",
      },
      {
        type: "fillin",
        title: "Complete: draw a grid of circles in raylib",
        difficulty: "Medium",
        code: `for (int row = 0; row < 5; row++) {
    for (int col = 0; col < 5; col++) {
        int x = 50 + ___ * 60;
        int y = 50 + ___ * 60;
        DrawCircle(x, y, 20, RED);
    }
}`,
        description: "Fill in the two blanks to position each circle in a 5×5 grid, spaced 60 pixels apart.",
        answer: "col, row",
        acceptableAnswers: ["col, row", "col,row"],
        hint: "x position changes with columns (left to right), y position changes with rows (top to bottom).",
      },
      {
        type: "fillin",
        title: "Complete: inverted triangle",
        difficulty: "Medium",
        code: `for (int i = ___; i >= 1; ___) {
    for (int j = 0; j < i; j++) {
        cout << "*";
    }
    cout << endl;
}`,
        description: "Fill in the blanks so this prints 5 stars, then 4, then 3, then 2, then 1.",
        answer: "5, i--",
        acceptableAnswers: ["5, i--", "5,i--"],
        hint: "We need i to start at 5 (for 5 stars) and decrease by 1 each row until i reaches 1.",
      },
      {
        type: "fillin",
        title: "Complete: number pyramid",
        difficulty: "Hard",
        code: `for (int i = 1; i <= 4; i++) {
    for (int j = 0; j < 4 - i; j++) {
        cout << " ";
    }
    for (int j = 0; j < ___; j++) {
        cout << i;
    }
    cout << endl;
}
// Should print:
//    1
//   22
//  333
// 4444`,
        description: "Fill in the blank for how many times to print the number i on each row.",
        answer: "i",
        acceptableAnswers: ["i"],
        hint: "Row 1 prints one '1', row 2 prints two '2's, row 3 prints three '3's. The count matches the row number.",
      },
      {
        type: "fillin",
        title: "Complete: diamond top half",
        difficulty: "Hard",
        code: `int n = 5;
for (int i = 1; i <= n; i++) {
    for (int j = 0; j < ___ - ___; j++) {
        cout << " ";
    }
    for (int j = 0; j < 2 * i - 1; j++) {
        cout << "*";
    }
    cout << endl;
}`,
        description: "Fill in the two blanks for the spaces loop to center-align the stars into a diamond shape. Row 1 has (n-1) spaces, row 2 has (n-2), etc.",
        answer: "n, i",
        acceptableAnswers: ["n, i", "n,i"],
        hint: "Row i needs (n - i) spaces before the stars. When i=1, we need 4 spaces. When i=5, we need 0 spaces.",
      },
    ],
  },
];

const comparisonExercises = [
  {
    title: "Which loop should you use?",
    scenarios: [
      {
        situation: "Print numbers 1 through 100",
        bestLoop: "for",
        explanation: "You know exactly how many times to loop (100). For loops are ideal when the count is known.",
      },
      {
        situation: "Keep reading user input until they type 'quit'",
        bestLoop: "while",
        explanation: "You don't know how many inputs the user will give. A while loop checks the condition before each iteration.",
      },
      {
        situation: "Show a menu at least once, then repeat if the user wants",
        bestLoop: "dowhile",
        explanation: "You always want to show the menu at least once. Do-while guarantees the body runs before checking.",
      },
      {
        situation: "The raylib game loop (while window is open)",
        bestLoop: "while",
        explanation: "while (!WindowShouldClose()) is the standard raylib pattern. We check if the window is still open before each frame.",
      },
      {
        situation: "Draw 10 equally spaced circles across the screen",
        bestLoop: "for",
        explanation: "You know exactly how many circles (10) and the spacing is calculated from the loop counter. For loop is natural here.",
      },
      {
        situation: "Ask the user for a password, give them up to 3 attempts",
        bestLoop: "dowhile",
        explanation: "You need to get input at least once before you can check it. A do-while runs first, then checks if more attempts are needed.",
      },
      {
        situation: "Calculate the sum of numbers in an array of size 20",
        bestLoop: "for",
        explanation: "You know the exact size (20 elements). A for loop with i from 0 to 19 is the natural choice for iterating over arrays.",
      },
      {
        situation: "Keep moving a character until it hits a wall (unknown distance)",
        bestLoop: "while",
        explanation: "You don't know how far the wall is. A while loop checks 'has the character hit the wall?' before each movement step.",
      },
    ],
  },
];

export { loopTopics, comparisonExercises };
