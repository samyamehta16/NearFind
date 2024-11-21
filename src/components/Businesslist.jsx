"use client";
import React, { useState } from "react";
import Businessitem from "./Businessitem";

function Businesslist({ data }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2
        className="flex text-[20px] mt-3 
        font-bold mb-3 text-red-400 items-center justify-between"
      >
        Top nearby Places
        <span className="flex">
          {count > 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={() => setCount(count - 3)}
              className="w-10 h-10 p-2 text-red-400 hover:text-red-500
          hover:bg-red-100 cursor-pointer rounded-lg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          ) : null}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => setCount(count + 3)}
            className="w-10 h-10 p-2 text-red-400 hover:text-red-500
          hover:bg-red-100 cursor-pointer rounded-lg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </h2>
      <div>
        {data?.map(
          (business, index) =>
            index >= count &&
            index < count + 3 && (
              <div
                key={index}
                //       className={`cursor-pointer rounded-2xl
                // ${selectedBusiness.name == business.name ? "bg-purple-50" : null}`}
                //       onClick={() => setSelectedBusiness(business)}
              >
                <Businessitem business={business} />
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Businesslist;
