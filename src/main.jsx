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
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
        element : <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader : () => fetch('../jobs.json')
      },
      {
        path : '/applied',
        element : <Applied></Applied>,
        loader : () => fetch('../jobs.json')
      },
      {
        path : '/blogs',
        element : <Blogs></Blogs>
      },

      {
        path : 'login',
        element : <Login></Login>
      },

      {
        path : 'register',
        element : <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <AuthProvider>

    <RouterProvider router={router} />
    
    </AuthProvider>


  </React.StrictMode>,
)
