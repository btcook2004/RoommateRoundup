import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import IndexPage from "./index";
import MainMessagePage from './pages/mainmessagepage';
import SignUpPage from './pages/signuppage';
import "./index.css"

const router = createBrowserRouter([
    {
      path: "/",
      element: <IndexPage/>
    },
    {
        path: "/messagePage",
        element: <MainMessagePage/> 
      },
      {
        path: "/signup",
        element: <SignUpPage/>
      },
  ]);
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
