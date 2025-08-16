import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './copmonents/Layout/Layout';
import Home from './copmonents/Home/Home';
import MealDetails from './copmonents/MealDetails/MealDetails';
import MealCard from './copmonents/MealCard/MealCard';
import CategoryTabs from './copmonents/CategoryTabs/CategoryTabs';
import Sidebar from './copmonents/Sidebar/Sidebar';

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "", element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/mealdetails/:idMeal", element: <MealDetails /> },
        { path: "mealcard", element: <MealCard /> },
        { path: "categorytabs", element: <CategoryTabs /> },
        { path: "sidebar", element: <Sidebar /> },
        { path: "*", element: <h1>Page Not Found</h1> }
      ]
    }

  ]);

  return (
    <>

      {/* <h1>mo eid</h1> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App


