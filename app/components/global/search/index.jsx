"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Search = ({ placeholder }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const dummySuggestions = [
    "Next.js",
    "React",
    "Tailwind CSS",
    "API",
    "GraphQL",
  ];

  useEffect(() => {
    const fetchSuggestions = () => {
      const filteredSuggestions = dummySuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    };
    const timeoutId = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(timeoutId);
  }, [query]);
  return (
    <form className="group relative w-full">
      <svg
        width="20"
        height="20"
        fill="currentColor"
        className="absolute right-3 top-1/2 -mt-2.5 text-black-400 pointer-events-none group-focus-within:text-blue-500"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        />
      </svg>
      <input
        className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-full py-3 pl-5 pr-12 ring-1 ring-slate-200 shadow-sm"
        type="text"
        aria-label="Filter projects"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {isFocused && (
        <div className="absolute z-10 mt-3 px-8 py-6 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase">
            {query ? "Keywords" : "Trends"}
          </h3>
          {suggestions.map((suggestion, index) => (
            <Link
              href={`/search?q=${encodeURIComponent(suggestion)}`}
              key={index}
              className="block text-sm font-semibold mb-2 flex items-center"
            >
              <span className="mr-6 text-2xl">#</span> {suggestion}
            </Link>
          ))}
          <Link href="/" className="block text-sm font-semibold mt-4 flex">
            <div className="mr-3 bg-pink-500 w-6 h-6 rounded-full text-white flex items-center justify-center">
              #
            </div>{" "}
            Show all media
          </Link>
        </div>
      )}
    </form>
  );
};

export default Search;
