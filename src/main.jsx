import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import 'font-awesome/css/font-awesome.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import ErrorElement from './component/ErrorElement';
import App from './component/App';
import Shop from './component/Shop/Shop';
import About from './component/About/About';
import customData from './CoustomLoader/CLoader';
import Cart from './component/Cart/Cart';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    loader: customData,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/shop',
        element: <Shop></Shop>,
        loader: customData
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/cart',
        element: <Cart></Cart>,
        loader: customData
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}><App></App></RouterProvider>)