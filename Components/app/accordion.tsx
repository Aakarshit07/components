"use client";
import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

type Accordion = {
  children?: React.ReactNode;
  header?: React.ReactNode;
  headClassName?: string;
  bodyClassName?: string;
  isOpen?: boolean;
  onOpen: () => void;
};

export default function Accordion({
  children,
  header,
  headClassName,
  bodyClassName,
  isOpen = false,
  onOpen,
}: Accordion) {
  return (
    <div
      className={` transition-transform duration-300 ease-in-out rounded-md border border-gray-600`}
    >
      {/* Head */}
      <div
        className={`w-full flex items-center gap-2 justify-between cursor-pointer  p-1 ${headClassName}`}
        role={"button"}
        onClick={() => onOpen()}
      >
        <div>{header}</div>
        <div>{isOpen ? <ChevronUp /> : <ChevronDown />}</div>
      </div>

      {/* Body */}
      {isOpen && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className={`p-1 ${bodyClassName}`}>{children}</div>
        </div>
      )}
    </div>
  );
}
