import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

export default function 
App({ Component, pageProps }) {
    return (
        <React.Fragment>
            <Head>
                <meta 
                    name="viewport" 
                    content="viewport-fit=cover" 
                />
            </Head>
            <Component {...pageProps} />
        </React.Fragment>
    );
};





