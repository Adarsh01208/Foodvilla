import React from "react";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login"
import Error from "./components/Error";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ResturantMenu from "./components/ResturantMenu";
import { Suspense, lazy } from 'react';
import UserContext from "./Hooks/UserContext";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(() => import('./components/Grocery'));
const AppLayout = () => {
    return (
        <div>
            <Provider store={appStore} >  
            <UserContext.Provider value={{ loggedInUser: "Adarsh Singh" }}>
                <Header />
                <Outlet />
                <Footer />
            </UserContext.Provider>
            </Provider>
        </div>
    );
}

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: '/grocery',
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Grocery />
                    </Suspense>
                ),
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/resturants/:resId",
                element: <ResturantMenu />
            },
            {
                path:"/cart",
                element: <Cart/>
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root')); // It's the job of ReactDOM to create root i.e, heading in this case, bcz root is a dom element which is rendered to be on browser. This root is the place where all React code will r
root.render(<RouterProvider router={AppRouter} />);

