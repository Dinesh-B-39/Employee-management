import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Empl} from './Components/Empl.jsx'
import './index.css'
import App from './App.jsx'
// main.jsx or App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import AddEmp from './Components/AddEmp.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router=createBrowserRouter([
  {path:'/maga',
    element:<Empl/>
  },
  {
    path:'AddEmp',
    element:<AddEmp/>
  }
  ,
  {
    path:'AddEmp/:id',
    element:<AddEmp/>
  }
])
createRoot(document.getElementById('root')).render(
   <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
)
