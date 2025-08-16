// import React from 'react'

// const CategoryTabs = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default CategoryTabs


import React from "react";

const categories = [
  "All", "Beef", "Chicken", "Dessert", "Goat", "Lamb",
  "Miscellaneous", "Pasta", "Pork", "Seafood",
  "Side", "Starter", "Vegan", "Vegetarian", "Breakfast"
];

const CategoryTabs = ({ onSelectCategory, activeCategory }) => {
  return (
    <div className="flex flex-wrap gap-3 p-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`px-4 py-2 border rounded-lg transition 
            ${activeCategory === cat 
              ? "bg-emerald-500 text-white" 
              : "hover:bg-emerald-400 hover:text-white"}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
