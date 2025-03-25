"use client"; // This component needs interactivity

import { useRouter } from "next/navigation";

export default function Tab({ service }) {
  const router = useRouter();

  return (
    <>
      <div
        className="p-4 border rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
        onClick={() => router.push("/news")}
      >
        <h2 className="text-xl font-bold">All News</h2>
      </div>

      {service.map((each, index) => (
        <div
          className="p-4 border rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
          onClick={() => router.push(`/news/${each.slug}`)}
          key={index}
        >
          <h2 className="text-xl font-bold">{each.main_category_name}</h2>
        </div>
      ))}
    </>
  );
}
