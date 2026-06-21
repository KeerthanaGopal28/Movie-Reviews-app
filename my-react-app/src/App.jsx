import { useState } from 'react';
import './App.css';
import Index from './pages/Index';
import Movie from './pages/Movie';
import Register from './pages/Register';  
import Login from './pages/Login';
import Profile from './pages/Profile';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


  const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Movie",
    element: <Movie />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
