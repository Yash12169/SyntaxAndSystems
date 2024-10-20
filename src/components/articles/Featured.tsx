"use client";
import { space_grotesk } from "@/utils/fonts";
import { useEffect, useRef } from "react";
import gsap from "gsap";
interface Topics {
  id: number;
  name: string;
}

export default function Featured() {
  const sentenceRef = useRef<{ [id: number]: HTMLParagraphElement }>({});
  const arrowRef = useRef<{ [id: number]: SVGSVGElement }>({});

  useEffect(() => {
    topics.forEach((topics) => {
      const sentence = sentenceRef.current[topics.id];
      const arrow = arrowRef.current[topics.id];
      let animation: gsap.core.Animation | undefined;
      if (sentence && arrow) {
        const hoverAnim = () => {
           gsap.to(arrow, {
            duration: 0.3,
            width: 65,
            onStart:()=> {
                arrow.classList.add("text-primary")
            }
          });
        };
        const removeHoverAnim = () => {
          gsap.to(arrow, {
           duration: 0.3,
           ease:"elastic.out(1.5,0.3)",
           width: 50,
           onStart: ()=>{
            arrow.classList.remove("text-primary");
           }
         });
       };
        sentence.addEventListener("mouseenter", hoverAnim);
        sentence.addEventListener("mouseleave",removeHoverAnim)
        return () => {
          if(animation){
            animation.kill();
          }
          sentence.removeEventListener("mouseenter", hoverAnim);
          sentence.removeEventListener("mouseleave",removeHoverAnim)
        };
      }
    });
  }, []);
  return (
    <div className=" w-[100%] p-5 flex flex-col gap-[2rem]">
      <div className={`${space_grotesk}  font-bold text-[1.5rem]`}>
        <h1 className="text-accent ml-[3rem]">Trending Now</h1>
      </div>
      <div className="flex flex-wrap gap-[1rem]">
        {topics.map((topic) => (
          <div
            className="flex justify-between w-[100%] relative"
            key={topic.id}
          >
            <div className="w-[15%]">
              <svg
                ref={(element) => {
                  if (element) arrowRef.current[topic.id] = element;
                }}
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className=""
                width={"40px"}
                height={"24px"}
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </div>
            <div className="w-[85%] relative hover:text-primary ">
              <p
                ref={(el) => {
                  if (el) {
                    sentenceRef.current[topic.id] = el;
                  }
                }}
                className={`${space_grotesk} cursor-pointer text-[1rem] font-semibold`}
              >
                {topic.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
const topics: Topics[] = [
  {
    id: 0,
    name: "Animating the Web with GSAP: A Comprehensive Guide to the GreenSock Animation Platform",
  },
  {
    id: 1,
    name: "Why You Should Choose TypeScript Over JavaScript: A Developer’s Perspective",
  },
  {
    id: 2,
    name: "Why Next.js Should Be Your Go-to JavaScript Framework",
  },
  {
    id: 3,
    name: "Why Tailwind CSS is Better Than Writing Regular CSS",
  },
  {
    id: 4,
    name: "State Management Made Simple: How to Master It Without Breaking a Sweat",
  },
  {
    id: 5,
    name: "How to Build a Portfolio That Gets You Hired",
  },
];
