import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import cpp from "react-syntax-highlighter/dist/esm/languages/hljs/cpp";
import { githubGist } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { loopTopics, comparisonExercises } from "../data/practiceExercises";
import { Card, Badge, Button } from "../components/ui";
import { ChevronRight, Eye, EyeOff, CheckCircle, XCircle, Play, SkipBack, SkipForward, RotateCcw } from "lucide-react";

SyntaxHighlighter.registerLanguage("cpp", cpp);

const codeStyle = {
  ...githubGist,
  hljs: {
    ...githubGist.hljs,
    background: "transparent",
    padding: 0,
    margin: 0,
  },
};

function CodeBlock({ children }) {
  return (
    <div
      className="bg-muted/50 border-2 border-foreground/30 p-4 overflow-x-auto"
      style={{ borderRadius: "8px 40px 6px 50px / 50px 6px 40px 8px" }}
    >
      <SyntaxHighlighter
        language="cpp"
        style={codeStyle}
        customStyle={{ fontSize: "0.875rem", fontFamily: "inherit" }}
      >
        {typeof children === "string" ? children.trim() : children}
      </SyntaxHighlighter>
    </div>
  );
}

function LoopSimulator({ simulation, color }) {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const current = simulation.steps[step];
  const varNames = Object.keys(current.variables);
  const totalSteps = simulation.steps.length;

  // Auto-play
  React.useEffect(() => {
    if (!isPlaying) return;
    if (step >= totalSteps - 1) {
      setIsPlaying(false);
      return;
    }
    const timer = setTimeout(() => setStep((s) => s + 1), 1200);
    return () => clearTimeout(timer);
  }, [isPlaying, step, totalSteps]);

  const reset = () => {
    setStep(0);
    setIsPlaying(false);
  };

  return (
    <div className="space-y-4">
      <h3 className="font-kalam text-xl font-bold" style={{ color }}>
        {simulation.title}
      </h3>

      {/* Code with highlighted line */}
      <div
        className="border-2 border-foreground/30 overflow-hidden"
        style={{ borderRadius: "8px 40px 6px 50px / 50px 6px 40px 8px" }}
      >
        {simulation.code.map((line, i) => (
          <div
            key={i}
            className={`flex items-stretch font-mono text-sm transition-colors duration-300 ${
              i === current.line
                ? "bg-yellow-100 border-l-4 border-yellow-500"
                : "bg-muted/30 border-l-4 border-transparent"
            }`}
          >
            <span className="w-8 text-right pr-2 py-1 text-foreground/30 text-xs select-none flex-shrink-0">
              {i + 1}
            </span>
            <SyntaxHighlighter
              language="cpp"
              style={codeStyle}
              customStyle={{
                fontSize: "0.875rem",
                fontFamily: "inherit",
                padding: "0.25rem 0.5rem",
                margin: 0,
                background: "transparent",
                flex: 1,
              }}
              PreTag="span"
            >
              {line}
            </SyntaxHighlighter>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2 flex-wrap">
        <button
          onClick={reset}
          className="p-2 bg-paper border-2 border-foreground hover:bg-muted transition-colors"
          style={{ borderRadius: "50% 45% 55% 48% / 48% 52% 45% 55%" }}
          title="Reset"
        >
          <RotateCcw size={16} />
        </button>
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="p-2 bg-paper border-2 border-foreground hover:bg-muted transition-colors disabled:opacity-30"
          style={{ borderRadius: "50% 45% 55% 48% / 48% 52% 45% 55%" }}
          title="Previous step"
        >
          <SkipBack size={16} />
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="px-4 py-2 text-white font-hand border-2 border-foreground hover:opacity-80 transition-colors flex items-center gap-2"
          style={{
            borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px",
            backgroundColor: color,
          }}
        >
          <Play size={16} fill={isPlaying ? "transparent" : "currentColor"} />
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          onClick={() => setStep((s) => Math.min(totalSteps - 1, s + 1))}
          disabled={step === totalSteps - 1}
          className="p-2 bg-paper border-2 border-foreground hover:bg-muted transition-colors disabled:opacity-30"
          style={{ borderRadius: "50% 45% 55% 48% / 48% 52% 45% 55%" }}
          title="Next step"
        >
          <SkipForward size={16} />
        </button>
        <span className="font-hand text-sm text-foreground/50 ml-2">
          Step {step + 1} / {totalSteps}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-muted/50 border-2 border-foreground/20 h-3 overflow-hidden" style={{ borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px" }}>
        <div
          className="h-full transition-all duration-300"
          style={{
            width: `${((step + 1) / totalSteps) * 100}%`,
            backgroundColor: color,
          }}
        />
      </div>

      {/* State display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Variables */}
        <div
          className="p-3 bg-paper border-2 border-foreground"
          style={{ borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px" }}
        >
          <p className="font-hand font-bold text-sm mb-2">Variables:</p>
          <div className="flex flex-wrap gap-2">
            {varNames.map((v) => (
              <span
                key={v}
                className="inline-flex items-center gap-1 px-2 py-1 bg-muted border border-foreground/30 font-mono text-sm"
                style={{ borderRadius: "8px 20px 6px 25px / 20px 6px 25px 8px" }}
              >
                <span className="text-accent font-bold">{v}</span>
                <span className="text-foreground/40">=</span>
                <span className="font-bold">{String(current.variables[v])}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Output */}
        <div
          className="p-3 bg-gray-900 text-green-400 border-2 border-foreground"
          style={{ borderRadius: "8px 40px 6px 50px / 50px 6px 40px 8px" }}
        >
          <p className="font-hand font-bold text-sm mb-2 text-gray-400">Output:</p>
          <pre className="font-mono text-sm min-h-[1.5rem] whitespace-pre-wrap">
            {current.output ? current.output.replace(/\\n/g, "\n") : <span className="text-gray-600">(empty)</span>}
          </pre>
        </div>
      </div>

      {/* Explanation */}
      <div
        className="p-3 border-2 border-foreground/30 bg-blue-50"
        style={{ borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px" }}
      >
        <p className="font-hand text-sm text-blue-900">
          <span className="font-bold">What's happening: </span>
          {current.explanation}
        </p>
      </div>
    </div>
  );
}

function Collapsible({ title, children, defaultOpen = false, icon }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <button
        className="flex items-center gap-2 font-hand text-lg text-secondary hover:text-accent transition-colors w-full text-left"
        onClick={() => setOpen(!open)}
      >
        <ChevronRight
          size={18}
          strokeWidth={3}
          className={`transition-transform duration-200 flex-shrink-0 ${open ? "rotate-90" : ""}`}
        />
        {icon && <span>{icon}</span>}
        {title}
      </button>
      {open && <div className="mt-3 ml-6">{children}</div>}
    </div>
  );
}

function TraceTable({ trace }) {
  if (!trace || trace.length === 0) return null;
  const varNames = Object.keys(trace[0].variables);

  return (
    <div className="overflow-x-auto mt-3">
      <table className="w-full font-hand text-sm border-2 border-foreground">
        <thead>
          <tr className="bg-muted">
            <th className="border-2 border-foreground px-3 py-2 text-left">Step</th>
            {varNames.map((v) => (
              <th key={v} className="border-2 border-foreground px-3 py-2 text-left font-mono text-accent">
                {v}
              </th>
            ))}
            <th className="border-2 border-foreground px-3 py-2 text-left">What happened</th>
          </tr>
        </thead>
        <tbody>
          {trace.map((step, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-paper" : "bg-muted/30"}>
              <td className="border-2 border-foreground px-3 py-2 font-bold">{step.iteration}</td>
              {varNames.map((v) => (
                <td key={v} className="border-2 border-foreground px-3 py-2 font-mono font-bold">
                  {step.variables[v]}
                </td>
              ))}
              <td className="border-2 border-foreground px-3 py-2 text-foreground/70">
                {step.explanation}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PredictExercise({ exercise }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [userGuess, setUserGuess] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isMultiLine = exercise.answer.includes("\n");

  const normalizeLine = (s) => s.trim().toLowerCase().replace(/\s+/g, " ");
  const normalizeMulti = (s) =>
    s.trim().split("\n").map((line) => line.trim().toLowerCase().replace(/\s+/g, "")).join("\n");

  const checkAnswer = (guess, answer) => {
    if (isMultiLine) {
      return normalizeMulti(guess) === normalizeMulti(answer);
    }
    return normalizeLine(guess) === normalizeLine(answer);
  };

  const isCorrect =
    submitted &&
    (checkAnswer(userGuess, exercise.answer) ||
      (exercise.altAnswers && exercise.altAnswers.some((a) => checkAnswer(userGuess, a))));

  const handleSubmit = () => {
    if (userGuess.trim()) setSubmitted(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !isMultiLine) handleSubmit();
    if (e.key === "Enter" && e.ctrlKey && isMultiLine) handleSubmit();
  };

  return (
    <div className="space-y-3">
      <CodeBlock>{exercise.code}</CodeBlock>

      {/* Student input */}
      <div className="flex flex-col gap-2">
        {isMultiLine ? (
          <>
            <textarea
              value={userGuess}
              onChange={(e) => {
                setUserGuess(e.target.value);
                setSubmitted(false);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Type your answer (one line per row)..."
              rows={Math.max(3, exercise.answer.split("\n").length + 1)}
              className="w-full px-4 py-2 border-2 border-foreground bg-paper font-mono text-sm resize-y"
              style={{ borderRadius: "15px 8px 15px 8px / 8px 15px 8px 15px" }}
            />
            <div className="flex items-center gap-2">
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-accent text-white font-hand border-2 border-foreground hover:bg-accent/80 transition-colors"
                style={{ borderRadius: "8px 40px 6px 50px / 50px 6px 40px 8px" }}
              >
                Check
              </button>
              <span className="font-hand text-xs text-foreground/40">Press Ctrl+Enter to check</span>
            </div>
          </>
        ) : (
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={userGuess}
              onChange={(e) => {
                setUserGuess(e.target.value);
                setSubmitted(false);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Type your answer..."
              className="flex-1 px-4 py-2 border-2 border-foreground bg-paper font-mono text-sm"
              style={{ borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px" }}
            />
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-accent text-white font-hand border-2 border-foreground hover:bg-accent/80 transition-colors"
              style={{ borderRadius: "8px 40px 6px 50px / 50px 6px 40px 8px" }}
            >
              Check
            </button>
          </div>
        )}
      </div>

      {/* Feedback */}
      {submitted && (
        <div
          className={`flex items-center gap-2 p-3 border-2 border-foreground font-hand ${
            isCorrect ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
          }`}
          style={{ borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px" }}
        >
          {isCorrect ? (
            <>
              <CheckCircle size={20} />
              <span>Correct!</span>
            </>
          ) : (
            <>
              <XCircle size={20} />
              <span>Not quite. Try again or reveal the answer below.</span>
            </>
          )}
        </div>
      )}

      {/* Hint */}
      <Collapsible title="Hint">
        <p className="font-hand text-foreground/70 text-sm">{exercise.hint}</p>
      </Collapsible>

      {/* Answer reveal */}
      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="flex items-center gap-2 font-hand text-sm text-foreground/50 hover:text-foreground/80 transition-colors"
      >
        {showAnswer ? <EyeOff size={16} /> : <Eye size={16} />}
        {showAnswer ? "Hide answer" : "Show answer"}
      </button>
      {showAnswer && (
        <pre
          className="p-3 bg-postit border-2 border-foreground font-mono text-sm whitespace-pre-wrap"
          style={{ borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px" }}
        >
          {exercise.answer}
        </pre>
      )}

      {/* Trace table */}
      {exercise.trace && (
        <Collapsible title="Step-by-step trace table">
          <TraceTable trace={exercise.trace} />
        </Collapsible>
      )}

    </div>
  );
}

function FixExercise({ exercise }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="space-y-3">
      <div
        className="p-3 bg-red-50 border-2 border-red-300 font-hand text-sm text-red-800"
        style={{ borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px" }}
      >
        {exercise.bugDescription}
      </div>
      <CodeBlock>{exercise.code}</CodeBlock>

      <Collapsible title="Hint">
        <p className="font-hand text-foreground/70 text-sm">{exercise.hint}</p>
      </Collapsible>

      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="flex items-center gap-2 font-hand text-sm text-foreground/50 hover:text-foreground/80 transition-colors"
      >
        {showAnswer ? <EyeOff size={16} /> : <Eye size={16} />}
        {showAnswer ? "Hide solution" : "Show solution"}
      </button>
      {showAnswer && (
        <div
          className="p-3 bg-green-50 border-2 border-green-300 font-hand text-sm text-green-800"
          style={{ borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px" }}
        >
          <span className="font-bold">Fix: </span>{exercise.answer}
        </div>
      )}
    </div>
  );
}

function FillInExercise({ exercise }) {
  const [userAnswer, setUserAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const isCorrect =
    submitted &&
    exercise.acceptableAnswers.some(
      (a) => a.toLowerCase().replace(/\s/g, "") === userAnswer.toLowerCase().replace(/\s/g, "")
    );

  const handleSubmit = () => {
    if (userAnswer.trim()) setSubmitted(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="space-y-3">
      <p className="font-hand text-foreground/80">{exercise.description}</p>
      <CodeBlock>{exercise.code}</CodeBlock>

      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => {
            setUserAnswer(e.target.value);
            setSubmitted(false);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Fill in the blank(s)..."
          className="flex-1 px-4 py-2 border-2 border-foreground bg-paper font-mono text-sm"
          style={{ borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px" }}
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-accent text-white font-hand border-2 border-foreground hover:bg-accent/80 transition-colors"
          style={{ borderRadius: "8px 40px 6px 50px / 50px 6px 40px 8px" }}
        >
          Check
        </button>
      </div>

      {submitted && (
        <div
          className={`flex items-center gap-2 p-3 border-2 border-foreground font-hand ${
            isCorrect ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
          }`}
          style={{ borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px" }}
        >
          {isCorrect ? (
            <>
              <CheckCircle size={20} />
              <span>Correct!</span>
            </>
          ) : (
            <>
              <XCircle size={20} />
              <span>Not quite. Check the hint or reveal the answer.</span>
            </>
          )}
        </div>
      )}

      <Collapsible title="Hint">
        <p className="font-hand text-foreground/70 text-sm">{exercise.hint}</p>
      </Collapsible>

      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="flex items-center gap-2 font-hand text-sm text-foreground/50 hover:text-foreground/80 transition-colors"
      >
        {showAnswer ? <EyeOff size={16} /> : <Eye size={16} />}
        {showAnswer ? "Hide answer" : "Show answer"}
      </button>
      {showAnswer && (
        <div
          className="p-3 bg-postit border-2 border-foreground font-mono text-sm"
          style={{ borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px" }}
        >
          {exercise.answer}
        </div>
      )}

    </div>
  );
}

function LoopComparison() {
  const [revealed, setRevealed] = useState({});
  const scenarios = comparisonExercises[0].scenarios;

  const toggle = (i) => setRevealed((r) => ({ ...r, [i]: !r[i] }));

  const loopLabels = {
    for: { label: "For Loop", color: "#3498db", emoji: "🔄" },
    while: { label: "While Loop", color: "#e67e22", emoji: "🔁" },
    dowhile: { label: "Do-While", color: "#9b59b6", emoji: "🔂" },
  };

  return (
    <div className="space-y-4">
      <p className="font-hand text-foreground/70 mb-4">
        For each scenario, decide which loop type is the best fit. Click to reveal the answer.
      </p>
      {scenarios.map((s, i) => (
        <div
          key={i}
          className="p-4 bg-paper border-2 border-foreground"
          style={{ borderRadius: "15px 255px 15px 225px / 225px 15px 255px 15px" }}
        >
          <p className="font-hand text-foreground font-bold mb-2">
            {i + 1}. {s.situation}
          </p>
          <button
            onClick={() => toggle(i)}
            className="font-hand text-sm text-accent hover:text-secondary transition-colors"
          >
            {revealed[i] ? "Hide answer" : "Reveal answer"}
          </button>
          {revealed[i] && (
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-2">
                <span
                  className="inline-block px-3 py-1 font-hand text-sm text-white border-2 border-foreground/20"
                  style={{
                    backgroundColor: loopLabels[s.bestLoop].color,
                    borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px",
                  }}
                >
                  {loopLabels[s.bestLoop].emoji} {loopLabels[s.bestLoop].label}
                </span>
              </div>
              <p className="font-hand text-sm text-foreground/70">{s.explanation}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function Practice() {
  const [activeTopic, setActiveTopic] = useState("for");
  const [activeSection, setActiveSection] = useState("learn");

  const topic = loopTopics.find((t) => t.id === activeTopic);

  const exercisesByType = topic
    ? {
        predict: topic.exercises.filter((e) => e.type === "predict"),
        fix: topic.exercises.filter((e) => e.type === "fix"),
        fillin: topic.exercises.filter((e) => e.type === "fillin"),
      }
    : { predict: [], fix: [], fillin: [] };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div
          className="inline-block px-4 py-2 bg-postit border-2 border-foreground text-foreground font-hand text-sm mb-4 rotate-1 shadow-sketch-hover"
          style={{ borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px" }}
        >
          EXTRA PRACTICE
        </div>
        <h1 className="font-kalam text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
          Loop Practice
        </h1>
        <p className="font-hand text-lg md:text-xl text-foreground/70 max-w-2xl">
          Interactive exercises for mastering for loops, while loops, and do-while loops.
          Work through the concepts, then test yourself with practice problems.
        </p>
      </div>

      {/* Topic Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {loopTopics.map((t, i) => (
          <button
            key={t.id}
            onClick={() => {
              setActiveTopic(t.id);
              setActiveSection("learn");
            }}
            className={`
              px-4 py-2 font-hand text-lg
              border-2 border-foreground
              transition-all duration-100
              ${
                activeTopic === t.id
                  ? "text-white shadow-sketch-hover -rotate-1"
                  : "bg-paper hover:bg-muted hover:rotate-1"
              }
              ${i % 2 === 0 ? "rotate-[0.5deg]" : "-rotate-[0.5deg]"}
            `}
            style={{
              borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px",
              backgroundColor: activeTopic === t.id ? t.color : undefined,
            }}
          >
            {t.emoji} {t.title}
          </button>
        ))}
        <button
          onClick={() => {
            setActiveTopic("compare");
            setActiveSection("learn");
          }}
          className={`
            px-4 py-2 font-hand text-lg
            border-2 border-foreground
            transition-all duration-100
            ${
              activeTopic === "compare"
                ? "bg-foreground text-paper shadow-sketch-hover -rotate-1"
                : "bg-paper hover:bg-muted hover:rotate-1"
            }
          `}
          style={{ borderRadius: "8px 40px 6px 50px / 50px 6px 40px 8px" }}
        >
          Compare All
        </button>
      </div>

      {/* Compare All tab */}
      {activeTopic === "compare" && (
        <div className="max-w-3xl">
          <h2 className="font-kalam text-2xl md:text-3xl font-bold text-foreground mb-2">
            Which Loop Should You Use?
          </h2>
          <Card className="mb-6" decoration="tape">
            <div className="overflow-x-auto">
              <table className="w-full font-hand text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-2"></th>
                    <th className="text-left p-2">
                      <span className="text-[#3498db] font-bold">for</span>
                    </th>
                    <th className="text-left p-2">
                      <span className="text-[#e67e22] font-bold">while</span>
                    </th>
                    <th className="text-left p-2">
                      <span className="text-[#9b59b6] font-bold">do-while</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t-2 border-dashed border-foreground/20">
                    <td className="p-2 font-bold">When to use</td>
                    <td className="p-2">You know the count</td>
                    <td className="p-2">Unknown iterations</td>
                    <td className="p-2">Must run at least once</td>
                  </tr>
                  <tr className="border-t-2 border-dashed border-foreground/20">
                    <td className="p-2 font-bold">Condition checked</td>
                    <td className="p-2">Before each iteration</td>
                    <td className="p-2">Before each iteration</td>
                    <td className="p-2">After each iteration</td>
                  </tr>
                  <tr className="border-t-2 border-dashed border-foreground/20">
                    <td className="p-2 font-bold">Min runs</td>
                    <td className="p-2">0</td>
                    <td className="p-2">0</td>
                    <td className="p-2 font-bold text-accent">1 (always!)</td>
                  </tr>
                  <tr className="border-t-2 border-dashed border-foreground/20">
                    <td className="p-2 font-bold">Best for</td>
                    <td className="p-2">Counting, arrays, drawing shapes in a grid</td>
                    <td className="p-2">Game loops, waiting for input, unknown end</td>
                    <td className="p-2">Menus, input validation, retry prompts</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <h3 className="font-kalam text-xl font-bold text-foreground mb-4">
            Practice: Pick the Right Loop
          </h3>
          <LoopComparison />
        </div>
      )}

      {/* Topic content */}
      {activeTopic !== "compare" && topic && (
        <div className="max-w-3xl">
          {/* Section tabs */}
          <div className="flex gap-2 mb-6">
            {[
              { id: "learn", label: "Learn", emoji: "📖" },
              { id: "predict", label: "Predict the Output", emoji: "🔮" },
              { id: "fix", label: "Fix the Bug", emoji: "🐛" },
              { id: "fillin", label: "Fill in the Blank", emoji: "✏️" },
            ].map((sec) => (
              <button
                key={sec.id}
                onClick={() => setActiveSection(sec.id)}
                className={`
                  px-3 py-1.5 font-hand text-sm
                  border-2 border-foreground transition-all
                  ${
                    activeSection === sec.id
                      ? "bg-foreground text-paper shadow-sketch-hover -rotate-1"
                      : "bg-paper text-foreground hover:bg-muted hover:rotate-1"
                  }
                `}
                style={{ borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px" }}
              >
                {sec.emoji} {sec.label}
              </button>
            ))}
          </div>

          {/* Learn section */}
          {activeSection === "learn" && (
            <div className="space-y-6">
              {/* Topic header */}
              <div>
                <h2
                  className="font-kalam text-2xl md:text-3xl font-bold mb-2"
                  style={{ color: topic.color }}
                >
                  {topic.emoji} {topic.title}
                </h2>
                <p className="font-hand text-lg text-foreground/70">{topic.description}</p>
              </div>

              {/* Syntax */}
              <Card decoration="tape" className="-rotate-[0.5deg]">
                <h3 className="font-kalam text-xl font-bold mb-3">Syntax</h3>
                <div className="mb-4"><CodeBlock>{topic.syntax}</CodeBlock></div>
                <div className="space-y-3">
                  {topic.syntaxExplained.map((s, i) => (
                    <div key={i} className="flex flex-col sm:flex-row gap-2">
                      <span className="font-mono text-accent font-bold text-sm whitespace-nowrap">
                        {s.part}
                      </span>
                      <span className="font-hand text-sm text-foreground/70">{s.desc}</span>
                      <span className="font-mono text-xs text-foreground/50 bg-muted px-2 py-0.5 rounded whitespace-nowrap">
                        e.g. {s.example}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Step-by-step simulation */}
              {topic.simulation && (
                <Card decoration="tack" className="rotate-[0.3deg]">
                  <LoopSimulator simulation={topic.simulation} color={topic.color} />
                </Card>
              )}

              {/* Key points */}
              <Card className="rotate-[0.3deg]">
                <h3 className="font-kalam text-xl font-bold mb-3">Key Points</h3>
                <ul className="space-y-2">
                  {topic.keyPoints.map((point, i) => (
                    <li key={i} className="flex gap-3 font-hand text-foreground/80">
                      <span
                        className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-muted border-2 border-foreground text-xs font-bold mt-0.5"
                        style={{ borderRadius: "50% 45% 55% 48% / 48% 52% 45% 55%" }}
                      >
                        {i + 1}
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Common mistakes */}
              <Card variant="postit" className="-rotate-[0.5deg]">
                <h3 className="font-kalam text-xl font-bold mb-3">Common Mistakes</h3>
                <div className="space-y-4">
                  {topic.commonMistakes.map((m, i) => (
                    <div key={i}>
                      <p className="font-hand font-bold text-foreground">{m.mistake}</p>
                      <p className="font-hand text-sm text-foreground/70">{m.explanation}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* CTA to exercises */}
              <div className="text-center py-4">
                <p className="font-hand text-lg text-foreground/70 mb-3">
                  Ready to practice? Try the exercises!
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <button
                    onClick={() => setActiveSection("predict")}
                    className="px-4 py-2 bg-paper border-2 border-foreground font-hand hover:bg-muted transition-colors hover:rotate-1"
                    style={{ borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px" }}
                  >
                    🔮 Predict the Output ({exercisesByType.predict.length})
                  </button>
                  <button
                    onClick={() => setActiveSection("fix")}
                    className="px-4 py-2 bg-paper border-2 border-foreground font-hand hover:bg-muted transition-colors hover:-rotate-1"
                    style={{ borderRadius: "8px 40px 6px 50px / 50px 6px 40px 8px" }}
                  >
                    🐛 Fix the Bug ({exercisesByType.fix.length})
                  </button>
                  <button
                    onClick={() => setActiveSection("fillin")}
                    className="px-4 py-2 bg-paper border-2 border-foreground font-hand hover:bg-muted transition-colors hover:rotate-1"
                    style={{ borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px" }}
                  >
                    ✏️ Fill in the Blank ({exercisesByType.fillin.length})
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Predict the Output exercises */}
          {activeSection === "predict" && (
            <div className="space-y-6">
              <div>
                <h2 className="font-kalam text-2xl font-bold mb-1" style={{ color: topic.color }}>
                  🔮 Predict the Output — {topic.title}
                </h2>
                <p className="font-hand text-foreground/70">
                  Read the code carefully and predict what it will print. Type your answer and check it.
                </p>
              </div>
              {exercisesByType.predict.map((ex, i) => (
                <Card key={i} className={i % 2 === 0 ? "-rotate-[0.3deg]" : "rotate-[0.3deg]"} decoration={i % 2 === 0 ? "tape" : "tack"}>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <h3 className="font-kalam text-lg font-bold">{ex.title}</h3>
                    <Badge variant={ex.difficulty === "Easy" ? "beginner" : ex.difficulty === "Medium" ? "intermediate" : "advanced"}>
                      {ex.difficulty}
                    </Badge>
                  </div>
                  <PredictExercise exercise={ex} />
                </Card>
              ))}
            </div>
          )}

          {/* Fix the Bug exercises */}
          {activeSection === "fix" && (
            <div className="space-y-6">
              <div>
                <h2 className="font-kalam text-2xl font-bold mb-1" style={{ color: topic.color }}>
                  🐛 Fix the Bug — {topic.title}
                </h2>
                <p className="font-hand text-foreground/70">
                  Each piece of code has a bug. Read the description of what's wrong and figure out how to fix it.
                </p>
              </div>
              {exercisesByType.fix.map((ex, i) => (
                <Card key={i} className={i % 2 === 0 ? "-rotate-[0.3deg]" : "rotate-[0.3deg]"} decoration={i % 2 === 0 ? "tape" : "tack"}>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <h3 className="font-kalam text-lg font-bold">{ex.title}</h3>
                    <Badge variant={ex.difficulty === "Easy" ? "beginner" : ex.difficulty === "Medium" ? "intermediate" : "advanced"}>
                      {ex.difficulty}
                    </Badge>
                  </div>
                  <FixExercise exercise={ex} />
                </Card>
              ))}
            </div>
          )}

          {/* Fill in the Blank exercises */}
          {activeSection === "fillin" && (
            <div className="space-y-6">
              <div>
                <h2 className="font-kalam text-2xl font-bold mb-1" style={{ color: topic.color }}>
                  ✏️ Fill in the Blank — {topic.title}
                </h2>
                <p className="font-hand text-foreground/70">
                  Complete the code by filling in the missing parts. Some blanks need numbers, others need operators or keywords.
                </p>
              </div>
              {exercisesByType.fillin.map((ex, i) => (
                <Card key={i} className={i % 2 === 0 ? "-rotate-[0.3deg]" : "rotate-[0.3deg]"} decoration={i % 2 === 0 ? "tape" : "tack"}>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <h3 className="font-kalam text-lg font-bold">{ex.title}</h3>
                    <Badge variant={ex.difficulty === "Easy" ? "beginner" : ex.difficulty === "Medium" ? "intermediate" : "advanced"}>
                      {ex.difficulty}
                    </Badge>
                  </div>
                  <FillInExercise exercise={ex} />
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Bottom CTA */}
      <div className="flex flex-wrap gap-4 justify-center mt-10">
        <Button to="/quiz" size="lg">
          Find Your Project
        </Button>
        <Button to="/projects" variant="secondary" size="lg">
          Browse All Projects
        </Button>
      </div>
    </div>
  );
}

export default Practice;
