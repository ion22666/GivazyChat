import "./styles.css";

import React from 'react'
import Router from "next/router";
import Loading from "../pages/loading";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  Router.events.on("routeChangeStart", () => setLoading(true));
  Router.events.on("routeChangeComplete", () => {
    setTimeout(() => setLoading(false), 1050); // Adăugați o întârziere de 2.5 secunde
  });

  return (
    <>
      {loading && <Loading />}
      <Component {...pageProps} />
    </>
  );
}


export default MyApp;