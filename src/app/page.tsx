// import Image from "next/image";
"use client";

import { bebas_neue } from "@/utils/fonts";
import ThemeController from "@/components/themeController/themecontroller";
import Layout from "@/components/layout/layout";

export default function Home() {

  return (
    <>
      
     
      <h2 className="roboto">this is roboto</h2>
      <h2 className={`${bebas_neue}`}>this is normal</h2>
      <h2 className="font-bebas_neue ">this is bebas nueu</h2>
      <div  className="flex flex-col items-center justify-center min-h-screen">

        <Layout>
          <button className="btn">Button</button>
          <button className="btn btn-neutral">Neutral</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-ghost">Ghost</button>
          <button className="btn btn-link">Link</button>
        </Layout>
        <ThemeController/>

    </div>
    </>
  );
}

