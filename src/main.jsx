import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout/>,
    
      children: [
        {
          path : "",
          element : <Home/>
        },
        {
          path : "/about",
          element : <About/>
        },
        {
          path : "/services",
          element : <Services/>
        },
        {
          path : "/contact",
          element : <Contact/>
        }
      ]
    
  }
])


createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} /> 

)
