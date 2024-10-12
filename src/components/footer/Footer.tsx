"use client";

import { inter, rum_raisin } from "@/utils/fonts";
import { useState } from "react";
import SpringModal from "../modals/Modals";

export default function Footer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [red,setIsRed] = useState<boolean>(false);
  return (
    <footer className="w-screen bg-base-300 rounded-t-[60px] pt-[8.75rem] pb-[6.25rem] flex flex-col gap-[5rem]">
      <div className="flex flex-col gap-10">
        <div className="   text-center">
          <p className={`${inter}  text-[3.7rem] font-bold`}>
            Be the <span className={`${rum_raisin} text-primary`}>first</span>{" "}
            to get <span className={`${rum_raisin} text-primary`}>access</span>
          </p>
          <div className="flex justify-center text-center ">
            <p className={`w-[50%] text-[1.5rem]  opacity-[0.7] ${inter}`}>
              Stay updated with the latest insights, tips, and exclusive
              content! Subscribe to get updates delivered straight to your
              inbox.
            </p>
          </div>
        </div>
        <div className="flex justify-center  ">
          <input
            className={` bg-base-100 text-[1.125rem] font-medium w-[20%]  rounded-l-[15px] p-5 border-t-[1px] border-b-[1px] border-l-[1px] border-primary focus:outline-none`}
            placeholder="Email Address"
            required
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="flex justify-end items-center border-t-[1px] border-b-[1px] border-r-[1px] bg-base-100 rounded-r-[15px] p-3 w-[10%] border-primary ">
            <div>
              <button
                onClick={() => {
                  if (email.length > 0 && email.includes('@')) {
                    setIsRed(false);
                  }
                  if(email.length == 0 && !email.includes('@')){
                    
                    setIsRed(true);
                  }
                  setIsOpen(true);
                  setEmail("");
                }}
                className={`btn hover:bg-primary bg-primary text-primary-content p-3 rounded-[15px]`}
              >
                Join Newsletter
              </button>

              <SpringModal red={red} isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pr-[12rem] pl-[12rem] gap-[2rem]">
        <div className=" bg-[#A9A9A9] opacity-[0.4] h-[1px]"></div>
        <div className="flex justify-between">
          <div className="flex flex-col justify-between">
            <div>
              <p className={`${inter} text-[1.5rem]`}>Syntax&Systems</p>
            </div>
            <div>
              <p>@2024 Yash Jewalkar</p>
            </div>
          </div>
          <div className="flex justify-between flex-col">
            <div className="flex gap-3">
              <a href="https://linkedin.com/in/yashjewalkar" target="_blank">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_269_4111)">
                    <path
                      d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5563 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2938 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516V20.4516Z"
                      fill="currentColor"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_269_4111">
                      <rect width="24" height="24" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </a>

              <a href="https://github.com/Yash12169" target="_blank">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_269_4112)">
                    <path
                      d="M0 0v24h24V0H0zm12 2.25c5.52 0 10 4.48 10 10 0 4.42-2.87 8.17-6.84 9.49-.5.09-.68-.22-.68-.48 0-.24.01-.86.01-1.69 2.78.6 3.37-1.34 3.37-1.34.45-1.15 1.11-1.46 1.11-1.46.91-.62-.07-.61-.07-.61-1 .07-1.53 1.03-1.53 1.03-.89 1.52-2.34 1.08-2.91.83-.09-.65-.35-1.09-.63-1.34 2.22-.25 4.55-1.11 4.55-4.94 0-1.09-.39-1.98-1.03-2.68.1-.25.45-1.27-.1-2.64 0 0-.84-.27-2.75 1.02-.8-.22-1.65-.33-2.5-.33-.85 0-1.7.11-2.5.33-1.91-1.29-2.75-1.02-2.75-1.02-.55 1.37-.2 2.39-.1 2.64-.64.7-1.03 1.59-1.03 2.68 0 3.84 2.34 4.68 4.57 4.93-.36.31-.68.92-.68 1.85 0 1.34.01 2.42.01 2.75 0 .27-.18.58-.69.48A10.02 10.02 0 012 12.25c0-5.52 4.48-10 10-10z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_269_4112">
                      <rect width="24" height="24" rx="3" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </a>

              <a href="mailto:jewalkaryash@gmail.com" target="_blank">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_269_4112)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24 0H0V24H24V0ZM2 4H22V20H2V4ZM4 6L12 12L20 6V7.5L12 13.5L4 7.5V6ZM4 18H20V9L12 15L4 9V18Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_269_4112">
                      <rect width="24" height="24" rx="3" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </a>

              <a href="https://yash.codes/" target="_blank">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_internet_icon)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24 0H0V24H24V0ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_internet_icon">
                      <rect width="24" height="24" rx="3" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>

              <a href="https://x.com/YashJewalkar" target="_blank">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_269_4112)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24 0H0V24H24V0ZM4 5H9.11097L12.7551 9.8135L16.7424 5.09347H19.3631L13.9939 11.4494L13.9829 11.4352L20.2188 19.672H15.1078L11.2984 14.6403L7.00834 19.7188H4.38766L10.0598 13.0042L4 5ZM8.4123 6.4018H6.82117L15.8065 18.2702H17.3976L8.4123 6.4018Z"
                      fill="currentColor"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_269_4112">
                      <rect width="24" height="24" rx="3" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
           
          </div>
        </div>
      </div>
    </footer>
  );
}
