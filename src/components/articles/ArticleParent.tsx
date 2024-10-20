"use client";

import Article from "./Article";
import Featured from "./Featured";
import Sorting from "./Sorting";

export default function ArticleParent() {
  return (
    <div className="flex justify-between">
        <Article/>
        
    </div>
  )
}
