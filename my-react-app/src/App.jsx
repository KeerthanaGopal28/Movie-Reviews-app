import { useState } from 'react';
import './App.css';
import Index from './pages/index.jsx';
import Movie from './pages/movie.jsx';
import Resgiter from './pages/resgiter.jsx';  
import Login from './pages/login.jsx';
import profile from './pages/profile.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
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
}
export default function App() {
  return <RouterProvider router={router} />;
}
