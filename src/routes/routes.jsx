import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import WebDevelopment from "../Pages/Services/WebDevelopment";
import Blog from "../Pages/Home/Blog";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: "services/web-dev",
          element: <WebDevelopment></WebDevelopment>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        }

      ]
    },

  ]);