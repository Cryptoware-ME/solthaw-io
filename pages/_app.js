import "../styles/globals.css";
import "@cryptogate/react-ui/dist/esm/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SOLTHAW-IO</title>
      </Head>

        <Component {...pageProps} />
    
    </>
  );
}

export default MyApp;
