import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import axios from 'axios'

axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')).render(

   <React.StrictMode>
      <AuthProvider>
         <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
   </React.StrictMode>
)
