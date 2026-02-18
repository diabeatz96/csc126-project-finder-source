import React, { useState } from "react";
import projectRecommendations from "../data/projectRecommendations";
import { Button } from "../components/ui";
import ProjectCard from "../components/ProjectCard";

const typeOrder = ["realistic", "investigative", "artistic", "social", "enterprising", "conventional"];

function AllProjects() {
  const [typeFilter, setTypeFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");

  // Flatten all projects with category metadata
  const allProjects = typeOrder.flatMap((typeKey) => {
    const typeData = projectRecommendations[typeKey];
    return typeData.projects.map((project) => ({
      ...project,
      typeKey,
      typeTitle: typeData.title,
      typeEmoji: typeData.emoji,
      typeColor: typeData.color,
    }));
  });

  // Apply filters
  const filtered = allProjects.filter((project) => {
    if (typeFilter !== "all" && project.typeKey !== typeFilter) return false;
    if (difficultyFilter !== "all" && project.difficulty.toLowerCase() !== difficultyFilter) return false;
    return true;
  });

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="font-kalam text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
          All Projects
        </h1>
        <p className="font-hand text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
          Browse every project across all personality types. Use the filters to narrow
          it down, or just scroll through and pick what excites you.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4">
        {/* Type Filter */}
        <div>
          <div className="font-kalam text-sm font-bold text-foreground/60 uppercase tracking-wide mb-2">
            Filter by type
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setTypeFilter("all")}
              className={`
                px-3 py-1.5 font-hand text-sm border-2 border-foreground transition-all
                ${typeFilter === "all"
                  ? "bg-foreground text-paper shadow-sketch-hover -rotate-1"
                  : "bg-paper text-foreground hover:bg-muted hover:rotate-1"
                }
              `}
              style={{ borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px" }}
            >
              All ({allProjects.length})
            </button>
            {typeOrder.map((key) => {
              const typeData = projectRecommendations[key];
              const count = allProjects.filter((p) => p.typeKey === key).length;
              return (
                <button
                  key={key}
                  onClick={() => setTypeFilter(key)}
                  className={`
                    px-3 py-1.5 font-hand text-sm border-2 border-foreground transition-all
                    ${typeFilter === key
                      ? "text-white shadow-sketch-hover -rotate-1"
                      : "bg-paper text-foreground hover:bg-muted hover:rotate-1"
                    }
                  `}
                  style={{
                    borderRadius: "8px 40px 6px 50px / 50px 6px 40px 8px",
                    backgroundColor: typeFilter === key ? typeData.color : undefined,
                  }}
                >
                  {typeData.emoji} {typeData.title} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Difficulty Filter */}
        <div>
          <div className="font-kalam text-sm font-bold text-foreground/60 uppercase tracking-wide mb-2">
            Filter by difficulty
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "all", label: "All Levels" },
              { key: "beginner", label: "Beginner" },
              { key: "intermediate", label: "Intermediate" },
            ].map((d) => (
              <button
                key={d.key}
                onClick={() => setDifficultyFilter(d.key)}
                className={`
                  px-3 py-1.5 font-hand text-sm border-2 border-foreground transition-all
                  ${difficultyFilter === d.key
                    ? "bg-foreground text-paper shadow-sketch-hover -rotate-1"
                    : "bg-paper text-foreground hover:bg-muted hover:rotate-1"
                  }
                `}
                style={{ borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px" }}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <p className="font-hand text-foreground/60 mb-6">
        Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Project List */}
      <div className="max-w-3xl mx-auto">
        {filtered.map((project, i) => (
          <div key={`${project.typeKey}-${project.name}`}>
            {/* Category badge above each card */}
            <div className="flex items-center gap-2 mb-1 ml-2">
              <span
                className="inline-block px-2 py-0.5 font-hand text-xs text-white border border-foreground/20"
                style={{
                  backgroundColor: project.typeColor,
                  borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px",
                }}
              >
                {project.typeEmoji} {project.typeTitle}
              </span>
            </div>
            <ProjectCard project={project} index={i} />
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">🔍</div>
            <p className="font-hand text-lg text-foreground/60">
              No projects match those filters. Try a different combination.
            </p>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="flex flex-wrap gap-4 justify-center mt-10">
        <Button to="/quiz" size="lg">
          Take the Quiz
        </Button>
        <Button to="/setup" variant="secondary" size="lg">
          Set Up Raylib
        </Button>
      </div>
    </div>
  );
}

export default AllProjects;
