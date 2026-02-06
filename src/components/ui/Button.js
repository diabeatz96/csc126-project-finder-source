import React from "react";
import { Link } from "react-router-dom";

const wobblyRadius = "255px 15px 225px 15px / 15px 225px 15px 255px";

function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  className = "",
  ...props
}) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-hand font-normal
    border-[3px] border-foreground
    transition-all duration-100
    cursor-pointer
    active:translate-x-1 active:translate-y-1 active:shadow-none
  `;

  const sizeClasses = {
    sm: "px-4 py-2 text-base",
    md: "px-6 py-3 text-lg",
    lg: "px-8 py-4 text-xl md:text-2xl",
  };

  const variantClasses = {
    primary: `
      bg-paper text-foreground
      shadow-sketch
      hover:bg-accent hover:text-white
      hover:shadow-sketch-hover
      hover:translate-x-[2px] hover:translate-y-[2px]
    `,
    secondary: `
      bg-muted text-foreground
      shadow-sketch
      hover:bg-secondary hover:text-white
      hover:shadow-sketch-hover
      hover:translate-x-[2px] hover:translate-y-[2px]
    `,
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const style = { borderRadius: wobblyRadius };

  // If it's a link
  if (to) {
    return (
      <Link to={to} className={classes} style={style} {...props}>
        {children}
      </Link>
    );
  }

  // If it's an external link
  if (href) {
    return (
      <a href={href} className={classes} style={style} {...props}>
        {children}
      </a>
    );
  }

  // Otherwise it's a button
  return (
    <button className={classes} style={style} {...props}>
      {children}
    </button>
  );
}

export default Button;
