import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home/Home';
import Statistics from './Pages/Navlinks/statistics/Statistics';
import Blogs from './Pages/Navlinks/Blogs/Blogs';
import Applied from './Pages/Navlinks/Applied/Applied';
import JobDetails from './Components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/statistics',
        element : <Statistics></Statistics>
      },
      {
        path : '/job/:id',
        element : <JobDetails></JobDetails>,
        loader : () => fetch('../jobs.json')
      },
      {
        path : '/applied',
        element : <Applied></Applied>
      },
      {
        path : '/blogs',
        element : <Blogs></Blogs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
