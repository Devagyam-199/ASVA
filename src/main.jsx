import React, { Suspense, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Layout from './component/Layout';

const Landing = React.lazy(() => import('./component/Landing'));
const Solution = React.lazy(() => import('./component/Solution'));
const Pricing = React.lazy(() => import('./component/Pricing'));
const Blog = React.lazy(() => import('./component/Blog'));
const ContactUs = React.lazy(() => import('./component/Contact_Us'));


const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<div className='w-full text-center'>Loading...</div>}>
            <Landing />
          </Suspense>
        ),
      },
      {
        path: 'solution',
        element: (
          <Suspense fallback={<div className='w-full text-center'>Loading...</div>}>
            <Solution />
          </Suspense>
        ),
      },
      {
        path: 'pricing',
        element: (
          <Suspense fallback={<div className='w-full text-center'>Loading...</div>}>
            <Pricing />
          </Suspense>
        ),
      },
      {
        path: 'blog',
        element: (
          <Suspense fallback={<div className='w-full text-center'>Loading...</div>}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: 'contact_us',
        element: (
          <Suspense fallback={<div className='w-full text-center'>Loading...</div>}>
            <ContactUs />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => (
  <RouterProvider router={router}>
    <Layout/>
  </RouterProvider>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className="h-screen w-full overflow-y-scroll font-titillium_web no-scrollbar">
      <App />
    </div>
  </React.StrictMode>
);
