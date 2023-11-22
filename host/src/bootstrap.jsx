import App from './App';
import React from 'react';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
import AboutPage from 'remote/aboutPage';



const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [],
    },
    {
        path: '/about',
        element: <AboutPage />,
        children: [],
    }
  ]);


root.render(
    <RouterProvider router={router} />
)
