"use client";
import { useState } from "react";
import Tabs from "@/components/tabs/Tabs";
import StartRating from "@/components/StartRating/StartRating";
import Accordion from "@/components/Accordion/Accordion";
import AutoComplete from "@/components/AutoComplete/AutoComplete";

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

  const tabList = [
    { id: 123, title: "tab1", content: <div>Hello new user 1</div> },
    { id: 132, title: "tab2", content: <div>Hello new user 2</div> },
    { id: 432, title: "tab3", content: <div>Hello new user 3</div> },
  ];

  const handleOpen = (id: number) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item != id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <main className="min-w-screen min-h-screen p-2 bg-white">
      <AutoComplete />

      {/*  */}

      <br />
      <hr />
      <br />
      <br />

      <StartRating />

      <hr />
      <br />
      <br />

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
      <br />
      <br />
      <hr />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />

      {/*  */}

      <Tabs tabList={tabList} />
    </main>
  );
}
