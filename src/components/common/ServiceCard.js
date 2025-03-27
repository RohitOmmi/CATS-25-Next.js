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
      className="p-[12px] m-[18px] flex flex-col items-center border text-center bg-[#f4e4c9]  border-[#a58255]"
      onClick={() => router.push(route)}
    >
      {service.main_category_name?(<img src={`${Imgpath}${service.main_category_image || service.cat_image}`} className="w-[113px] h-[90px]"/>):"no media"}
      <h2 className="text-[16px] font-semibold">{cardTitle}</h2>
      {/* <p className="text-gray-600">{service.slug}</p> */}
    </div>
  );
}
