import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import IndexPage from "./index";
import MainMessagePage from './pages/mainmessagepage';
import SignUpPage from './pages/signuppage';
import SwipePage from './pages/swipePage';
import MainDashboard from './pages/maindashboard';
import EditProfileMain from './pages/editprofilemain';
import SignInPage from './pages/SignIn';
import EditComponent from './pages/EditComponent';
import ChatPage from './pages/chatpage.jsx'

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
    {
      path:"/SwipePage",
      element: <SwipePage/>
    },

    {
      path:"/dashboard",
      element: <MainDashboard/>
    },
    {
      path:"/editprofile",
      element: <EditProfileMain/>
    },
    {
      path: "/signin",
      element: <SignInPage/>
    },
    {
      path: "/editMode",
      element: <EditComponent/>
    },
    {
        path:"/messages/:matchUser",
        element: <ChatPage />
    }

  ]);
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
