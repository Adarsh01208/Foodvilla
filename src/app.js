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


import { RouterProvider, createBrowserRouter } from "react-router-dom";

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    );
}
 
const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement:<Error/>
        
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contact",
        element: <ContactUs/>
    },
    {
        path: "/login",
        element: <Login/>
    }
]);





const root = ReactDOM.createRoot(document.getElementById('root')); // It's the job of ReactDOM to create root i.e, heading in this case, bcz root is a dom element which is rendered to be on browser. This root is the place where all React code will r
root.render(<RouterProvider router={AppRouter} />);

