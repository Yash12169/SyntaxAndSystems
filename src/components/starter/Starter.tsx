"use client";
import { inter, rum_raisin, space_grotesk } from "@/utils/fonts";
import Bezier from "../bezier/Bezier";
import TinkersynthMachine from "../../../TinkerSynthMachine/components/TinkerSynthMachine";

export default function Starter() {
  return (
    <div className="flex flex-col gap-[2rem]">
      <div className="flex justify-between pr-[26rem] pl-[23rem] leading-tight  items-center">
        <div>
          <div className={`text-[9rem] ${space_grotesk} font-bold`}>Blogs.</div>
          <div className={`flex gap-3 text-[4.375rem] font-bold ${inter} `}>
            <div className={`${space_grotesk}`}>Click.</div>
            <div className={`text-primary ${space_grotesk}`}>Like.</div>

            <div className={`${rum_raisin} text-primary `}>share.</div>
          </div>
        </div>
        <div>
          <TinkersynthMachine/>
        </div>
      </div>
      <div className="bg-green ml-[4.8rem]">
        <Bezier />
      </div>
    </div>
  );
}
