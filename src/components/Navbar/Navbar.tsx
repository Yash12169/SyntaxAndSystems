"use client";
import styles from "./Navbar.module.css";
import { space_grotesk } from "@/utils/fonts";
import ThemeController from "../themeController/themecontroller";
import "./Navbar.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
export default function Navbar() {
  const shimmerRef = useRef<HTMLSpanElement>(null);
  const searchRef = useRef<SVGSVGElement>(null);
  const shimmerParentRef = useRef<HTMLButtonElement>(null);
  const linkedinRef = useRef<SVGSVGElement>(null);
  const githubRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const shimmer = shimmerRef.current;
    const shimmerParent = shimmerParentRef.current;
    const search = searchRef.current;
    const linkedin = linkedinRef.current;
    const github = githubRef.current;
    if (shimmer && shimmerParent && search) {
      const shimmerAnimation = () => {
        gsap.to(shimmer, {
          duration: 0.3,
          x: -4,
          y: 3,
          ease: "circ.in",
          yoyo: true,
          repeat: 1,
        });
        gsap.to(search, {
          duration: 0.3,
          scale: 1.3,
          ease: "circ.in",
          repeat: 1,
          yoyo: true,
        });
      };
      shimmerParent.addEventListener("mouseenter", shimmerAnimation);
    }
    if (linkedin && github) {
      const dance = (element: SVGSVGElement) => {
        const tl = gsap.timeline();
        tl.to(element, {
          duration: 0.3,
          rotate: 15,
          repeat: 1,
          ease: "back.in(2)",
          yoyo: true,
        });
        tl.to(element, {
          duration: 0.3,
          repeat: 1,
          yoyo: true,
        });
      };
      linkedin.addEventListener("mouseenter", () => dance(linkedin));
      github.addEventListener("mouseenter", () => dance(github));
    }
  });
  return (
    <nav
      className={`${styles.nav} shadow-md pb-[1rem] pl-[21rem] pr-[21rem] pt-[1rem]  fixed bg-base-100 w-screen z-[1000] backdrop-blur-[30px] bg-opacity-[0.8]`}
    >
      <div className=" flex items-center gap-[4rem] justify-between">
        <div className={`${space_grotesk} text-primary text-[1.8rem]  font-bold `}>
          <h1>Syntax & Systems</h1>
        </div>

       <div className={`flex gap-[1.5rem] ${space_grotesk}`}>
        <div className="text-[1rem] font-semibold">
            <p>Topics</p>
        </div>
        <div className="text-[1rem] font-semibold">
            <p>About Me</p>
        </div>
        <div className="text-[1rem] font-semibold">
            <p>Categories</p>
        </div>

       </div>
      </div>
      <div className=" flex gap-[2rem] justify-center items-center">
        <button className="w17zbdjf" ref={shimmerParentRef}>
          <span className="w4ln40i">
            <span className="s15za2df ">
              <span ref={shimmerRef} className="s1qsi09f bg-primary"></span>
            </span>
            <svg
              ref={searchRef}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="1.25rem"
              height="1.25rem"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="slgln6u"
              style={{ transform: "scale(1) rotate(0deg)" }}
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
        </button>
        <svg
          ref={linkedinRef}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
        <svg
          ref={githubRef}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>

        <ThemeController />
      </div>
    </nav>
  );
}
