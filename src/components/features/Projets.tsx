"use client";

import { Tabs } from "../ui/tabs";
import  Mern from "../../assets/1.png";
import VsCode from "../../assets/2.png";


export function Projets() {
  const tabs = [
    {
      title: "MERN",
      value: "MERN",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold font3 dark:text-[#0a001a] text-[#ede4fb] bg-gradient-to-br dark:bg-[#efe5ff] bg-[#0a001a]">
          <p>Projets MERN ( MongoDB, Express, ReactJS, NodeJS)</p>
          <DummyContent1 />
        </div>
      ),
    },
    {
      title: "Next JS",
      value: "Next JS",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold font3 dark:text-[#0a001a] text-[#ede4fb] bg-gradient-to-br dark:bg-[#efe5ff] bg-[#0a001a]">
          <p>Projet Next JS</p>
          <DummyContent2 />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold font3 dark:text-[#0a001a] text-[#ede4fb] bg-gradient-to-br dark:bg-[#efe5ff] bg-[#0a001a]">
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold font3 dark:text-[#0a001a] text-[#ede4fb] bg-gradient-to-br dark:bg-[#efe5ff] bg-[#0a001a]">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold font3 dark:text-[#0a001a] text-[#ede4fb] bg-gradient-to-br dark:bg-[#efe5ff] bg-[#0a001a]">
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div id="Projets" className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start lg:mt-[200px] mt-[180px]">
      <h1 className="md:text-5xl text-4xl w-full font3 text-left pl-3 mb-5">Mes projets</h1>
      <Tabs tabs={tabs} />
    </div>
  );
}

export const DummyContent1 = () => {
  return (
    <img
      src={Mern}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

export const DummyContent2 = () => {
  return (
    <img
      src={VsCode}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

export const DummyContent = () => {
  return (
    <img
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
