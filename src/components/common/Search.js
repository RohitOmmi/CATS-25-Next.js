"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { apiHeaders, apis } from "@/constants/api";
import { getSearchResult } from "@/lib/getSearchResult";
import { IoSearchSharp } from "react-icons/io5";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // Debounce search input to avoid frequent API calls
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      getSearchResult(query, apis.search, apiHeaders, setResults, setLoading);
    }, 300); // Adjust delay as needed

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <div className="relative w-full    mx-auto">
      {/* Search Input */}
      <div className="relative w-full max-w-lg">
      <input
        type="text"
        placeholder="Search by Service, Project Name, Topic, or Keyword"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 absolute border  border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-white"
        
      />
      <IoSearchSharp  className="absolute right-4  transform translate-y-1/2 text-black text-xl mt-1"/>
      </div>
      {/* Loading Indicator */}
      {loading && <p className="mt-2 text-sm text-gray-500">Loading...</p>}

      {/* Search Results */}
      {results.length > 0 && (
        <ul className="absolute left-0 right-0 mt-12 bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto">
          {results.map((item, index) => (
            <li
              key={index}
              className="p-3 cursor-pointer hover:bg-gray-100"
              onClick={() => router.push(item.page_url)}
            >
              {item.meta_title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
