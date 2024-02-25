import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/Abouts/About.jsx';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Products from './components/Products/Products.jsx';
import './index.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[
      {
         path:"about",
         element:<About/>

      },
      {
        path:"products",
        element:<Products/>
      },
      {
        path:"header",
        element:<Header/>
      },
      
    ]
  },
  // {
  //   path: "header",
  //   element: <Header></Header>
  // },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
