import "./styles.css";

import React from "react";
import Router from "next/router";
import Head from "next/head";

import Loading from "../components/loading";

let started_loading_at: number = performance.now();
const minimum_time_loading = 2000;

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = React.useState(false);

    Router.events.on("routeChangeStart", () => {
        setLoading(true);
        started_loading_at = performance.now();
    });
    Router.events.on("routeChangeComplete", () => {
        let remaining_time = minimum_time_loading - (performance.now() - started_loading_at);
        setTimeout(() => setLoading(false), remaining_time > 0 ? remaining_time : 0);
    });

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Givazy</title>
            </Head>
            <Loading is_loading={loading} />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
