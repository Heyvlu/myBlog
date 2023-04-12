import React,{lazy} from "react";
import {Navigate} from "react-router-dom";
const Home=lazy(()=>import("../pages/Home"));
const Articles=lazy(()=>import('../pages/Articles'));
const About=lazy(()=>import("../pages/About"))

const routes=[
    {
        path:"/home",
        element: <Home/>
    },
    {
        path:'/articleDetail',
        element:<Articles/>
    },
    {
        path:'/about',
        element: <About/>
    },
    {
        path:"/",
        element: <Navigate to={'/home'}/>
    },
    {
        path:"*",
        element: <Navigate to={'/'}/>
    }
]

export default routes;