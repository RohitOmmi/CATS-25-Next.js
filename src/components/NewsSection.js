"use client"; // This component needs interactivity
import React from "react";
import { useRouter, usePathname } from "next/navigation";

function NewsSection({ allNews }) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {allNews?.map((each, index) => {
        const slugname = pathname == "/news" ? each.l1_catname : each.l1_name;
        const titleSlug = slugname?.toLowerCase().replace(" ", "-");
        const route = `news-panel/${titleSlug}/${each.slug}`;
        return (
          <div
            className="p-4 border rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
            key={index}
            onClick={() => router.push(route)}
          >
            <h2 className="text-xl font-bold">{each.news_title}</h2>
            <p className="text-gray-600">{each.full_description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default NewsSection;
