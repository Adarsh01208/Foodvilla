import React from "react";
import { useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Oop's Something Went Wrong</h1>
            <h2>{error.status}</h2>
            <h2>{error.statusText}</h2>
        </div>
    );
}

export default Error;