"use client"; // This component needs interactivity

import { useRouter } from "next/navigation";

export default function Tab({ service }) {
  const router = useRouter();

  return (
    <>
      <div
        className=" w-full gap-4 items-center justify-center my-5 border border-black "
        onClick={() => router.push("/news")}
      >
        <h2 className="text-xl font-bold">All News</h2>
      </div>

      {service.map((each, index) => (
        <div
          className="flex flex-col w-full gap-4 items-center justify-center my-5 border border-black "
          onClick={() => router.push(`/news/${each.slug}`)}
          key={index}
        >
          <h2 className="text-xl font-bold">{each.main_category_name}</h2>
        </div>
      ))}
    </>
  );
}
