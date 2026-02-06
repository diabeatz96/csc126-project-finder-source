import React from "react";
import { Button, Card } from "../components/ui";

const wobblyRadius = "255px 15px 225px 15px / 15px 225px 15px 255px";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="text-center py-12 md:py-16 relative">
        {/* Badge */}
        <div
          className="inline-block px-4 py-2 bg-postit border-2 border-foreground text-foreground font-hand text-sm md:text-base mb-6 rotate-2 shadow-sketch-hover"
          style={{ borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px" }}
        >
          CSC 126 SPRING 2026
        </div>

        {/* Title */}
        <h1 className="font-kalam text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
          Find Your Perfect
          <br />
          <span className="relative inline-block">
            C++ Project
            <span
              className="text-accent inline-block ml-2"
              style={{ transform: "rotate(12deg)" }}
            >
              !
            </span>
          </span>
        </h1>

        {/* Description */}
        <p className="font-hand text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          Take a short quiz based on your interests, and we'll match you with a
          C++ project you'll actually enjoy building. All projects use raylib, a
          beginner-friendly graphics library that gets you out of the terminal
          and into visual, interactive programs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center relative">
          <Button to="/quiz" size="lg">
            Take the Quiz
          </Button>
          <Button to="/api" variant="secondary" size="lg">
            Browse Raylib API
          </Button>

          {/* Hand-drawn arrow pointing to CTA (desktop only) */}
          <svg
            className="hidden md:block absolute -right-16 top-0 w-16 h-16 text-foreground/40"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 4"
          >
            <path d="M80 20 Q60 40 40 50 Q20 60 10 80" />
            <path d="M10 80 L15 70 M10 80 L20 78" />
          </svg>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card decoration="tape" hover className="-rotate-1">
          <div
            className="w-14 h-14 flex items-center justify-center text-3xl mb-4 bg-purple-100 border-2 border-foreground"
            style={{ borderRadius: "50% 45% 55% 48% / 48% 52% 45% 55%" }}
          >
            🧠
          </div>
          <h3 className="font-kalam text-xl font-bold mb-2">
            Research-Backed Quiz
          </h3>
          <p className="font-hand text-foreground/70">
            8 questions based on Holland's RIASEC interest model, adapted for
            computer science. Discover what kind of programmer you are and what
            motivates you.
          </p>
        </Card>

        <Card decoration="tack" hover variant="postit" className="rotate-1">
          <div
            className="w-14 h-14 flex items-center justify-center text-3xl mb-4 bg-blue-100 border-2 border-foreground"
            style={{ borderRadius: "48% 52% 45% 55% / 50% 45% 55% 48%" }}
          >
            🎮
          </div>
          <h3 className="font-kalam text-xl font-bold mb-2">
            Personalized Projects
          </h3>
          <p className="font-hand text-foreground/70">
            Get matched with C++ projects tailored to your interests. Every
            project uses the concepts you've already learned: variables,
            arithmetic, and if statements.
          </p>
        </Card>

        <Card decoration="tape" hover className="-rotate-1">
          <div
            className="w-14 h-14 flex items-center justify-center text-3xl mb-4 bg-green-100 border-2 border-foreground"
            style={{ borderRadius: "55% 48% 50% 45% / 45% 55% 48% 52%" }}
          >
            📖
          </div>
          <h3 className="font-kalam text-xl font-bold mb-2">
            Beginner Raylib API Reference
          </h3>
          <p className="font-hand text-foreground/70">
            A curated, student-friendly API reference with plain-English
            descriptions, parameter explanations, and copy-paste code examples
            for every function you'll need.
          </p>
        </Card>
      </div>

      {/* Why Raylib Section */}
      <div className="text-center mt-20 mb-8">
        <h2 className="font-kalam text-3xl md:text-4xl font-bold text-foreground mb-3">
          Why Raylib?
        </h2>
        <p className="font-hand text-lg md:text-xl text-foreground/70 max-w-xl mx-auto">
          Raylib was designed by a professor for students who had never coded
          before. No classes, no pointers, no templates. Just function calls
          with obvious names.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card hover className="rotate-1">
          <h3 className="font-kalam text-xl font-bold mb-2">
            12 Lines to a Window
          </h3>
          <p className="font-hand text-foreground/70">
            Open a window, draw shapes, and handle input in about 12 lines of
            code. The simplest of any C++ graphics library.
          </p>
        </Card>

        <Card hover variant="muted" className="-rotate-1">
          <h3 className="font-kalam text-xl font-bold mb-2">No OOP Required</h3>
          <p className="font-hand text-foreground/70">
            Raylib is a C library that works in C++ files. Everything is a plain
            function call. DrawCircle(x, y, radius, RED) does exactly what it
            sounds like.
          </p>
        </Card>

        <Card hover className="rotate-1">
          <h3 className="font-kalam text-xl font-bold mb-2">
            Only One New Concept
          </h3>
          <p className="font-hand text-foreground/70">
            The only thing beyond arithmetic and if statements is a while loop
            for the game loop. That's it. One new idea and you're making
            graphics.
          </p>
        </Card>
      </div>

      {/* CTA Section */}
      <div
        className="text-center mt-16 p-8 md:p-10 bg-paper border-[3px] border-foreground relative"
        style={{ borderRadius: wobblyRadius }}
      >
        {/* Speech bubble tail */}
        <div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0"
          style={{
            borderLeft: "16px solid transparent",
            borderRight: "16px solid transparent",
            borderTop: "16px solid #2d2d2d",
          }}
        />
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0"
          style={{
            borderLeft: "12px solid transparent",
            borderRight: "12px solid transparent",
            borderTop: "12px solid white",
          }}
        />

        <h2 className="font-kalam text-2xl md:text-3xl font-bold mb-3">
          Ready to find your project?
        </h2>
        <p className="font-hand text-lg text-foreground/70 mb-6">
          The quiz takes about 2 minutes. No wrong answers.
        </p>
        <Button to="/quiz" size="lg">
          Start the Quiz
        </Button>
      </div>
    </div>
  );
}

export default Home;
