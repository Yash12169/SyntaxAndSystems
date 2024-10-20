"use client";

import Layout from "@/components/layout/layout";
import Navbar from "@/components/Navbar/Navbar";
import Starter from "@/components/starter/Starter";
import Footer from "@/components/footer/Footer";
import { ReactLenis } from "@studio-freight/react-lenis"; // Correct import
import Cursor from "@/components/cursor/Cursor";
import ArticleParent from "@/components/articles/ArticleParent";
import Article from "@/components/articles/Article";
export default function Home() {
  return (
    <ReactLenis root>
      <Layout>
        <Cursor/>
        <Navbar/>
        <Starter />
        <Article />
        <Footer />
      </Layout>
    </ReactLenis>
  );
}
