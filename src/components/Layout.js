import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

function Layout({ children }) {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/quiz", label: "Take the Quiz" },
    { to: "/api", label: "Raylib API" },
    { to: "/setup", label: "Setup Guide" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b-[3px] border-dashed border-foreground/30 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between py-3 md:py-0 md:h-16 gap-2 md:gap-0">
          {/* Brand */}
          <Link
            to="/"
            className="-rotate-1 transition-transform hover:rotate-0"
          >
            <Logo size="sm" />
          </Link>

          {/* Nav Links */}
          <div className="flex gap-1 overflow-x-auto w-full md:w-auto justify-center md:justify-end">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`
                  px-3 py-2 md:px-4
                  font-hand text-base md:text-lg
                  rounded-lg
                  transition-all duration-100
                  whitespace-nowrap
                  ${
                    location.pathname === link.to
                      ? "bg-postit text-foreground border-2 border-foreground shadow-sketch-hover -rotate-1"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted/50 hover:rotate-1"
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto px-4 md:px-8 py-8 w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t-[3px] border-dashed border-foreground/30 py-8 px-4 text-center mt-16">
        <div className="flex justify-center mb-4">
          <Logo size="sm" showText={false} />
        </div>
        <p className="font-hand text-foreground/60 text-base md:text-lg max-w-2xl mx-auto">
          CSC 126: Introduction to Computer Science
          <span className="mx-2">~</span>
          College of Staten Island, CUNY
        </p>
        <p className="font-hand text-foreground/40 text-sm md:text-base mt-2">
          Built with raylib for graphics projects
          <span className="mx-2">*</span>
          Powered by Holland's RIASEC model
        </p>
      </footer>
    </div>
  );
}

export default Layout;
