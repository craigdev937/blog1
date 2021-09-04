import React from "react";
import { Header } from "./Header";

export const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
        </React.Fragment>
    );
};




