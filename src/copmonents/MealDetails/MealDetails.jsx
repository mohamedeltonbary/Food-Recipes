// import React from 'react'
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useEffect, useState } from 'react';


// const MealDetails = () => {
//   const [recipedetail , setRecipedetail] = useState([]);
//   let {idMeal } = useParams(); // هتاخد idMeal من الـ URL
//   console.log(idMeal );

//   const getRecipeDetails = async (id) => {
//     try {
//       const { data } = await axios.get(
//         `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
//       );
//       console.log(data);
//       setRecipedetail(data.meals[0]);
//     } catch (error) { 
//       console.error("Error fetching recipe details:", error);
//     }
//   }
//    useEffect(() => {
//     getRecipeDetails(idMeal); 
//   }, [idMeal]);
//   return (
//     <div>
//       <main>
//         <div className='shadow-2xl rounded-3xl bg-white p-8 m-8 '>
//           <div>
//             <img src={recipedetail.strMealThumb} alt={recipedetail.strMeal} className='w-32 h-32 rounded-full object-cover mx-auto' />
//             <h2 className='text-amber-200 font-semibold my-4'>
//               {recipedetail.strMeal}
//             </h2>
//           </div>

//         </div>
//       </main>

//     </div>
//   )
// }

// export default MealDetails


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MealDetails = () => {
  const [recipedetail, setRecipedetail] = useState(null);
  const { idMeal } = useParams();

  const getRecipeDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      setRecipedetail(data.meals[0]);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };

  useEffect(() => {
    if (idMeal) {
      getRecipeDetails();
    }
  }, [idMeal]);

  if (!recipedetail) return <p className="p-8">Loading...</p>;

  // تجميع المكونات
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipedetail[`strIngredient${i}`];
    const measure = recipedetail[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <main className="p-8 min-h-screen">
      <div className="grid grid-cols-12 gap-6">
        {/* العمود الأول: الصورة + روابط */}
        <div className="col-span-12 md:col-span-3 flex flex-col items-center">
          <h2 className="text-xl text-left font-semibold mb-4 ">{recipedetail.strMeal}</h2>
          <img
            src={recipedetail.strMealThumb}
            alt={recipedetail.strMeal}
            className="rounded-lg shadow-lg w-full h-64 object-cover mb-4"
          />
          <div className="flex gap-3 mt-3">
            <a
              href={recipedetail.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              YouTube
            </a>
            <a
              href={recipedetail.strSource}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600 transition"
            >
              Source
            </a>
          </div>

        </div>

        {/* العمود الثاني: الوصف */}
        <div className="col-span-12 md:col-span-6 mt-6">

          <p className="font-semibold text-gray-700 whitespace-pre-line ">
            {recipedetail.strInstructions}
          </p>
        </div>

        {/* العمود الثالث: المكونات */}
        <div className="col-span-12 md:col-span-3 space-y-4 shadow-lg p-6 rounded-lg bg-white">
          <h3 className="text-2xl font-semibold mb-4  ">Ingredients</h3>
          <ul className="list-inside space-y-2 ">
            {ingredients.map((item, index) => (
              <li key={index} className="text-gray-700 flex justify-between ">
                {item}
              </li>
            ))} 
          </ul>
        </div>
      </div>
    </main>
  );
};

export default MealDetails;


