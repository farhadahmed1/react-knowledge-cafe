import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/Abouts/About.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Products from './components/Products/Products.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Users from './components/Users/Users.jsx';
import './index.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
    children:[
      {
         path:"/about",
         element:<About/>

      },
      {
        path:"/products",
        element:<Products/>
      },
      {
        path:"/header",
        element:<Header/>
      },
      {
        
        path:"/users",
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users/>,
      },
      {
        
        path:"/user/:userId",
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        // loader:({params})=> console.log(params.userId),
        element:<UserDetails/>,
      }
      
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
