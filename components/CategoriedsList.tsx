import React from "react";
import Link from "next/link";
import { TCategory } from "@/app/types";
const GetCategories =async (): Promise<TCategory[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`)

    if(res.ok) {
      const categories = await res.json();
      return categories
    }
  } catch (error) {
    console.log(error);
    
  }
  return null;
}

const CategoriedsList = async () => {
  const categories = await GetCategories()
  return (
    <div className="flex gap-2 text-sm flex-wrap">
      {categories &&
        categories.map((category, i) => (
          <Link
            key={i + 1}
            className="px-3 py-1 rounded-md bg-slate-800 text-white cursor-pointer"
            href={`/category/${category.catName}`}
          >
            {category.catName}
          </Link>
        ))}
    </div>
  );
};

export default CategoriedsList;
