import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Mainlayout/MainLayout";
import Home from "../Pages/home/Home";
import About from "../Pages/aboutpage/About";
import AboutPage from "../Pages/about/AboutPage";
import Projects from "../Pages/home/Projects";
import Blogs from "../Pages/blog/Blogs";
import Contact from "../Pages/home/Contact";



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
        },
        {
            path:'/blog',
            element:<Blogs/>
        },{
          path:'/contact',
          element:<Contact/>
        }
      ]
    }
  ])
  export default router