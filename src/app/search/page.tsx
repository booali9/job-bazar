"use client";
import * as React from 'react'; 
import { useState } from "react";
import Link from "next/link";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
      if (response.ok) {
        const data = await response.json();
        setResults(data.results || []);
        setError("");
      } else {
        setError("Failed to fetch results");
        setResults([]);
      }
    } catch (error) {
      setError("Error occurred during search");
      console.error("Search error:", error);
      setResults([]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="w-full max-w-md flex items-center mb-4">
        <input
          className="text-black rounded px-3 py-2 border border-gray-300 flex-grow"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name..."
        />
        <button
          type="submit"
          className="ml-2 bg-green-500 text-white rounded px-3 py-2"
        >
          Search
        </button>
      </form>

      {/* Error Message */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Search Results */}
      {results.length > 0 ? (
        <div className="mt-4 w-full max-w-md">
          <h2 className="text-lg font-bold mb-2">Results:</h2>
          <ul className="text-sm">
            {results.map((result) => (
              <li key={result._id} className="mb-1">
                <Link href={`/profile/${result._id}`} legacyBehavior>
                  <a className="text-blue-400 hover:underline">{result.name || "Unnamed"}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        !error && <p className="text-sm mt-4">No results found.</p> /* Show message only if no error */
      )}
    </div>
  );
};

export default SearchPage;
