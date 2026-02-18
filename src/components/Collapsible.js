import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

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

export default Collapsible;
