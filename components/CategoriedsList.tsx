import React from "react";
import { categoriesData } from "../data";
import Link from "next/link";

const CategoriedsList = () => {
  return (
    <div className="flex gap-2 text-sm flex-wrap">
      {categoriesData &&
        categoriesData.map((category, i) => (
          <Link
            key={i + 1}
            className="px-3 py-1 rounded-md bg-slate-800 text-white cursor-pointer"
            href={`/category/${category.name}`}
          >
            {category.name}
          </Link>
        ))}
    </div>
  );
};

export default CategoriedsList;
