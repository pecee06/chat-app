import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Auth} from './pages'
import {Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Outlet/>}>
      <Route path='' element={<App/>} />
      <Route path='auth' element={<Auth/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
