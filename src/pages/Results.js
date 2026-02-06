import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import projectRecommendations from "../data/projectRecommendations";
import { Button, Card, Badge } from "../components/ui";
import { ChevronRight, Printer, Download } from "lucide-react";

function Collapsible({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mt-4">
      <button
        className={`
          flex items-center gap-2
          font-hand text-lg text-secondary
          hover:text-accent
          transition-colors
        `}
        onClick={() => setOpen(!open)}
      >
        <ChevronRight
          size={18}
          strokeWidth={3}
          className={`transition-transform duration-200 ${open ? "rotate-90" : ""}`}
        />
        {title}
      </button>
      {open && <div className="mt-2 ml-6">{children}</div>}
    </div>
  );
}

function ProjectCard({ project, index }) {
  const difficultyVariant =
    project.difficulty.toLowerCase() === "beginner"
      ? "beginner"
      : project.difficulty.toLowerCase() === "intermediate"
      ? "intermediate"
      : "advanced";

  return (
    <Card
      className={`mb-6 print:rotate-0 print:shadow-none print:border print:break-inside-avoid ${index % 2 === 0 ? "-rotate-[0.5deg]" : "rotate-[0.5deg]"}`}
      decoration={index % 2 === 0 ? "tape" : "tack"}
    >
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <h3 className="font-kalam text-xl md:text-2xl font-bold text-foreground">
          {project.name}
        </h3>
        <Badge variant={difficultyVariant}>{project.difficulty}</Badge>
      </div>

      {/* Description */}
      <p className="font-hand text-lg text-foreground/80 leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Concepts */}
      <div className="mb-4">
        <div className="font-kalam text-sm font-bold text-foreground/60 uppercase tracking-wide mb-2">
          C++ Concepts Used
        </div>
        <div className="flex flex-wrap gap-2">
          {project.concepts.map((c, i) => (
            <Badge key={i} variant="concept">
              {c}
            </Badge>
          ))}
        </div>
      </div>

      {/* Raylib Functions */}
      <div className="mb-2">
        <div className="font-kalam text-sm font-bold text-foreground/60 uppercase tracking-wide mb-2">
          Raylib Functions You'll Need
        </div>
        <div className="flex flex-wrap gap-2">
          {project.raylibFunctions.map((fn, i) => (
            <Link key={i} to="/api" className="print:pointer-events-none">
              <Badge variant="function">{fn}()</Badge>
            </Link>
          ))}
        </div>
      </div>

      {/* Steps - always visible in print */}
      <div className="border-t-2 border-dashed border-foreground/20 pt-4 mt-4">
        <div className="hidden print:block">
          <div className="font-kalam text-sm font-bold text-foreground/60 uppercase tracking-wide mb-2">
            Step-by-step roadmap
          </div>
          <ol className="list-none space-y-2">
            {project.steps.map((step, i) => (
              <li key={i} className="flex gap-3 font-hand text-foreground/80 text-sm">
                <span className="font-bold">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-4">
            <div className="font-kalam text-sm font-bold text-foreground/60 uppercase tracking-wide mb-2">
              Starter hint
            </div>
            <p className="font-hand text-foreground/80 text-sm">
              <span className="font-bold">Hint: </span>
              {project.starterHint}
            </p>
          </div>
        </div>

        {/* Collapsibles - hidden in print */}
        <div className="print:hidden">
          <Collapsible title="Step-by-step roadmap" defaultOpen={false}>
            <ol className="list-none space-y-3">
              {project.steps.map((step, i) => (
                <li key={i} className="flex gap-3 font-hand text-foreground/80">
                  <span
                    className="flex-shrink-0 w-7 h-7 flex items-center justify-center bg-muted border-2 border-foreground text-sm font-bold"
                    style={{ borderRadius: "50% 45% 55% 48% / 48% 52% 45% 55%" }}
                  >
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </Collapsible>

          <Collapsible title="Starter hint" defaultOpen={false}>
            <div
              className="p-4 bg-postit border-2 border-foreground font-hand text-foreground/80"
              style={{ borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px" }}
            >
              <span className="font-bold text-accent">Hint: </span>
              {project.starterHint}
            </div>
          </Collapsible>
        </div>
      </div>
    </Card>
  );
}

function Results() {
  const { type } = useParams();
  const data = projectRecommendations[type];

  const handlePrint = () => {
    window.print();
  };

  const handleSaveAsText = () => {
    if (!data) return;

    let content = `CSC 126 PROJECT FINDER RESULTS\n`;
    content += `${"=".repeat(40)}\n\n`;
    content += `Your Result: ${data.title} ${data.emoji}\n`;
    content += `${data.tagline}\n\n`;
    content += `${data.description}\n\n`;
    content += `${"=".repeat(40)}\n`;
    content += `YOUR RECOMMENDED PROJECTS\n`;
    content += `${"=".repeat(40)}\n\n`;

    data.projects.forEach((project, i) => {
      content += `${i + 1}. ${project.name} (${project.difficulty})\n`;
      content += `${"-".repeat(30)}\n`;
      content += `${project.description}\n\n`;
      content += `C++ Concepts: ${project.concepts.join(", ")}\n`;
      content += `Raylib Functions: ${project.raylibFunctions.map(fn => fn + "()").join(", ")}\n\n`;
      content += `Steps:\n`;
      project.steps.forEach((step, j) => {
        content += `  ${j + 1}. ${step}\n`;
      });
      content += `\nHint: ${project.starterHint}\n\n`;
      content += `${"=".repeat(40)}\n\n`;
    });

    content += `\nGenerated by CSC 126 Project Finder\n`;
    content += `College of Staten Island, CUNY\n`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `csc126-${type}-projects.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!data) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="font-kalam text-2xl font-bold mb-2">Result not found</h2>
        <p className="font-hand text-lg text-foreground/70 mb-6">
          Looks like something went wrong. Try taking the quiz again.
        </p>
        <Button to="/quiz">Retake Quiz</Button>
      </div>
    );
  }

  return (
    <div className="print:bg-white">
      {/* Print/Save Buttons - hidden when printing */}
      <div className="print:hidden flex justify-end gap-3 mb-4">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 font-hand text-foreground/70 hover:text-foreground border-2 border-dashed border-foreground/30 hover:border-foreground/50 rounded-lg transition-colors"
        >
          <Printer size={18} strokeWidth={2.5} />
          Print
        </button>
        <button
          onClick={handleSaveAsText}
          className="flex items-center gap-2 px-4 py-2 font-hand text-foreground/70 hover:text-foreground border-2 border-dashed border-foreground/30 hover:border-foreground/50 rounded-lg transition-colors"
        >
          <Download size={18} strokeWidth={2.5} />
          Save as Text
        </button>
      </div>

      {/* Header */}
      <div className="text-center py-8 md:py-12 print:py-4">
        <div className="text-6xl md:text-7xl mb-4 print:text-5xl print:mb-2 animate-bounce-gentle inline-block print:animate-none">
          {data.emoji}
        </div>
        <h1
          className="font-kalam text-3xl md:text-4xl lg:text-5xl font-bold mb-2 print:text-3xl"
          style={{ color: data.color }}
        >
          {data.title}
        </h1>
        <p className="font-hand text-xl md:text-2xl text-foreground/80 mb-4 max-w-lg mx-auto print:text-lg print:mb-2">
          {data.tagline}
        </p>
        <p className="font-hand text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed print:text-sm">
          {data.description}
        </p>

        {/* Print header info */}
        <div className="hidden print:block mt-4 text-sm text-foreground/50 border-t border-foreground/20 pt-2">
          CSC 126 Project Finder - College of Staten Island, CUNY
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-3xl mx-auto">
        <h2 className="font-kalam text-2xl md:text-3xl font-bold mb-2 print:text-xl">
          Your Recommended Projects
        </h2>
        <p className="font-hand text-lg text-foreground/70 mb-8 print:text-sm print:mb-4">
          Pick any of these to work on. Each one uses the C++ concepts you already know
          plus raylib for graphics.
        </p>

        {data.projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}

        {/* Not feeling these? - hidden when printing */}
        <Card className="text-center mt-8 relative print:hidden" variant="muted">
          {/* Speech bubble effect */}
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0"
            style={{
              borderLeft: "12px solid transparent",
              borderRight: "12px solid transparent",
              borderBottom: "12px solid #2d2d2d",
            }}
          />
          <div
            className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0 h-0"
            style={{
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderBottom: "8px solid #e5e0d8",
            }}
          />

          <h3 className="font-kalam text-xl font-bold mb-2">Not feeling these?</h3>
          <p className="font-hand text-foreground/70 mb-4">
            No worries. You can retake the quiz or browse all the other project categories.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button to="/quiz">Retake Quiz</Button>
            {Object.entries(projectRecommendations)
              .filter(([key]) => key !== type)
              .map(([key, val]) => (
                <Button key={key} to={`/results/${key}`} variant="secondary" size="sm">
                  {val.emoji} {val.title}
                </Button>
              ))}
          </div>
        </Card>

        {/* Bottom CTA - hidden when printing */}
        <div className="flex flex-wrap gap-4 justify-center mt-10 print:hidden">
          <Button to="/setup" size="lg">
            Set Up Raylib
          </Button>
          <Button to="/api" variant="secondary" size="lg">
            API Reference
          </Button>
        </div>

        {/* Print footer */}
        <div className="hidden print:block mt-8 pt-4 border-t border-foreground/20 text-center text-sm text-foreground/50">
          <p>Visit the Raylib API Reference at the CSC 126 Project Finder website for function details.</p>
          <p className="mt-1">Setup instructions available at raylib.com</p>
        </div>
      </div>
    </div>
  );
}

export default Results;
