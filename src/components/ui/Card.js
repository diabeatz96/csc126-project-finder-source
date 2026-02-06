import React from "react";

const wobblyRadius = "15px 255px 15px 225px / 225px 15px 255px 15px";

function Card({
  children,
  decoration,
  variant = "default",
  className = "",
  hover = false,
  rotate,
  ...props
}) {
  const baseClasses = `
    relative
    border-2 border-foreground
    p-6
    transition-all duration-100
  `;

  const variantClasses = {
    default: "bg-paper shadow-sketch-subtle",
    postit: "bg-postit shadow-sketch-subtle",
    muted: "bg-muted shadow-sketch-subtle",
  };

  const hoverClasses = hover
    ? "hover:shadow-sketch hover:-translate-y-1 hover:rotate-1"
    : "";

  const rotateClasses = {
    "-1": "-rotate-1",
    "1": "rotate-1",
    "-2": "-rotate-2",
    "2": "rotate-2",
  };

  const rotateClass = rotate ? rotateClasses[rotate] || "" : "";

  const classes = `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${rotateClass} ${className}`;

  const style = { borderRadius: wobblyRadius };

  return (
    <div className={classes} style={style} {...props}>
      {/* Tape decoration */}
      {decoration === "tape" && (
        <div
          className="absolute -top-2 left-1/2 -translate-x-1/2 -rotate-2 w-16 h-5 bg-gray-300/50 rounded-sm"
          style={{ zIndex: 1 }}
        />
      )}

      {/* Thumbtack decoration */}
      {decoration === "tack" && (
        <div
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full shadow-md"
          style={{ zIndex: 1 }}
        />
      )}

      {children}
    </div>
  );
}

export default Card;
