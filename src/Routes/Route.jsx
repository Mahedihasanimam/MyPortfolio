import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Mainlayout/MainLayout";
import Home from "../Pages/home/Home";
import About from "../Pages/aboutpage/About";



const router=createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      children:[
        {
            index:true,
            element:<Home/>
        },{
            path:'/about',
            element:<About/>
        }
      ]
    }
  ])
  export default router