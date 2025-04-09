"use client";
import { RxDoubleArrowRight } from "react-icons/rx";
import { RxDoubleArrowLeft } from "react-icons/rx";
export default function PaginationComponent({ totalPages, currentPage, onPageChange }) {
  if (totalPages <= 1) return null; // No pagination needed

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-2 flex-wrap">
      {/* Prev Button */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-md border ${
          currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-200"
        }`}
      >
        <RxDoubleArrowLeft />
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          disabled={page === "..."}
          onClick={() => typeof page === "number" && goToPage(page)}
          className={`px-3 py-1 rounded-md border ${
            page === currentPage
              ? "bg-[#004740] text-white"
              : "hover:bg-gray-200"
          } ${page === "..." ? "cursor-default" : ""}`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-md border ${
          currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-200"
        }`}
      >
        <RxDoubleArrowRight />
      </button>
    </div>
  );
}

// // "use client"; // ✅ Ensures pagination updates on the client

// // import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

// // export default function PaginationComponent({ currentPage, totalPages, onPageChange }) {
// //   return (
// //     <Pagination className="mt-1">
// //       <PaginationContent className="flex justify-center space-x-2">
// //         {currentPage > 1 && (
// //           <PaginationItem>
// //             <PaginationPrevious onClick={() => onPageChange(currentPage - 1)} />
// //           </PaginationItem>
// //         )}

// //         {[...Array(totalPages)].map((_, pageIndex) => (
// //           <PaginationItem key={pageIndex}>
// //             <PaginationLink
// //               onClick={() => onPageChange(pageIndex + 1)}
// //               className={pageIndex + 1 === currentPage ? "font-bold text-blue-500" : ""}
// //             >
// //               {pageIndex + 1}
// //             </PaginationLink>
// //           </PaginationItem>
// //         ))}

// //         {currentPage < totalPages && (
// //           <PaginationItem>
// //             <PaginationNext onClick={() => onPageChange(currentPage + 1)} />
// //           </PaginationItem>
// //         )}
// //       </PaginationContent>
// //     </Pagination>
// //   );
// // }




// "use client"; // ✅ Ensures this runs only on the client side

// import { useSearchParams, useRouter, usePathname  } from "next/navigation";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";

// // const EVENTS_PER_PAGE = 3; // Define events per page

// export default function PaginationComponent({ totalPages }) {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const pathname = usePathname();

//   // Get current page from URL or default to 1
//   const currentPage = Number(searchParams.get("page")) || 1;

//   const handlePagination = (page) => {
//     // Update the URL without refreshing the page
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("page", page);
//     router.push(`${pathname}?${params.toString()}`);
//   };

//   return (
//     <Pagination>
//       <PaginationContent className="flex justify-center space-x-2">
//         {currentPage > 1 && (
//           <PaginationItem>
//             <PaginationPrevious onClick={() => handlePagination(currentPage - 1)} />
//           </PaginationItem>
//         )}

//         {[...Array(totalPages)].map((_, pageIndex) => (
//           <PaginationItem key={pageIndex}>
//             <PaginationLink
//               onClick={() => handlePagination(pageIndex + 1)}
//               className={pageIndex + 1 === currentPage ? "font-bold text-[#a58255]" : ""}
//             >
//               {pageIndex + 1}
//             </PaginationLink>
//           </PaginationItem>
//         ))}

//         {currentPage < totalPages && (
//           <PaginationItem>
//             <PaginationNext onClick={() => handlePagination(currentPage + 1)} />
//           </PaginationItem>
//         )}
//       </PaginationContent>
//     </Pagination>
//   );
// }
