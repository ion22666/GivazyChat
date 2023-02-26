import "./styles.css";

import React from 'react'
import Router from "next/router";
import Loading from "../pages/loading";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  Router.events.on("routeChangeStart", () => setLoading(true));
  Router.events.on("routeChangeComplete", () => {
    setTimeout(() => setLoading(false), 700); 
  });

  return (
    <>
      {loading && <Loading />}
      <Component {...pageProps} />
    </>
  );
}


export default MyApp;