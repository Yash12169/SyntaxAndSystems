"use client";
import styles from "./Navbar.module.css";
import { chakra_petch } from "@/utils/fonts";
import ThemeController from "../themeController/themecontroller";

export default function Navbar() {
  return (
    <nav
      className={`${styles.nav} pl-[23rem] pr-[23rem] mb-[5rem] pt-[2rem]`}
    >
      <div className={`${chakra_petch} text-[2rem]  font-bold `}>
        <h1>Syntax & Systems</h1>
      </div>
      <div>
        <ThemeController />
      </div>
     
     
        
        
     
        


      
       
    </nav>
  );
}
