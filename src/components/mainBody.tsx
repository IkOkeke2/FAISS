import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Search from "./search";
import { Course, ResultType } from "@/util/types";
import Tile from "./tile";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const MainBody = () => {
  const data_0 = require("public/db/coursera.json");

  const [searchResults, setSearchResults] = useState<ResultType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const [resultsPerPage] = useState(10); // Change this number as per your requirement

  React.useEffect(() => {
    const startData = [...data_0].sort(() => Math.random() - 0.5);

    setTimeout(() => {
      setSearchResults(startData);
      setLoading(false);
    }, 2000);

    // setSearchResults(startData);
  }, [data_0]);

  const noResultFoundImage = require("public/no_result_found-removebg-preview.png");
  // Logic to paginate results
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = searchResults.slice(
    indexOfFirstResult,
    indexOfLastResult
  );

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const totalPaginationItems = Math.ceil(
      searchResults.length / resultsPerPage
    );
    const maxDisplayedButtons = 18; // Maximum number of pagination buttons to display
    const maxAllowedButtons = 4; // Maximum buttons to show on each side of the active button

    if (totalPaginationItems <= maxDisplayedButtons) {
      return Array(totalPaginationItems)
        .fill(0)
        .map((_, index) => (
          <li key={index} className="bg-gray-600 rounded">
            <button
              onClick={() => paginate(index + 1)}
              className="text-sm px-[6px] text-white"
            >
              {index + 1}
            </button>
          </li>
        ));
    } else {
      let start = currentPage - maxAllowedButtons;
      let end = currentPage + maxAllowedButtons;

      if (start <= 0) {
        start = 1;
        end = maxDisplayedButtons;
      }

      if (end > totalPaginationItems) {
        end = totalPaginationItems;
        start = totalPaginationItems - maxDisplayedButtons + 1;
      }

      const firstPage = (
        <li key={1} className="bg-gray-600 rounded">
          <button
            onClick={() => paginate(1)}
            className="text-sm px-[6px] text-white"
          >
            {"<<"}
          </button>
        </li>
      );

      const prevPage = (
        <li key={"prev"} className="bg-gray-600 rounded">
          <button
            onClick={() => paginate(currentPage - 1)}
            className="text-sm px-[6px] text-white"
          >
            {"<"}
          </button>
        </li>
      );

      const lastPage = (
        <li key={totalPaginationItems} className="bg-gray-600 rounded">
          <button
            onClick={() => paginate(totalPaginationItems)}
            className="text-sm px-[6px] text-white"
          >
            {">>"}
          </button>
        </li>
      );

      const nextPage = (
        <li key={"next"} className="bg-gray-600 rounded">
          <button
            onClick={() => paginate(currentPage + 1)}
            className="text-sm px-[6px] text-white"
          >
            {">"}
          </button>
        </li>
      );

      const renderEllipsis = (key: string): JSX.Element => (
        <li key={key} className="bg-gray-600 rounded">
          <span className="text-sm px-[6px] text-white">...</span>
        </li>
      );

      const renderMiddleButtons = () => {
        const buttons = [];
        for (let i = start; i <= end; i++) {
          buttons.push(
            <li key={i} className="bg-gray-600 rounded">
              <button
                className={`text-sm px-[6px] text-white ${
                  i === currentPage ? "font-bold" : ""
                }`}
                onClick={() => paginate(i)}
              >
                {i}
              </button>
            </li>
          );
        }
        return buttons;
      };

      return (
        <>
          {firstPage}
          {prevPage}
          {start > 2 && renderEllipsis("startEllipsis")}
          {renderMiddleButtons()}
          {end < totalPaginationItems - 1 && renderEllipsis("endEllipsis")}
          {nextPage}
          {lastPage}
        </>
      );
    }
  };

  return (
    <main className={`min-h-[80vh] mx-auto ${inter.className} `}>
      <div className=" border-b-[1px] border-gray-200 pt-5 pb-6 bg-white">
        <Search setSearchResults={setSearchResults} setIsLoading={setLoading} />
      </div>

      <div className=" w-[80%] mx-auto py-5">
        {isLoading ? (
          <div className="flex justify-center items-center h-[350px]">
            <div
              aria-label="Loading..."
              role="status"
              className="flex items-center space-x-2"
            >
              <svg
                className="h-20 w-20 animate-spin stroke-gray-500"
                viewBox="0 0 256 256"
              >
                <line
                  x1="128"
                  y1="32"
                  x2="128"
                  y2="64"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <line
                  x1="195.9"
                  y1="60.1"
                  x2="173.3"
                  y2="82.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <line
                  x1="224"
                  y1="128"
                  x2="192"
                  y2="128"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <line
                  x1="195.9"
                  y1="195.9"
                  x2="173.3"
                  y2="173.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <line
                  x1="128"
                  y1="224"
                  x2="128"
                  y2="192"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <line
                  x1="60.1"
                  y1="195.9"
                  x2="82.7"
                  y2="173.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <line
                  x1="32"
                  y1="128"
                  x2="64"
                  y2="128"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <line
                  x1="60.1"
                  y1="60.1"
                  x2="82.7"
                  y2="82.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
              </svg>
            </div>
          </div>
        ) : currentResults.length > 0 ? (
          <div>
            <h2>Search Results:</h2>
            <ul>
              {currentResults.map((course, index) => (
                <Tile key={index} data={course} />
              ))}
            </ul>
            {/* Pagination */}

            {searchResults.length > 0 ? (
              <ul className="flex items-center justify-center gap-1 py-6">
                {renderPagination()}
              </ul>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div className="relative w-[350px] mx-auto mt-[100px]">
            <Image
              src={noResultFoundImage}
              alt="No result was found on search"
            />
            <strong className=" text-xl text-gray-600 font-semibold text-center block">
              Data not found
            </strong>
          </div>
        )}
      </div>
    </main>
  );
};

export default MainBody;
