"use client";
import { useState } from "react";
import Accordion from "./accordion";
import { open } from "fs/promises";

export default function Home() {
  const [openIds, setOpenIds] = useState<number[]>([]);
  const section = [
    {
      head: "This is the title of the accordion",
      id: 1,
      content: ` Hello Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Necessitatibus, explicabo vitae architecto a, debitis illo perferendis
    laborum beatae dolorum minima tempora odit. In.`,
    },
    {
      head: "This is the title of the accordion",
      id: 3,
      content: ` Hello Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Necessitatibus, explicabo vitae architecto a, debitis illo perferendis
    laborum beatae dolorum minima tempora odit. In.`,
    },
    {
      head: "This is the title of the accordion",
      id: 2,
      content: ` Hello Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Necessitatibus, explicabo vitae architecto a, debitis illo perferendis
    laborum beatae dolorum minima tempora odit. In.`,
    },
  ];

  const handleOpen = (id: number) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item != id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <main className="min-w-screen min-h-screen p-2">
      <h1>Accordion Demo</h1>
      <br />
      {section &&
        section.map((item) => (
          <Accordion
            header={<div>{item.head}</div>}
            onOpen={() => handleOpen(item.id)}
            isOpen={openIds.includes(item.id)}
            key={item.id}
          >
            <div>{item.content}</div>
          </Accordion>
        ))}
    </main>
  );
}
