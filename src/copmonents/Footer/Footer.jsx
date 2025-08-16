// import React from 'react'
// import photo1 from "./../../assets/img/logo-BfNap0Pe.png";


// const Footer = () => {
//   return (
//     <div className='bg-gray-800 text-white p-4 text-center fixed bottom-0 w-full'>
//       <div>
//         <img src={photo1} alt="Logo" className="mx-auto mb-2 w-30 h-30 rounded-full" />
//         <h2 className="text-lg font-semibold">Route</h2>

//       </div>
//       <p>&copy; 2023 Your Moha,ed Eid. All rights reserved.</p>


//     </div>
//   )
// }

// export default Footer
import { useNavigate } from 'react-router-dom';
import photo1 from "./../../assets/img/logo-BfNap0Pe.png";

const Footer = () => {
  const navigate = useNavigate();

  const goTop = () => {
    navigate("/");          // يروح للصفحة الرئيسية
    window.scrollTo({ top: 0, behavior: "smooth" }); // يرجع لفوق الصفحة
  };

  return (
    <div className="relative w-full bg-white text-white py-6 z-50">
      {/* الصورة والعنوان */}
      <div className="flex justify-between items-center max-w-5xl mx-auto px-4">
        <img
          src={photo1}
          alt="Logo"
          className="w-32 h-32 rounded-full cursor-pointer"
          onClick={goTop} // هنا بنفذ التنقل + scroll
        />
        <h2 className="text-3xl text-blue-600 font-semibold">Route</h2>
      </div>

      {/* الوصف */}
      <p className="mt-4 text-center text-black">&copy; 2023 Your Mohamed Eid. All rights reserved.</p>
    </div>
  );
};

export default Footer;

