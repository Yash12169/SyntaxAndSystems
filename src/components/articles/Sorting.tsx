"use client";

import { space_grotesk } from "@/utils/fonts";

interface Tags {
  id: number;
  name: string;
}

export default function Sorting() {
  return (
    <div className=" w-[100%] p-5 flex flex-col gap-[2rem]">
      <div className={`${space_grotesk} font-bold text-[1.5rem]` }>
        <h1 className="text-accent ml-[3rem]">Browse By Category</h1>
      </div>
      <div className="flex flex-wrap gap-[1rem] ml-[3rem]">
      {tags.map((tag) => (
        <div className="cursor-pointer px-2 py-1  hover:bg-primary hover:text-primary-content  rounded-md border-[1px] border-primary w-fit text-primary" key={tag.id}>
            <p className={`${space_grotesk} text-[0.9rem] font-semibold`}>{tag.name}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

const tags: Tags[] = [
  {
    id: 0,
    name: "JavaScript",
  },
  {
    id: 1,
    name: "React.js",
  },
  {
    id: 2,
    name: "CSS",
  },
  {
    id: 3,
    name: "Animation",
  },
  {
    id: 4,
    name: "Next.js",
  },
  {
    id: 5,
    name: "Tailwind",
  },
];
