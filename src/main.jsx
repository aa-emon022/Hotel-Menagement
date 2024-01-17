import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import Offers from './pages/Offers.jsx'
import ForgetPassword from './pages/ForgetPassword.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'

const router =createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/profile",
    element:<Profile/>
  },
  {
    path:"/Offer",
    element:<Offers/>

  },
  {
    path:"/forgetPassword",
    element:<ForgetPassword/>
  },
  {
    path:"/SignIn",
    element:<SignIn/>
  },
  {
    path:"/SignUp",
    element:<SignUp/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
