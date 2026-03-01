"use client";
import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

type AccordionProps = {
  children?: React.ReactNode;
  header?: React.ReactNode;
  headClassName?: string;
  bodyClassName?: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function Accordion({
  children,
  header,
  headClassName = "",
  bodyClassName = "",
  isOpen,
  onToggle,
}: AccordionProps) {
  return (
    <div className="rounded-md border border-gray-300 overflow-hidden transition-all duration-200">
      {/* Header - Clickable section */}
      <button
        className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition-colors ${headClassName}`}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div>{header}</div>
        <div className="transition-transform duration-200">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      {/* Body - Expandable content with smooth animation */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={`p-4 border-t border-gray-200 ${bodyClassName}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
