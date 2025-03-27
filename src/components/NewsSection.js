"use client"; // This component needs interactivity
import React from "react";
import { useRouter, usePathname } from "next/navigation";

function NewsSection({ allNews }) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="w-full">
      {allNews?.map((each, index) => {
        const slugname = pathname == "/news" ? each.l1_catname : each.l1_name;
        const titleSlug = slugname?.toLowerCase().replace(" ", "-");
        const route = `news-panel/${titleSlug}/${each.slug}`;
        return (
          <div
            className="w-full p-4 rounded-lg  bg-white shadow-sm  my-2 "
            key={index}
            onClick={() => router.push(route)}
          >
            <h2 className="text-xl font-bold">{each.news_title}</h2>
            <p className="text-gray-600" dangerouslySetInnerHTML={{__html:each.full_description}}/>
          </div>
        );
      })}
    </div>
  );
}

export default NewsSection;
