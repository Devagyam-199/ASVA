import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './component/Solution.jsx'
import Layout from './component/Layout.jsx';
import Platform from './component/Platform.jsx';
import Solution from './component/Solution.jsx';
import Pricing from './component/Pricing.jsx';
import Blog from './component/Blog.jsx';
import Company from './component/Company.jsx';
import Contact_Us from './component/Contact_Us.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:'',
        element:<Solution />,
      },
      {
        path:'platform',
        element:<Platform />,
      },
      {
        path:'solution',
        element:<Solution />
      },
      {
        path:'pricing',
        element:<Pricing />
      },
      {
        path:'blog',
        element:<Blog />
      },
      {
        path:'company',
        element:<Company />
      },
      {
        path:'contact_us',
        element:<Contact_Us />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="h-screen w-full font-titillium_web overflow-y-scroll no-scrollbar">
      <RouterProvider router={router}/>
    </div>
  
  </React.StrictMode>,
)
