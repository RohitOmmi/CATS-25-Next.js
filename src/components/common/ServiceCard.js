"use client"; // This component needs interactivity

import { useRouter, usePathname } from "next/navigation";

export default function ServiceCard({ service }) {
  const router = useRouter();
  const pathname = usePathname();

  const cardTitle = service.category_name
    ? service.category_name
    : service.main_category_name;

  const route = service.category_name
    ? `${pathname}/${service.slug}`
    : `/services/${service.slug}`;
  const Imgpath="https://guprojects.gitam.edu/catscms2/public/services/"
  return (
    <div
      className="py-[18px] px-[12px] m-[10px] flex flex-col items-center border text-center bg-[#f4e4c9]  border-[#a58255] cursor-pointer"
      onClick={() => router.push(route)}
    >
      {service.main_category_name?(<img src={`${Imgpath}${service.main_category_image || service.cat_image}`} className="w-[90px] h-[80px]"/>):"no media"}
      <h2 className="text-[15px] font-medium  mt-3 text-[#1f2225] font-inter">{cardTitle}</h2>
      {/* <p className="text-gray-600">{service.slug}</p> */}
    </div>
  );
}
