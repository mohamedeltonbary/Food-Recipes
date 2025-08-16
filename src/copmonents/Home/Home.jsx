

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Home = () => {
//   const [recipes, setRecipes] = useState([]);

//   const getRecipes = async () => {
//     try {
//       const { data } = await axios.get(
//         "https://www.themealdb.com/api/json/v1/1/search.php?s="
//       );
//       setRecipes(data.meals || []);
//     } catch (error) {
//       console.error("Error fetching recipe data:", error);
//     }
//   };

//   useEffect(() => {
//     getRecipes();
//   }, []);

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-6">All Meals</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-20 gap-x-8">
//         {recipes.map((meal) => (
//           <Link key={meal.idMeal} to={`/mealdetails/${meal.idMeal}` }>
//           <div
//             key={meal.idMeal}
//             className=" group relative p-8 shadow-2xl rounded-3xl bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col items-center hover:scale-105 ease-in-out"
//           >
//             {/* صورة دائرية */}
//             <img
//               src={meal.strMealThumb}
//               alt={meal.strMeal}
             
//               className="w-32 h-32 rounded-full object-cover -translate-y-10 drop-shadow-xl shadow-2xl mx-auto group-hover:rotate-[360deg] transition-all duration-700"

//             />  
//             {/* اسم الوجبة */}
//             <h2 className="text-xl font-semibold  mb-2 text-center">{meal.strMeal}</h2>
//             {/* المنطقة / الدولة */}
//             <p className="text-gray-500 mb-4">{meal.strArea}</p>
//             {/* زر View Recipe */}
//             <button className="bg-emerald-400 text-white  p-4 rounded-4xl hover:bg-emerald-600 transition cursor-pointer">
//               View Recipe
//             </button>
//           </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

// اللى فوق دا الساسي




import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CategoryTabs from "../CategoryTabs/CategoryTabs";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const getRecipes = async (url) => {
    try {
      const { data } = await axios.get(url);
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error fetching recipe data:", error);
    }
  };

  useEffect(() => {
    // أول ما يفتح يجيب كل الوصفات
    getRecipes("https://www.themealdb.com/api/json/v1/1/search.php?s=");
  }, []);

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      getRecipes("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    } else {
      getRecipes(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    }
  };

  return (
    <div className="p-8">
      <h1 className="kabo">Learn, Cook, Eat Your Food</h1>

      {/* الأزرار */}
      <CategoryTabs onSelectCategory={handleCategorySelect} activeCategory={activeCategory} />

      {/* الكروت */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-20 gap-x-8 mt-6">
        {recipes.map((meal) => (
          <Link key={meal.idMeal} to={`/mealdetails/${meal.idMeal}`}>
            <div className="group relative p-8 shadow-2xl rounded-3xl bg-white hover:shadow-xl transition duration-300 flex flex-col items-center hover:scale-105">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-32 h-32 rounded-full object-cover -translate-y-10 drop-shadow-xl group-hover:rotate-[360deg] transition-all duration-700"
              />
              <h2 className="text-xl font-semibold mb-2 text-center">{meal.strMeal}</h2>
              <p className="text-gray-500 mb-4">{meal.strArea}</p>
              <button className="bg-emerald-400 text-white px-4 py-2 rounded-3xl hover:bg-emerald-600 transition">
                View Recipe
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
