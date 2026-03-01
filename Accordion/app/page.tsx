"use client";
import { useState } from "react";
import Accordion from "./accordion";

export default function Home() {
  // Single ID or null (only ONE accordion can be open at a time)
  const [openId, setOpenId] = useState<number | null>(null);

  const sections = [
    {
      head: "Section 1 - What is React?",
      id: 1,
      content:
        "React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small, isolated pieces of code called components.",
    },
    {
      head: "Section 2 - What is Next.js?",
      id: 2,
      content:
        "Next.js is a React framework for production. It gives you the best developer experience with all the features you need for production.",
    },
    {
      head: "Section 3 - What is TypeScript?",
      id: 3,
      content:
        "TypeScript is JavaScript with syntax for types. TypeScript is a strongly typed programming language that builds on JavaScript.",
    },
  ];

  const handleToggle = (id: number) => {
    // If clicking the open accordion, close it (set to null)
    // Otherwise, open the clicked one (set to its id)
    setOpenId(openId === id ? null : id);
  };

  return (
    <main className="min-w-screen min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Accordion Demo (Single Open)</h1>

      <div className="space-y-2 max-w-2xl">
        {sections.map((item) => (
          <Accordion
            key={item.id}
            header={<div className="font-medium">{item.head}</div>}
            isOpen={openId === item.id}
            onToggle={() => handleToggle(item.id)}
          >
            <div className="text-gray-700">{item.content}</div>
          </Accordion>
        ))}
      </div>
    </main>
  );
}
