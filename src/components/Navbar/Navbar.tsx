"use client";
import styles from "./Navbar.module.css";
import { space_grotesk } from "@/utils/fonts";
import ThemeController from "../themeController/themecontroller";
import "./Navbar.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
export default function Navbar() {
  const shimmerRef = useRef<HTMLSpanElement>(null);
  const searchRef = useRef<SVGSVGElement>(null);
  const shimmerParentRef = useRef<HTMLButtonElement>(null);
  const linkedinRef = useRef<SVGSVGElement>(null);
  const githubRef = useRef<SVGSVGElement>(null);
  const menuPathRef = useRef<SVGPathElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLParagraphElement>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const aboutMenuRef = useRef<HTMLParagraphElement>(null);
  const [position, setPosition] = useState<number | string>(0);
  const [currentClick, setCurrentClick] = useState<string>("");
  const [currentMenuSpot, setCurrentMenuSpot] = useState<string>("");

  useEffect(() => {
    const aboutMenu = aboutMenuRef.current;
    const box = boxRef.current;
    if (aboutMenu && box) {
      if (openMenu) {
        setCurrentClick("about");
        if (currentClick === currentMenuSpot) {
          const menuPath = menuPathRef.current;
          //menu close
          const reverseAnimation = () => {
            setOpenMenu(false);
            gsap.to(menuPath, {
              x: position,
              attr: { d: "M 0 12 C 8 12 16 12 16 12 C 16 12 24 12 32 12 Z" },
              duration: 0.3,
            });
            gsap.to(box, {
              opacity: 0,
              y: -20,
              duration: 0.5,
            });
          };
          aboutMenu.addEventListener("click", reverseAnimation);
          return () => {
            aboutMenu.removeEventListener("click", reverseAnimation);
          };
        } 
        else {
          setPosition(-100);
          const shift = () => {
            setCurrentMenuSpot("about")
            gsap.to(box, {
              x: position,
              duration: 0.8,
              ease: "power3.inOut",
            });
          };
          aboutMenu.addEventListener("click", shift);
          return () => {
            aboutMenu.removeEventListener("click", shift);
          };
        }
      } else {
        //about ke niche open menu
      }
    }
  }, [openMenu, position,currentMenuSpot,currentClick]);

  useEffect(() => {
    const menuPath = menuPathRef.current;
    const menu = menuRef.current;
    const box = boxRef.current;
    if (menuPath && menu && box) {
      if (!openMenu) {
        const menuAnimation = () => {
          setOpenMenu(true);
          gsap.to(menuPath, {
            attr: { d: "M 0 12 C 8 12 9.6 0 16 0 C 22.4 0 24 12 32 12 Z" },
            duration: 0.3,
          });
          gsap.to(box, {
            opacity: 1,
            y: 20,
            duration: 0.5,
          });
        };
        menu.addEventListener("click", menuAnimation);
        return () => {
          menu.removeEventListener("click", menuAnimation);
        };
      } else {
        const reverseAnimation = () => {
          setOpenMenu(false);
          setPosition(0);
          gsap.to(menuPath, {
            x: position,
            attr: { d: "M 0 12 C 8 12 16 12 16 12 C 16 12 24 12 32 12 Z" },
            duration: 0.3,
          });
          gsap.to(box, {
            opacity: 0,
            y: -20,
            duration: 0.5,
          });
        };
        menu.addEventListener("click", reverseAnimation);
        return () => {
          menu.removeEventListener("click", reverseAnimation);
        };
      }

      // } else {
      //   const pointerAnimation = gsap.from(menuPath, {
      //     attr: { d: "M 0 12 C 8 12 9.6 0 16 0 C 22.4 0 24 12 32 12 Z" },
      //     duration: 0.3,
      //   });
      //   const moveAnimation = gsap.from(box, {
      //     opacity: 1,
      //     y: 20,
      //     duration: 0.5,
      //   });
      //   return () => {
      //     moveAnimation.kill();
      //     pointerAnimation.kill();
      //   };
    }
  }, [openMenu]);
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
      className={`${styles.nav} shadow-md pb-[1rem] pl-[13rem] pr-[16rem] pt-[1rem]  fixed bg-base-100 w-screen z-[1000] backdrop-blur-[30px] bg-opacity-[0.8]`}
    >
      <div className=" flex items-center gap-[4rem] justify-between">
        <div
          className={`${space_grotesk} text-primary text-[1.8rem]  font-bold `}
        >
          <h1>Syntax & Systems</h1>
        </div>

        <div className={`flex gap-[1.5rem] ${space_grotesk}`}>
          <div className="text-[1rem] font-semibold">
            <p>Topics</p>
          </div>
          <div className="text-[1rem] font-semibold">
            <p ref={aboutMenuRef}>About Me</p>
          </div>

          <div className="text-[1rem] font-semibold relative">
            <p ref={menuRef} className="cursor-pointer">
              Categories
            </p>
            <div
              ref={boxRef}
              className="opacity-0 flex flex-col items-center absolute left-[-5.5rem] top-[2.5rem]"
            >
              <svg
                width="32"
                height="12"
                fill="currentColor"
                viewBox="0 0 32 12"
                className="sfxum9j s1898y83"
                style={{ viewTransitionName: "navigation-tip" }}
              >
                <path
                  ref={menuPathRef}
                  d="M 0 12 C 8 12 16 12 16 12 C 16 12 24 12 32 12 Z"
                ></path>
              </svg>
              <div
                className={`gap-[1.5rem] bg-current ${space_grotesk} rounded-xl flex justify-between px-5 py-[1rem]`}
              >
                <div className="flex flex-col gap-[0.3rem]">
                  <div className="flex items-center gap-[0.6rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1rem"
                      height="1rem"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m15 5 4 4"></path>
                      <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path>
                      <path d="m8 6 2-2"></path>
                      <path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z"></path>
                      <path d="m18 16 2-2"></path>
                      <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path>
                    </svg>
                    <p className="text-black">CSS</p>
                  </div>
                  <div className="flex  items-center gap-[0.6rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1rem"
                      height="1rem"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M2 6h4"></path>
                      <path d="M2 10h4"></path>
                      <path d="M2 14h4"></path>
                      <path d="M2 18h4"></path>
                      <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                      <path d="M9.5 8h5"></path>
                      <path d="M9.5 12H16"></path>
                      <path d="M9.5 16H14"></path>
                    </svg>
                    <p className="text-black">General</p>
                  </div>

                  <div className="flex items-center gap-[0.6rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1rem"
                      height="1rem"
                      viewBox="0 0 256 256"
                      version="1.1"
                      preserveAspectRatio="xMidYMid"
                      className="text-black"
                    >
                      <g>
                        <path
                          d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                    <p className="text-black">Next</p>
                  </div>
                </div>
                <div className="flex flex-col gap-[0.3rem]">
                  <div className="flex  items-center gap-[0.6rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1rem"
                      height="1rem"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path>
                      <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path>
                    </svg>
                    <p className="text-black">React</p>
                  </div>
                  <div className="flex  items-center gap-[0.6rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1rem"
                      height="1rem"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect
                        x="2.75"
                        y="2.75"
                        width="18.5"
                        height="18.5"
                        rx="3.25"
                      ></rect>
                      <path
                        d="M11.2824 10.8906H12.6545L12.6594 15.8174C12.6561 16.1559 12.591 16.4652 12.4641 16.7451C12.3404 17.0218 12.1695 17.2611 11.9514 17.4629C11.7333 17.6647 11.4761 17.821 11.1799 17.9316C10.8869 18.0423 10.5712 18.0977 10.2326 18.0977C9.87454 18.0977 9.54902 18.0521 9.25605 17.9609C8.96309 17.8698 8.71244 17.7331 8.5041 17.5508C8.29251 17.3717 8.12813 17.1455 8.01094 16.8721C7.89375 16.5986 7.83353 16.278 7.83027 15.9102H9.20723C9.20723 16.0794 9.2235 16.2275 9.25605 16.3545C9.28861 16.4814 9.33744 16.5889 9.40254 16.6768C9.48717 16.7842 9.59785 16.8639 9.73457 16.916C9.87129 16.9681 10.0373 16.9941 10.2326 16.9941C10.3889 16.9941 10.5321 16.9648 10.6623 16.9062C10.7925 16.8444 10.9032 16.7614 10.9943 16.6572C11.0855 16.5531 11.1555 16.4294 11.2043 16.2861C11.2564 16.1396 11.2824 15.9834 11.2824 15.8174V10.8906ZM17.3252 16.1445C17.3252 16.0176 17.3024 15.8988 17.2568 15.7881C17.2145 15.6774 17.1413 15.5732 17.0371 15.4756C16.9297 15.3812 16.7897 15.2949 16.6172 15.2168C16.4479 15.1354 16.2363 15.0605 15.9824 14.9922C15.5885 14.8848 15.2419 14.7546 14.9424 14.6016C14.6462 14.4486 14.4036 14.2809 14.2148 14.0986C14.026 13.9163 13.8828 13.7145 13.7852 13.4932C13.6908 13.2718 13.6436 13.0309 13.6436 12.7705C13.6436 12.471 13.707 12.1992 13.834 11.9551C13.9609 11.7109 14.1367 11.5026 14.3613 11.3301C14.5859 11.1576 14.8512 11.0257 15.1572 10.9346C15.4632 10.8402 15.7952 10.793 16.1533 10.793C16.5244 10.793 16.863 10.8467 17.1689 10.9541C17.4782 11.0615 17.7435 11.2113 17.9648 11.4033C18.1862 11.5986 18.3587 11.8298 18.4824 12.0967C18.6061 12.3636 18.668 12.6566 18.668 12.9756H17.3301C17.3236 12.8161 17.2943 12.6696 17.2422 12.5361C17.1934 12.4027 17.1201 12.2871 17.0225 12.1895C16.9215 12.0951 16.7962 12.0218 16.6465 11.9697C16.5 11.9144 16.3275 11.8867 16.1289 11.8867C15.9466 11.8867 15.7839 11.9095 15.6406 11.9551C15.5007 11.9974 15.3818 12.0576 15.2842 12.1357C15.1865 12.2171 15.1117 12.3132 15.0596 12.4238C15.0107 12.5312 14.9863 12.6484 14.9863 12.7754C14.9863 12.9089 15.0189 13.0293 15.084 13.1367C15.1523 13.2441 15.25 13.3402 15.377 13.4248C15.5039 13.5127 15.6569 13.5924 15.8359 13.6641C16.0182 13.7357 16.2233 13.8024 16.4512 13.8643C16.6953 13.9326 16.9281 14.0156 17.1494 14.1133C17.3708 14.2109 17.5742 14.3232 17.7598 14.4502C18.0397 14.6585 18.2627 14.901 18.4287 15.1777C18.5947 15.4544 18.6777 15.7734 18.6777 16.1348C18.6777 16.4473 18.6143 16.7256 18.4873 16.9697C18.3636 17.2106 18.1911 17.4141 17.9697 17.5801C17.7484 17.7493 17.4847 17.8779 17.1787 17.9658C16.8727 18.0505 16.5391 18.0928 16.1777 18.0928C15.8229 18.0928 15.4714 18.0407 15.123 17.9365C14.778 17.8291 14.4769 17.6729 14.2197 17.4678C13.9756 17.266 13.7819 17.0283 13.6387 16.7549C13.4987 16.4814 13.4287 16.1608 13.4287 15.793H14.7764C14.7829 16.0078 14.8203 16.1917 14.8887 16.3447C14.957 16.4977 15.0531 16.623 15.1768 16.7207C15.2972 16.8184 15.4421 16.89 15.6113 16.9355C15.7839 16.9811 15.9727 17.0039 16.1777 17.0039C16.36 17.0039 16.5212 16.9827 16.6611 16.9404C16.8044 16.8981 16.9248 16.8395 17.0225 16.7646C17.1201 16.6898 17.195 16.6003 17.2471 16.4961C17.2992 16.3887 17.3252 16.2715 17.3252 16.1445Z"
                        stroke="none"
                        fill="black"
                      ></path>
                    </svg>
                    <p className="text-black">JavaScript</p>
                  </div>

                  <div className="flex items-center gap-[0.6rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1rem"
                      height="1rem"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w1see7f3"
                    >
                      <defs>
                        <mask id="mask-rq">
                          <polyline
                            fill="#FFFFFF"
                            points="-10 0, 24 0, 24 24, 0 24"
                          ></polyline>
                        </mask>
                      </defs>
                      <g mask="url(#mask-rq)">
                        <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H-12"></path>
                        <path d="M9.6 4.6A2 2 0 1 1 11 8H-12"></path>
                        <path d="M12.6 19.4A2 2 0 1 0 14 16H-12"></path>
                      </g>
                    </svg>
                    <p className="text-black">Animation</p>
                  </div>
                </div>
              </div>
            </div>
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
