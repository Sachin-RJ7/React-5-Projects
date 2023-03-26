import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,Outlet, RouterProvider} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';

import './styles/app.scss';
import './styles/header.scss';
import './styles/home.scss';
import './styles/footer.scss';
import './styles/contact.scss';
import './styles/mediaQuery.scss';


const AppLayout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
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
            {
                path : '/contact',
                element : <Contact />,
            },
            {
                path : '/services',
                element : <Services />,
            },
        ]
    },
    
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router = {AppRouter} />);
