import React from "react";
import { Link } from "react-router-dom";
import { Card, Badge } from "./ui";
import Collapsible from "./Collapsible";

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

export default ProjectCard;
