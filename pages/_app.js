import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Puerto Imágenes Médicas Mar del Plata </title>
        <meta
          name="description"
          content="Centro de diagnostico por imágenes en zona puerto de Mar del Plata - Bermejo 446"
        />
        <link rel="shortcut icon" href="/logo-small.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
