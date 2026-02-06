import React, { useState, useMemo } from "react";
import { apiReference, colorConstants, keyConstants } from "../data/apiReference";
import { Card, Input, Badge } from "../components/ui";
import { Search, ChevronDown } from "lucide-react";

function FunctionCard({ fn }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`
        mb-3 border-2 border-foreground bg-paper overflow-hidden
        transition-all duration-100
        ${open ? "shadow-sketch" : "shadow-sketch-subtle hover:shadow-sketch"}
      `}
      style={{ borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px" }}
    >
      {/* Header */}
      <div
        className="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-muted/50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-mono text-secondary font-semibold">{fn.name}()</span>
        <div className="flex items-center gap-2">
          <Badge variant="muted" className="font-mono text-xs">
            {fn.returns}
          </Badge>
          <ChevronDown
            size={18}
            className={`text-foreground/50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      {/* Body */}
      {open && (
        <div className="px-4 pb-4 border-t-2 border-dashed border-foreground/20">
          <p className="font-hand text-foreground/80 mt-3 mb-3">{fn.description}</p>

          {/* Signature */}
          <pre className="code-block text-sm">{fn.signature}</pre>

          {/* Parameters */}
          {fn.params.length > 0 && (
            <div className="mt-4">
              <div className="font-kalam text-xs font-bold text-foreground/60 uppercase tracking-wide mb-2">
                Parameters
              </div>
              <div className="space-y-1">
                {fn.params.map((p, i) => (
                  <div key={i} className="flex flex-wrap gap-2 font-hand text-sm">
                    <span className="font-mono font-semibold text-accent">{p.name}</span>
                    <span className="font-mono text-foreground/50">({p.type})</span>
                    <span className="text-foreground/70">{p.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Example */}
          <div className="mt-4">
            <div className="font-kalam text-xs font-bold text-foreground/60 uppercase tracking-wide mb-2">
              Example
            </div>
            <pre className="code-block text-sm text-green-700">{fn.example}</pre>
          </div>
        </div>
      )}
    </div>
  );
}

function ApiRef() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("functions");

  const filtered = useMemo(() => {
    if (!search.trim()) return apiReference;
    const q = search.toLowerCase();
    return apiReference
      .map((cat) => ({
        ...cat,
        functions: cat.functions.filter(
          (fn) =>
            fn.name.toLowerCase().includes(q) ||
            fn.description.toLowerCase().includes(q) ||
            fn.signature.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.functions.length > 0);
  }, [search]);

  const totalFunctions = apiReference.reduce(
    (acc, cat) => acc + cat.functions.length,
    0
  );

  const tabs = [
    { id: "functions", label: "Functions" },
    { id: "colors", label: "Colors" },
    { id: "keys", label: "Keys" },
    { id: "template", label: "Template" },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="font-kalam text-3xl md:text-4xl font-bold text-foreground mb-2">
          Raylib API Reference
        </h1>
        <p className="font-hand text-lg text-foreground/70">
          A curated reference of {totalFunctions} beginner-friendly raylib
          functions. Click any function to expand its details, parameters, and
          usage examples.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-4 py-2 font-hand text-lg
              border-2 border-foreground
              transition-all duration-100
              ${
                activeTab === tab.id
                  ? "bg-postit shadow-sketch-hover -rotate-1"
                  : "bg-paper hover:bg-muted hover:rotate-1"
              }
              ${i % 2 === 0 ? "rotate-[0.5deg]" : "-rotate-[0.5deg]"}
            `}
            style={{ borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px" }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Functions Tab */}
      {activeTab === "functions" && (
        <>
          {/* Search */}
          <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm py-4 mb-4 -mx-4 px-4">
            <Input
              type="text"
              placeholder="Search functions... (e.g. DrawCircle, IsKeyPressed, collision)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              icon={<Search size={20} strokeWidth={2.5} />}
            />
          </div>

          {filtered.map((cat, i) => (
            <div key={i} className="mb-8">
              <h2 className="font-kalam text-2xl font-bold text-foreground mb-1">
                {cat.category}
              </h2>
              <p className="font-hand text-foreground/70 mb-4">{cat.description}</p>
              {cat.functions.map((fn, j) => (
                <FunctionCard key={j} fn={fn} />
              ))}
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <p className="font-hand text-lg text-foreground/60">
                No functions match "{search}". Try a different search term.
              </p>
            </div>
          )}
        </>
      )}

      {/* Colors Tab */}
      {activeTab === "colors" && (
        <div>
          <h2 className="font-kalam text-2xl font-bold text-foreground mb-1">
            Built-in Color Constants
          </h2>
          <p className="font-hand text-foreground/70 mb-6">
            Raylib comes with named color constants you can use anywhere a Color
            parameter is expected. No need to remember RGB values.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
            {colorConstants.map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 bg-paper border-2 border-foreground"
                style={{ borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px" }}
              >
                <div
                  className="w-8 h-8 flex-shrink-0 border-2 border-foreground"
                  style={{
                    background: c.hex,
                    borderRadius: "50% 45% 55% 48% / 48% 52% 45% 55%",
                  }}
                />
                <div>
                  <div className="font-mono text-sm font-semibold">{c.name}</div>
                  <div className="font-hand text-xs text-foreground/60">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <Card variant="muted">
            <h3 className="font-kalam text-xl font-bold mb-2">Custom Colors</h3>
            <p className="font-hand text-foreground/70 mb-3">
              You can create your own colors using the Color struct:
            </p>
            <pre className="code-block text-sm">
{`// Create a custom color: (Color){red, green, blue, alpha}
Color myColor = (Color){255, 128, 0, 255};   // orange
Color semiTransparent = (Color){0, 0, 255, 128};  // 50% transparent blue

// Or use Fade() to make any color transparent
Color ghostRed = Fade(RED, 0.5f);  // 50% transparent red`}
            </pre>
          </Card>
        </div>
      )}

      {/* Keys Tab */}
      {activeTab === "keys" && (
        <div>
          <h2 className="font-kalam text-2xl font-bold text-foreground mb-1">
            Key and Mouse Constants
          </h2>
          <p className="font-hand text-foreground/70 mb-6">
            Use these constants with IsKeyPressed(), IsKeyDown(), and
            IsMouseButtonPressed().
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
            {keyConstants.map((k, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-2"
              >
                <span className="font-mono text-sm font-semibold text-accent whitespace-nowrap">
                  {k.name}
                </span>
                <span className="font-hand text-foreground/70">{k.desc}</span>
              </div>
            ))}
          </div>

          <Card variant="postit" className="-rotate-1">
            <h3 className="font-kalam text-xl font-bold mb-2">
              IsKeyPressed vs IsKeyDown
            </h3>
            <div className="font-hand text-foreground/80 leading-relaxed mb-4">
              <p className="mb-3">
                <span className="font-bold text-accent">IsKeyPressed</span> returns true on a{" "}
                <em>single frame</em> when the key is first pushed. Use this for one-time actions like
                jumping or selecting a menu option.
              </p>
              <p>
                <span className="font-bold text-accent">IsKeyDown</span> returns true on{" "}
                <em>every frame</em> while the key is held. Use this for continuous actions like
                moving a character left or right.
              </p>
            </div>
            <pre className="code-block text-sm">
{`// One-time action: jump when space is pressed
if (IsKeyPressed(KEY_SPACE)) {
    velocityY = -10;
}

// Continuous action: move right while holding right arrow
if (IsKeyDown(KEY_RIGHT)) {
    playerX += 5;
}`}
            </pre>
          </Card>
        </div>
      )}

      {/* Template Tab */}
      {activeTab === "template" && (
        <div>
          <h2 className="font-kalam text-2xl font-bold text-foreground mb-1">
            Raylib Starter Template
          </h2>
          <p className="font-hand text-foreground/70 mb-6">
            Copy this into your main.cpp file as a starting point for any
            project. Every raylib program follows this same basic structure.
          </p>

          <pre className="code-block text-sm mb-8">
{`#include "raylib.h"

int main() {
    // --- SETUP ---
    // Create a window: width, height, title
    InitWindow(800, 450, "My Project");

    // Limit to 60 frames per second
    SetTargetFPS(60);

    // --- YOUR VARIABLES GO HERE ---
    int ballX = 400;
    int ballY = 225;
    int speedX = 4;
    int speedY = 3;

    // --- GAME LOOP ---
    // This runs ~60 times per second until the window is closed
    while (!WindowShouldClose()) {

        // --- UPDATE (game logic) ---
        // Move the ball
        ballX = ballX + speedX;
        ballY = ballY + speedY;

        // Bounce off walls
        if (ballX > 790 || ballX < 10) {
            speedX = speedX * -1;
        }
        if (ballY > 440 || ballY < 10) {
            speedY = speedY * -1;
        }

        // --- DRAW (visuals) ---
        BeginDrawing();

            // Clear the screen (erase last frame)
            ClearBackground(RAYWHITE);

            // Draw the ball
            DrawCircle(ballX, ballY, 10, RED);

            // Draw some text
            DrawText("Bouncing Ball!", 10, 10, 20, DARKGRAY);

        EndDrawing();
    }

    // --- CLEANUP ---
    CloseWindow();
    return 0;
}`}
          </pre>

          <Card variant="default" decoration="tack" className="rotate-1">
            <h3 className="font-kalam text-xl font-bold mb-3 text-green-700">
              The Pattern
            </h3>
            <div className="font-hand text-foreground/80 leading-relaxed space-y-2">
              <p>Every raylib program follows the same pattern:</p>
              <ul className="space-y-1 ml-4">
                <li><span className="font-bold">1. Setup</span> - InitWindow() and SetTargetFPS() plus your variables</li>
                <li><span className="font-bold">2. Game Loop</span> - A while loop that runs until the window closes</li>
                <li className="ml-4"><span className="font-bold">2a. Update</span> - Change your variables (move things, check collisions)</li>
                <li className="ml-4"><span className="font-bold">2b. Draw</span> - BeginDrawing(), draw everything, EndDrawing()</li>
                <li><span className="font-bold">3. Cleanup</span> - CloseWindow() at the end</li>
              </ul>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

export default ApiRef;
