import { inter } from "@/utils/fonts";
import Image from "next/image";
import { useState } from "react";

interface article {
  id: number;
  title: string;
  pub_date: string;
  image: string;
  read_time: string;
  views: string;
  description: string;
  author: string;
}
const article_data: article[] = [
  {
    id: 0,
    title: "Best UI libraries and frameworks to speed up development",
    pub_date: "Jun 23, 2024",
    read_time: "2 min read",
    image: "/images/uilib.webp",
    views: "1.2k",
    description:
      "In today’s fast-paced world of web development, delivering intuitive, visually appealing, and responsive user interfaces (UI) is essential. However, building UIs from scratch can be time-consuming and requires careful attention to detail. To streamline this process ...",
    author: "Yash Jewalkar",
  },
  {
    id: 1,
    title:
      "Animating the Web with GSAP: A Comprehensive Guide to the GreenSock Animation Platform",
    pub_date: "Jul 5, 2024",
    read_time: "2 min read",
    image: "/images/gsap.webp",
    views: "625",
    description:
      "In the world of modern web development, animations play a critical role in enhancing user experience by making websites more interactive and engaging. Among the numerous animation libraries available, the GreenSock Animation Platform (GSAP) stands ... ",
    author: "Yash Jewalkar",
  },
  {
    id: 2,
    title:
      "Why You Should Choose TypeScript Over JavaScript: A Developer’s Perspective",
    pub_date: "Jul 19, 2024",
    read_time: "2 min read",
    image: "/images/ts.jpeg",
    views: "349",
    description:
      "JavaScript has been the cornerstone of web development for decades, powering everything from simple interactive elements to complex single-page applications (SPAs). However, as the complexity of web applications grows, so do the challenges in ...",
    author: "Yash Jewalkar",
  },
  {
    id: 3,
    title: "Why Next.js Should Be Your Go-to JavaScript Framework",
    pub_date: "Aug 1, 2024",
    read_time: "2 min read",
    image: "/images/next.png",
    views: "233",
    description:
      "In the ever-evolving world of web development, choosing the right framework can be a daunting task. There are several options out there, each with its unique advantages. Next.js, a React-based framework, has emerged as one of the most popular ...",
    author: "Yash Jewalkar",
  },
  {
    id: 4,
    title: "Why Tailwind CSS is Better Than Writing Regular CSS",
    pub_date: "Aug 26, 2024",
    read_time: "2 min read",
    image: "/images/tailwind.png",
    views: "125",
    description:
      "When building modern web applications, developers often face the challenge of writing clean, scalable, and maintainable styles. While traditional CSS provides the foundation for styling web elements, it can become cumbersome and difficult to ...",
    author: "Yash Jewalkar",
  },
  {
    id: 5,
    title:
      "State Management Made Simple: How to Master It Without Breaking a Sweat",
    pub_date: "Sep 7, 2024",
    read_time: "2 min read",
    image: "/images/states.jpg",
    views: "97",
    description:
      "In the rapidly evolving world of web development, handling state effectively is a crucial aspect of building scalable and responsive applications. As developers build increasingly complex applications, the need to manage and synchronize state ...",
    author: "Yash Jewalkar",
  },
  {
    id: 6,
    title: "How to Build a Portfolio That Gets You Hired",
    pub_date: "Oct 2, 2024",
    read_time: "2 min read",
    image: "/images/portfolio.png",
    views: "59",
    description:
      "In today’s competitive job market, having a standout portfolio is crucial for developers seeking to showcase their skills and attract potential employers. A well-crafted portfolio not only demonstrates your technical expertise but also ...",
    author: "Yash Jewalkar",
  },
];

export default function Article() {
  const [page, setPage] = useState(1);
  const pages = 5;
  const numberOfPages = Math.ceil(article_data.length / pages);
  const startIndex = (page - 1) * pages;
  const endIndex = startIndex + pages;
  const currentArticles = article_data.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col gap-[4rem]  pb-[3.5rem]">
      <div className=" pl-[23rem] ">
        <p className={`text-[3rem] ${inter} font-bold`}>My Recent Articles</p>
      </div>
      <div className=" flex flex-col items-center h-fit justify-start gap-[3rem] ">
        {currentArticles.map((article) => (
          <div
            key={article.id}
            className="rounded-[20px] flex w-[60%]  justify-between  bg-primary cursor-pointer"
          >
            <div className="rounded-[20px] flex justify-between px-6 py-4 border-[2px] border-primary bg-base-100 translate-x-[-1%] translate-y-[-3.5%] hover:translate-x-[0%] transition duration-300 hover:translate-y-[0%] transition duration-300">
              <div className="flex flex-col  justify-between pt-6 pb-6 gap-3">
                <div className="flex flex-col]">
                  <p
                    className={`font-bold ${inter} text-[2.2rem] leading-tight  w-[95%]`}
                  >
                    {article.title}
                  </p>
                </div>
                <div className="flex w-fit gap-6 text-[0.95rem] font-semibold opacity-[0.6]">
                  <div className="flex w-fit justify-center items-center">
                    <p>{article.pub_date}</p>
                  </div>
                  <div className="flex w-fit justify-center items-center">
                    <svg
                      className="mr-1 h-4 w-4 fill-current"
                      viewBox="0 0 576 512"
                    >
                      <path d="M540.9 56.77c-45.95-16.66-90.23-24.09-129.1-24.75-60.7.94-102.7 17.45-123.8 27.72-21.1-10.27-64.1-26.8-123.2-27.74-40-.05-84.4 8.35-129.7 24.77C14.18 64.33 0 84.41 0 106.7v302.9c0 14.66 6.875 28.06 18.89 36.8 11.81 8.531 26.64 10.98 40.73 6.781 118.9-36.34 209.3 19.05 214.3 22.19C277.8 477.6 281.2 480 287.1 480c6.52 0 10.12-2.373 14.07-4.578 10.78-6.688 98.3-57.66 214.3-22.27 14.11 4.25 28.86 1.75 40.75-6.812C569.1 437.6 576 424.2 576 409.6V106.7c0-22.28-14.2-42.35-35.1-49.93zM272 438.1c-24.95-12.03-71.01-29.37-130.5-29.37-27.83 0-58.5 3.812-91.19 13.77-4.406 1.344-9 .594-12.69-2.047C34.02 417.8 32 413.1 32 409.6V106.7c0-8.859 5.562-16.83 13.86-19.83C87.66 71.7 127.9 63.95 164.5 64c51.8.81 89.7 15.26 107.5 23.66V438.1zm272-28.5c0 4.375-2.016 8.234-5.594 10.84-3.766 2.703-8.297 3.422-12.69 2.125C424.1 391.6 341.3 420.4 304 438.3V87.66c17.8-8.4 55.7-22.85 107.4-23.66 35.31-.063 76.34 7.484 118.8 22.88 8.2 3 13.8 10.96 13.8 19.82v302.9z"></path>
                    </svg>
                    <p>{article.read_time}</p>
                  </div>
                  <div className="flex w-fit justify-center items-center">
                    <svg
                      className="mr-1 h-4 w-4 fill-current"
                      viewBox="0 0 384 512"
                    >
                      <path d="M136 320h-16c-4.4 0-8 3.6-8 8v96c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-96c0-4.4-3.6-8-8-8zm64-96h-16c-4.4 0-8 3.6-8 8v192c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V232c0-4.4-3.6-8-8-8zm40 72v128c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8zM369.9 97.98L286.02 14.1c-9-9-21.2-14.1-33.89-14.1H47.99C21.5.1 0 21.6 0 48.09v415.92C0 490.5 21.5 512 47.99 512h288.02c26.49 0 47.99-21.5 47.99-47.99V131.97c0-12.69-5.1-24.99-14.1-33.99zM256.03 32.59c2.8.7 5.3 2.1 7.4 4.2l83.88 83.88c2.1 2.1 3.5 4.6 4.2 7.4h-95.48V32.59zm95.98 431.42c0 8.8-7.2 16-16 16H47.99c-8.8 0-16-7.2-16-16V48.09c0-8.8 7.2-16.09 16-16.09h176.04v104.07c0 13.3 10.7 23.93 24 23.93h103.98v304.01z"></path>
                    </svg>
                    <p>{article.views} views</p>
                  </div>
                </div>

                <div className={`${inter}  w-[90%]`}>
                  <p className={`${inter} text-[1rem]`}>
                    {article.description}
                  </p>
                </div>
              </div>
              <div className=" width-[50%] relative flex justify-center items-center m-auto pt-5 pb-5  w-[70%] h-[80%]">
                <Image
                  className="rounded-[15px]"
                  layout="fill"
                  objectFit="cover"
                  src={article.image}
                  alt={`img-${article.id}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" m-auto">
        <div className="join">
          {[...Array(numberOfPages)].map((_, index) => (
            <input
              key={index}
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label={String(index + 1)}
              checked={page === index + 1}
              onClick={() => setPage(index + 1)}
              
            />
          ))}
        </div>
      </div>
    </div>
  );
}
