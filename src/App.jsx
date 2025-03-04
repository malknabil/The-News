import { useEffect, useState } from 'react'
import './App.css'
import Business from './Components/Business/Business'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Entertainment from './Components/Entertainment/Entertainment';
import General from './Components/General/General';
import Health from './Components/Health/Health';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import Science from './Components/Science/Science';
import Sports from './Components/Sports/Sports';
import Technology from './Components/Technology/Technology';
import NewsDetails from './Components/NewsDetails/NewsDetails';
import NewsContextProvider from './Context/NewsContext';

let x = createBrowserRouter([
  {
    path: '', element: <Layout />,
    children: [
      { path: 'business', element: <Business /> },
      { path: 'entertainment', element: <Entertainment /> },
      { path: 'health', element: <Health /> },
      { path: 'general', element: <General /> },
      { path: '*', element: <Notfound /> },
      { path: 'science', element: <Science /> },
      { path: 'sports', element: <Sports /> },
      { path: 'technology', element: <Technology /> },
      { path: 'details', element: <NewsDetails /> },
      { index: true, element: <Home /> },
    ]
  }
])

function App() {




  return (
    <>
      <NewsContextProvider>
        <RouterProvider router={x}>
        </RouterProvider>
      </NewsContextProvider>
    </>
  )
}

export default App
