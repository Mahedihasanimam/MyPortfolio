import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Mainlayout/MainLayout";
import Home from "../Pages/home/Home";
import About from "../Pages/aboutpage/About";
import AboutPage from "../Pages/about/AboutPage";
import Projects from "../Pages/home/Projects";



const router=createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:'/about',
            element:<AboutPage/>
        },
        {
            path:'/projects',
            element:<Projects/>
        }
      ]
    }
  ])
  export default router