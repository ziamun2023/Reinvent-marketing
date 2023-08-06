import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Meeting from './meeting/Meeting.jsx';
import Home from './components/home/Home.jsx';
import SeoPage from './page/sero/SeoPage.jsx';
import Facebookpage from './page/Facebookpage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {path:'meeting',
    element:<Meeting/>},

      {path:'/',
    element:<Home/>},
      {path:'/seo',
    element:<SeoPage/>},
    {path:'/facebook',
    element:<Facebookpage/>}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


<RouterProvider router={router} />



  </React.StrictMode>,
)
