"use client";

import Layout from "@/components/layout/layout";
import Navbar from "@/components/Navbar/Navbar";
import Starter from "@/components/starter/Starter";
import Article from "@/components/articles/Article";
import Footer from "@/components/footer/Footer";
import { ReactLenis } from "@studio-freight/react-lenis"; // Correct import
import Cursor from "@/components/cursor/Cursor";
export default function Home() {
  return (
    <ReactLenis root>
      <Layout>
        <Cursor/>
        <Navbar/>
        <Starter />
        <Article />
        <Footer />
        {/* <Navbar /> */}
        {/* <div className="w-screen h-screen"> */}
        {/* <h2 className="roboto">this is roboto</h2> */}
        {/* <h2 className={`${bebas_neue}`}>this is normal</h2> */}
        {/* <h2 className="font-bebas_neue ">this is bebas nueu</h2> */}
        {/* <div className="flex flex-col items-center justify-center min-h-screen"> */}
        {/* <button className="btn">Button</button> */}
        {/* <button className="btn btn-neutral">Neutral</button> */}
        {/* <button className="btn btn-primary">Primary</button> */}
        {/* <button className="btn btn-secondary">Secondary</button> */}
        {/* <button className="btn btn-accent">Accent</button> */}
        {/* <button className="btn btn-ghost">Ghost</button> */}
        {/* <button className="btn btn-link">Link</button> */}
        {/* </div> */}
        {/* </div> */}
      </Layout>
    </ReactLenis>
  );
}
