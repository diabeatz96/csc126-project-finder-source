import React from "react";
import { Button, Card } from "../components/ui";
import { ExternalLink } from "lucide-react";

const wobblyRadius = "15px 255px 15px 225px / 225px 15px 255px 15px";

function SetupStep({ number, title, children }) {
  return (
    <div
      className={`
        relative bg-paper border-[3px] border-foreground p-6 pt-8 mb-6
        ${number % 2 === 0 ? "rotate-[0.5deg]" : "-rotate-[0.5deg]"}
      `}
      style={{ borderRadius: wobblyRadius }}
    >
      {/* Step Number */}
      <div
        className="absolute -top-4 left-6 w-10 h-10 flex items-center justify-center bg-accent text-white font-kalam font-bold text-xl border-2 border-foreground shadow-sketch-hover"
        style={{ borderRadius: "50% 45% 55% 48% / 48% 52% 45% 55%" }}
      >
        {number}
      </div>

      <h3 className="font-kalam text-xl font-bold mb-3">{title}</h3>
      <div className="font-hand text-foreground/80 leading-relaxed">{children}</div>
    </div>
  );
}

function Setup() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-kalam text-3xl md:text-4xl font-bold text-foreground mb-2">
          Setting Up Raylib
        </h1>
        <p className="font-hand text-lg text-foreground/70">
          Follow these steps to get raylib running on your computer.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-2">
        <SetupStep number={1} title="Download the Raylib Installer (Windows)">
          <p className="mb-3">
            Go to{" "}
            <a
              href="https://www.raylib.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent underline"
            >
              raylib.com
            </a>{" "}
            and download the Windows installer. This bundles everything you need:
            the raylib library, a MinGW C/C++ compiler, and a Notepad++ editor
            with build shortcuts.
          </p>
          <p>
            Alternatively, if you already use Visual Studio Code, you can
            download just the raylib library and set up a project manually.
          </p>
        </SetupStep>

        <SetupStep number={2} title="Run the Installer">
          <p className="mb-3">
            Run the downloaded installer and accept the default settings. It will
            install to <code className="font-mono bg-muted px-1 py-0.5 rounded">C:\raylib</code> by default. The installer includes:
          </p>
          <pre className="code-block text-sm">
{`C:\\raylib\\
  ├── raylib\\          (the library files)
  ├── mingw\\           (the C/C++ compiler)
  ├── npp\\             (Notepad++ editor)
  └── projects\\        (example projects to start from)`}
          </pre>
        </SetupStep>

        <SetupStep number={3} title="Open Your First Project">
          <p>
            Navigate to <code className="font-mono bg-muted px-1 py-0.5 rounded">C:\raylib\projects\</code> and open one of the
            example project folders. You'll see a <code className="font-mono bg-muted px-1 py-0.5 rounded">.cpp</code> file. Open it
            with the included Notepad++ (which has a build button already set up)
            or your preferred editor.
          </p>
        </SetupStep>

        <SetupStep number={4} title="Write Your First Program">
          <p className="mb-3">
            Replace the contents of the .cpp file with this minimal example:
          </p>
          <pre className="code-block text-sm">
{`#include "raylib.h"

int main() {
    InitWindow(800, 450, "Hello Raylib!");
    SetTargetFPS(60);

    while (!WindowShouldClose()) {
        BeginDrawing();
            ClearBackground(RAYWHITE);
            DrawText("It works!", 350, 200, 30, DARKGRAY);
            DrawCircle(400, 300, 40, RED);
        EndDrawing();
    }

    CloseWindow();
    return 0;
}`}
          </pre>
        </SetupStep>

        <SetupStep number={5} title="Compile and Run">
          <p className="mb-3">
            If using the included Notepad++, press <strong className="text-accent">F6</strong> to compile
            and run. If using a terminal, navigate to your project folder and run:
          </p>
          <pre className="code-block text-sm">
{`g++ -o game main.cpp -lraylib -lopengl32 -lgdi32 -lwinmm
./game`}
          </pre>
          <p className="mt-3">
            You should see a window pop up with "It works!" and a red circle.
            Congratulations, you're ready to start your project!
          </p>
        </SetupStep>
      </div>

      {/* VS Code Card */}
      <Card className="mt-8 -rotate-1" variant="muted">
        <h3 className="font-kalam text-xl font-bold mb-2">Using VS Code Instead?</h3>
        <p className="font-hand text-foreground/80">
          If you prefer Visual Studio Code, raylib provides project templates.
          Download the VS Code template from the raylib GitHub releases page,
          extract it, open the folder in VS Code, and press F5 to build and run.
          Make sure you have the C/C++ extension installed.
        </p>
      </Card>

      {/* Mac/Linux Card */}
      <Card className="mt-4 rotate-1" variant="postit">
        <h3 className="font-kalam text-xl font-bold mb-3">Mac or Linux?</h3>
        <div className="font-hand text-foreground/80 space-y-4">
          <div>
            <strong className="text-foreground">Mac:</strong> Install with Homebrew:{" "}
            <code className="font-mono bg-white/50 px-1 py-0.5 rounded">brew install raylib</code>, then compile with:
            <pre className="code-block text-xs mt-2">g++ -o game main.cpp -lraylib -framework OpenGL -framework Cocoa -framework IOKit -framework CoreVideo</pre>
          </div>
          <div>
            <strong className="text-foreground">Linux:</strong> Install with your package manager (e.g.,{" "}
            <code className="font-mono bg-white/50 px-1 py-0.5 rounded">sudo apt install libraylib-dev</code> on Ubuntu/Debian), then compile with:
            <pre className="code-block text-xs mt-2">g++ -o game main.cpp -lraylib -lGL -lm -lpthread -ldl -lrt -lX11</pre>
          </div>
        </div>
      </Card>

      {/* Resources Card */}
      <Card className="mt-4 -rotate-1" decoration="tack">
        <h3 className="font-kalam text-xl font-bold mb-3 text-secondary">
          Helpful Resources
        </h3>
        <div className="font-hand space-y-2">
          {[
            { href: "https://www.raylib.com/examples.html", label: "Raylib Examples", desc: "140+ code examples with live demos" },
            { href: "https://www.raylib.com/cheatsheet/cheatsheet.html", label: "Raylib Cheatsheet", desc: "Quick reference for all functions" },
            { href: "https://github.com/raysan5/raylib", label: "Raylib GitHub", desc: "Source code and releases" },
            { href: "https://github.com/raysan5/raylib/wiki", label: "Raylib Wiki", desc: "Guides, FAQ, and platform-specific instructions" },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors"
            >
              <ExternalLink size={16} strokeWidth={2.5} className="flex-shrink-0" />
              <span>
                <span className="text-secondary hover:text-accent underline">{link.label}</span>
                <span className="text-foreground/60"> - {link.desc}</span>
              </span>
            </a>
          ))}
        </div>
      </Card>

      {/* Bottom CTA */}
      <div className="flex flex-wrap gap-4 justify-center mt-10 mb-8">
        <Button to="/quiz" size="lg">
          Find Your Project
        </Button>
        <Button to="/api" variant="secondary" size="lg">
          API Reference
        </Button>
      </div>
    </div>
  );
}

export default Setup;
