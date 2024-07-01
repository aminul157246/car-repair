import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from '../src/pages/Home/Home'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import AuthProvider from './auth/AuthProvider';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Success from './pages/payment/Success';
import Failed from './pages/payment/Failed';
import Slip from './pages/slip/Slip';



const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout/>,
    children : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : '/login',
        element : <Login/>
      },
      {
        path : '/register',
        element : <Register/>
      },
      {
        path : '/contact',
        element : <Contact/>,
       

      },
      {
        path : '/about',
        element : <About/>
      },
      {
        path : '/payment/success/:transId',
        element : <Success/>
      },
      {
        path : '/slip',
        element : <Slip/>,
        // loader : fetch(() => `http://localhost:5173/payment/success/:transId`)
      },
      {
        path : '/payment/failed/:transId',
        element : <Failed/>
      },
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
