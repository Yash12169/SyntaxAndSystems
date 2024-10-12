"use client";

import { inter, rum_raisin } from "@/utils/fonts";
import Bezier from "../bezier/Bezier";

export default function Starter() {
  return (
    <div className="flex flex-col gap-[2rem]">
      <div className="flex flex-col pl-[23rem] leading-tight">
        
        <div className={`text-[9rem] ${inter} font-bold`}>Blogs.</div>
        <div className={`flex gap-3 text-[4.375rem] font-bold ${inter} `}>
            <div className={``}>Click.</div>
            <div className="text-primary">Like.</div>
            <div className={`${rum_raisin} text-primary `}>share.</div>
        </div>
       
    </div>
    <div className="bg-green ml-[4.8rem]">
      <Bezier/>
    </div>
    </div>
  )
}