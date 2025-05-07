import React from "react";
import ReactDom from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";

import App from './App.jsx'
import FoodGroups from "./food.jsx";
import HHome from "./home.jsx";
import NutrientQuiz from "./jogo2.jsx";
import NutritionPlateGame from "./jogo1.jsx";
import HealthyPlatesPage from "./pratos.jsx";
const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/alimentos', element: <FoodGroups /> },
      { path: '/', element: <HHome/>},
      { path: '/1', element: <NutritionPlateGame/>},
      { path: '/2', element: <NutrientQuiz/>},
      { path: '/prato', element: <HealthyPlatesPage/>},
    ],
  },
], {
  basename: '/PEF2' 
});

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
);
