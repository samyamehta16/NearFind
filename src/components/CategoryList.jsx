"use client";
import React from "react";
import { useState, useEffect } from "react";
import Categoryitem from "./Categoryitem";

export default function CategoryList({ selCategory }) {
  const CategoryListData = [
    {
      id: 1,
      name: "Gas Station",
      value: "gas_station",
      icon: "/gas.png",
    },
    {
      id: 2,
      name: "Restaurants",
      value: "restaurant",
      icon: "/food.png",
    },
    {
      id: 3,
      name: "Medicine",
      value: "medicine_Shop",
      icon: "/med.png",
    },
  ];
  const [category, setCategory_] = useState(CategoryListData);
  return (
    <div>
      <h2
        className="text-[20px] mt-3 
        font-bold mb-3 text-red-400"
      >
        Select Your Fav Category
      </h2>
      <div className="flex gap-6 mb-5">
        {category.map((item, index) => (
          <div key={index} onClick={() => selCategory(item.value)}>
            <Categoryitem category={item} selectedCategory={category} />
          </div>
        ))}
      </div>
    </div>
  );
}
