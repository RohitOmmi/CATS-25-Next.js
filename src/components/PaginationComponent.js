// "use client"; // ✅ Ensures pagination updates on the client

// import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

// export default function PaginationComponent({ currentPage, totalPages, onPageChange }) {
//   return (
//     <Pagination className="mt-1">
//       <PaginationContent className="flex justify-center space-x-2">
//         {currentPage > 1 && (
//           <PaginationItem>
//             <PaginationPrevious onClick={() => onPageChange(currentPage - 1)} />
//           </PaginationItem>
//         )}

//         {[...Array(totalPages)].map((_, pageIndex) => (
//           <PaginationItem key={pageIndex}>
//             <PaginationLink
//               onClick={() => onPageChange(pageIndex + 1)}
//               className={pageIndex + 1 === currentPage ? "font-bold text-blue-500" : ""}
//             >
//               {pageIndex + 1}
//             </PaginationLink>
//           </PaginationItem>
//         ))}

//         {currentPage < totalPages && (
//           <PaginationItem>
//             <PaginationNext onClick={() => onPageChange(currentPage + 1)} />
//           </PaginationItem>
//         )}
//       </PaginationContent>
//     </Pagination>
//   );
// }




"use client"; // ✅ Ensures this runs only on the client side

import { useSearchParams, useRouter, usePathname  } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// const EVENTS_PER_PAGE = 3; // Define events per page

export default function PaginationComponent({ totalPages }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Get current page from URL or default to 1
  const currentPage = Number(searchParams.get("page")) || 1;

  const handlePagination = (page) => {
    // Update the URL without refreshing the page
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Pagination>
      <PaginationContent className="flex justify-center space-x-2">
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious onClick={() => handlePagination(currentPage - 1)} />
          </PaginationItem>
        )}

        {[...Array(totalPages)].map((_, pageIndex) => (
          <PaginationItem key={pageIndex}>
            <PaginationLink
              onClick={() => handlePagination(pageIndex + 1)}
              className={pageIndex + 1 === currentPage ? "font-bold text-[#a58255]" : ""}
            >
              {pageIndex + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext onClick={() => handlePagination(currentPage + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
