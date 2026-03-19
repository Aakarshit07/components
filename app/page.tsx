"use client";
import { useState } from "react";
import Tabs from "@/components/tabs/Tabs";
import StartRating from "@/components/StartRating/StartRating";
import Accordion from "@/components/Accordion/Accordion";
import AutoComplete from "@/components/AutoComplete/AutoComplete";
import { useToast } from "@/components/ToastContext/ToastContext";

export default function Home() {
  const [openIds, setOpenIds] = useState<number[]>([]);
  const { addToast } = useToast();
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
    <main className="min-w-screen min-h-screen p-2 bg-black/85">
      <div className="w-full flex flex-col gap-10 items-center justify-evenly text-orange-400">
        <h1 className="border border-white rounded-md p-2">Toast Demo</h1>
        <div className="flex gap-2 items-center justify-center p-4 border rounded-md">
          <button
            onClick={() =>
              addToast("This is tester toast", "success", "Test Toast", 3000)
            }
            className="cursor-pointer border-green-50 bg-green-400 hover:bg-green-500 text-black rounded-md p-2 "
          >
            Success
          </button>

          <button
            onClick={() =>
              addToast("This is tester toast", "info", "Test Toast", 3000)
            }
            className="cursor-pointer border-blue-50 bg-blue-400 hover:bg-blue-500 text-black rounded-md p-2 "
          >
            Info
          </button>

          <button
            onClick={() =>
              addToast("This is tester toast", "warning", "Test Toast", 3000)
            }
            className="cursor-pointer border-orange-50 bg-orange-400 hover:bg-orange-500 text-black rounded-md p-2 "
          >
            Warning
          </button>

          <button
            onClick={() =>
              addToast("This is tester toast", "error", "Test Toast", 3000)
            }
            className="cursor-pointer border-rose-50 bg-rose-400 hover:bg-rose-500 text-black rounded-md p-2 "
          >
            Error
          </button>
        </div>

        <h1 className="border border-white rounded-md p-2">
          Auto Complete Demo
        </h1>
        <AutoComplete />

        <h1 className="border border-white rounded-md p-2">Start Demo</h1>
        <StartRating />

        <h1 className="border border-white rounded-md p-2">Tabs Demo</h1>
        <Tabs tabList={tabList} />

        <h1 className="border border-white rounded-md p-2">Accordion Demo</h1>

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
      </div>
    </main>
  );
}
