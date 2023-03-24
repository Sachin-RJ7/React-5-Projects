import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './components/About';
import { createBrowserRouter,Outlet, RouterProvider} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

import './styles/app.scss';
import './styles/header.scss';
import './styles/home.scss';

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
            }
        ]
    },
    {
        path : '/about',
        element : <About />,
    },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router = {AppRouter} />);
