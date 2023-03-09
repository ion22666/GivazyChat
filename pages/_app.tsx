import "./styles.css";

import React, { useEffect } from "react";
import Router from "next/router";
import Head from "next/head";

import { Loading, transition_duration, minimum_time_loading } from "../components/loading";

let started_loading_at: number = performance.now();

function MyApp({ Component, pageProps }) {
    const [is_loading, set_is_loading] = React.useState(false);

    useEffect(() => {
        const originalPush = Router.router.push; // Save a reference to the original push function

        // Overwrite the original push function with the wrapped version
        Router.router.push = async function (...arg: Parameters<typeof Router.push>): Promise<boolean> {
            // before the routes changes:
            set_is_loading(true);
            started_loading_at = performance.now();
            await new Promise<void>(resolve => setTimeout(resolve, transition_duration));

            // Call the original push function saved in the variable
            return originalPush.call(Router.router, ...arg);
        };

        Router.events.on("routeChangeComplete", () => {
            let remaining_time = minimum_time_loading - (performance.now() - started_loading_at);
            setTimeout(() => set_is_loading(false), remaining_time > 0 ? remaining_time : 0);
        });
    }, []);

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Givazy</title>
            </Head>
            <Loading is_loading={is_loading} />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;

export const VerdeColor = "rgb(22, 224, 107)";