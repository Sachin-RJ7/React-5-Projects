import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,Outlet, RouterProvider} from 'react-router-dom';
import {ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react'
import Header from './components/Header';
import Home from './components/Home';


const AppLayout = () => {
    return (
      <>
        <Header />
         <Outlet />
      </>
    )
}

const AppRouter = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout />,
    children : [
        {
            path : '/',
            element : <Home />,
        },
    ]
},
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <RouterProvider router = {AppRouter} />
    </ChakraProvider>
  </>
);
