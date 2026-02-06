import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import quizQuestions from "../data/quizQuestions";
import { Button } from "../components/ui";

function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState({
    realistic: 0,
    investigative: 0,
    artistic: 0,
    social: 0,
    humanist: 0,
  });
  const navigate = useNavigate();

  const handleAnswer = (optionScores) => {
    const newScores = { ...scores };
    Object.keys(optionScores).forEach((key) => {
      newScores[key] += optionScores[key];
    });
    setScores(newScores);

    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      const winner = Object.entries(newScores).reduce((a, b) =>
        a[1] > b[1] ? a : b
      )[0];
      navigate(`/results/${winner}`);
    }
  };

  const question = quizQuestions[currentQ];
  const letters = ["A", "B", "C", "D"];

  return (
    <div className="max-w-2xl mx-auto py-4">
      {/* Progress Dots */}
      <div className="flex gap-2 mb-8">
        {quizQuestions.map((_, i) => (
          <div
            key={i}
            className={`
              flex-1 h-3 border-2 border-foreground transition-all duration-300
              ${i < currentQ ? "bg-green-400" : i === currentQ ? "bg-accent" : "bg-muted"}
            `}
            style={{
              borderRadius:
                i % 2 === 0
                  ? "40px 8px 50px 6px / 8px 50px 6px 40px"
                  : "8px 40px 6px 50px / 50px 6px 40px 8px",
            }}
          />
        ))}
      </div>

      {/* Question Number */}
      <div
        className="inline-block px-3 py-1 bg-postit border-2 border-foreground font-hand text-sm mb-4 -rotate-1"
        style={{ borderRadius: "40px 8px 50px 6px / 8px 50px 6px 40px" }}
      >
        Question {currentQ + 1} of {quizQuestions.length}
      </div>

      {/* Question */}
      <h2 className="font-kalam text-2xl md:text-3xl font-bold text-foreground mb-8 leading-snug">
        {question.question}
      </h2>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(option.scores)}
            className={`
              relative flex items-center gap-4
              p-4 md:p-5
              bg-paper border-[3px] border-foreground
              font-hand text-lg text-left text-foreground
              shadow-sketch
              transition-all duration-100
              hover:bg-postit hover:-translate-x-1 hover:translate-y-0 hover:shadow-sketch-lg hover:rotate-1
              active:translate-x-1 active:translate-y-1 active:shadow-none
              ${i % 2 === 0 ? "-rotate-[0.5deg]" : "rotate-[0.5deg]"}
            `}
            style={{ borderRadius: "15px 255px 15px 225px / 225px 15px 255px 15px" }}
          >
            {/* Letter Badge */}
            <span
              className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-muted border-2 border-foreground font-kalam font-bold text-foreground"
              style={{
                borderRadius: "50% 45% 55% 48% / 48% 52% 45% 55%",
              }}
            >
              {letters[i]}
            </span>
            <span>{option.text}</span>
          </button>
        ))}
      </div>

      {/* Back Button */}
      {currentQ > 0 && (
        <div className="mt-8">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setCurrentQ(currentQ - 1)}
          >
            ← Back
          </Button>
        </div>
      )}

      {/* Decorative squiggle */}
      <svg
        className="hidden md:block absolute right-8 bottom-32 w-24 h-24 text-foreground/20"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M10 50 Q30 20 50 50 Q70 80 90 50" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}

export default Quiz;
