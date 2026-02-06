import React from "react";

const wobblyRadius = "40px 8px 50px 6px / 8px 50px 6px 40px";

function Input({ className = "", icon, ...props }) {
  const inputClasses = `
    w-full
    px-4 py-3
    ${icon ? "pl-12" : ""}
    font-hand text-lg
    bg-paper
    border-2 border-foreground
    text-foreground
    placeholder:text-foreground/40
    outline-none
    transition-all duration-200
    focus:border-secondary
    focus:ring-2 focus:ring-secondary/20
  `;

  const style = { borderRadius: wobblyRadius };

  if (icon) {
    return (
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/50">
          {icon}
        </div>
        <input className={`${inputClasses} ${className}`} style={style} {...props} />
      </div>
    );
  }

  return (
    <input className={`${inputClasses} ${className}`} style={style} {...props} />
  );
}

export default Input;
