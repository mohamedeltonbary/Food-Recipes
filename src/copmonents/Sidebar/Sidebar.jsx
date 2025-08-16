import React from 'react';
import { Link } from 'react-router-dom';
import photo1 from "./../../assets/img/logo-BfNap0Pe.png";

const Sidebar = () => {
  return (
    <div className="hidden lg:block w-64 h-screen bg-white text-black p-4 flex flex-col items-center fixed top-0 left-0 ">
      {/* الصورة الأولى */}
      <img
        src={photo1}
        alt=""
        className="w-50 h-50 rounded-full mb-6"
      />

      {/* الأزرار */}
      <div className="flex flex-col w-full space-y-4">
        {/* زر Meals يروح للصفحة الرئيسية */}
        <Link to="/">
          <button className="w-full bg-amber-400 text-white border border- px-4 py-2 rounded-3xl hover:bg-amber-500 transition">
            Meals
          </button>
        </Link>

        <button className="w-full bg-white text-black border border-black px-4 py-2 rounded-3xl  hover:bg-gray-100 transition">
          Ingredients
        </button>
        <button className="w-full bg-white text-black border border-black px-4 py-2 rounded-3xl  hover:bg-gray-100 transition">
          Area
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
