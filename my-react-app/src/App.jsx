import { useState } from 'react';
import './App.css';
import Index from './pages/Index.jsx';
import Movie from './pages/Movie.jsx';
import Register from './pages/Register.jsx';  
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


  const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/movie",
    element: <Movie />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
