import { useAtom } from "jotai";
import { themeAtom } from "../../atoms/atoms";
import "./themeController.css";
import { useState } from "react";

interface theme{
  id:string | number,
  theme: string,
  primary: string,
  secondary: string,
  accent:string,
  neutral: string,
}

const ThemeController = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  const [openTheme, setOpenTheme] = useState(false);
  const themes: theme[] = [
    {
      id: 0,
      theme: 'dark',
      primary: "#661AE6",
      secondary: "#D926A9",
      accent: "#1FB2A6",
      neutral: "#191D24",
    },
    {
      id: 1,
      theme: 'cupcake',
      primary: "#65c3c8",
      secondary: "#ef9fbc",
      accent: "#eeaf3a",
      neutral: "#291334",
    },
    {
      id: 2,
      theme: 'emerald',
      primary: "#66cc8a",
      secondary: "#377cfb",
      accent: "#ea5234",
      neutral: "#1e293b",
    },
    {
      id: 3,
      theme: 'forest',
      primary: "#166534",
      secondary: "#22d3ee",
      accent: "#37cdbe",
      neutral: "#212121",
    },
    {
      id: 4,
      theme: 'lofi',
      primary: "#808080",
      secondary: "#d1d5db",
      accent: "#1a1a1a",
      neutral: "# cfcfcf",
    },
    {
      id: 5,
      theme: 'autumn',
      primary: "#D97706",
      secondary: "#F59E0B",
      accent: "#92400E",
      neutral: "#1f2937",
    },
    {
      id: 6,
      theme: 'coffee',
      primary: "#DB924B",
      secondary: "#D9A29F",
      accent: "#B78C6C",
      neutral: "#120E0B",
    },
    {
      id: 7,
      theme: 'dim',
      primary: "#374151",
      secondary: "#4B5563",
      accent: "#6B7280",
      neutral: "#111827",
    },
    {
      id: 8,
      theme: 'sunset',
      primary: "#F97316",
      secondary: "#FB923C",
      accent: "#F43F5E",
      neutral: "#24292F",
    },
  ];
  
  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };
  const handleThemeChange2 = (theme: string) => {
    setTheme(theme);
  };

  return (
    <div>
      {/* <div className="absolute w-screen h-screen z-[0] top-0 left-0 bg-orange-200" onClick={()=>setOpenTheme(false)}></div> */}
      <div style={{zIndex: 10}}
        className="btn border-none flex hover:bg-white hover:bg-opacity-[0.1] justify-center items-center bg-transparent  w-fit  h-[70px] rounded-[15px]  cursor-pointer"
        onClick={() => setOpenTheme(!openTheme)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          className={"fill-primary  z-10"}
        >
          <path d="M9.38 21.646A9.985 9.985 0 0 0 12 22l.141-.001a2.998 2.998 0 0 0 2.515-1.425c.542-.876.6-1.953.153-2.88l-.198-.415c-.453-.942-.097-1.796.388-2.281.485-.485 1.341-.841 2.28-.388h.001l.413.199a2.99 2.99 0 0 0 2.881-.153A2.997 2.997 0 0 0 22 12.141a9.926 9.926 0 0 0-.353-2.76c-1.038-3.827-4.353-6.754-8.246-7.285-3.149-.427-6.241.602-8.471 2.833S1.666 10.247 2.096 13.4c.53 3.894 3.458 7.208 7.284 8.246zM15.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-5-1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM9 15.506a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-2.5-6.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 6.5 9.006z"></path>
        </svg>
        <div className="z-10">
          <p className="">Theme</p>
        </div>
      </div>

      {openTheme && (
        <div className="gap-[1rem] z-[10] flex flex-col absolute top-[2.5rem] right-8 w-[15%] bg-white bg-opacity-[0.1] p-3 rounded-[15px]">
          {themes.map((theme) => (
            <div onClick={() => handleThemeChange2(theme.theme)} key={theme.id} className="flex justify-between p-4 hover:bg-base-200 hover:bg-opacity-[1]  rounded-[15px]  cursor-pointer bg-base-100 ">
              <p className=" ">
                {theme.theme}
              </p>
              <div className="flex  gap-2 p-[0.5]">
                <div style={{backgroundColor: theme.primary}} className={`w-[7px] h-[90%] rounded-full`}></div>
                <div style={{backgroundColor: theme.secondary}} className={`w-[7px] h-[90%] rounded-full`}></div>
                <div style={{backgroundColor: theme.accent}} className={`w-[7px] h-[90%] rounded-full`}></div>
                <div style={{backgroundColor: theme.neutral}} className={`bg-base-200 w-[7px] h-[90%] rounded-full`}></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeController;
