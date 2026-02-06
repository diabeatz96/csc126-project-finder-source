import React from "react";

const wobblyRadius = "40px 8px 50px 6px / 8px 50px 6px 40px";

function Badge({
  children,
  variant = "default",
  className = "",
  ...props
}) {
  const baseClasses = `
    inline-flex items-center
    px-3 py-1
    font-hand text-sm
    border-2 border-foreground
  `;

  const variantClasses = {
    default: "bg-paper text-foreground",
    accent: "bg-accent text-white border-accent",
    secondary: "bg-secondary text-white border-secondary",
    muted: "bg-muted text-foreground",
    postit: "bg-postit text-foreground",
    beginner: "bg-green-100 text-green-800 border-green-600",
    intermediate: "bg-orange-100 text-orange-800 border-orange-600",
    advanced: "bg-red-100 text-red-800 border-red-600",
    concept: "bg-purple-100 text-purple-800 border-purple-600",
    function: "bg-blue-100 text-secondary border-secondary font-mono text-xs",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const style = { borderRadius: wobblyRadius };

  return (
    <span className={classes} style={style} {...props}>
      {children}
    </span>
  );
}

export default Badge;
