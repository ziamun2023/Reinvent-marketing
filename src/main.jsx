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
import SeoPage from './page/SeoPage.jsx';
import Facebookpage from './page/Facebookpage.jsx';
import BrandMarketing from './page/BrandMarketing.jsx';
import CaseStudy from './page/CaseStudy.jsx';
import OurTeam from './page/OurTeam.jsx';
import Logomaking from './page/Logomaking.jsx';
import SocialMedia from './page/SocialMedia.jsx';
import AboutUs from './page/AboutUs.jsx';



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
    element:<Facebookpage/>
  },
    {path:'/brand',
    element:<BrandMarketing/>
  },
  
    {path:'/case',
    element:<CaseStudy/>
  },
  
    {path:'/ourteam',
    element:<OurTeam/>
  },
    {path:'/logo',
    element:<Logomaking/>
  },
  {path:'/social',
    element:<SocialMedia/>
  },
  {path:'/about',
    element:<AboutUs/>
  }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


<RouterProvider router={router} />



  </React.StrictMode>,
)
