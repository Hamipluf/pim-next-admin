import Head from "next/head";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import Login from "../components/login";
import { getCookie } from "cookies-next";

export default function Home() {
  const user = null;
  return (
    <>
      <Head>
        <title>Puerto Imágenes Médicas Mar del Plata </title>
        <meta
          name="description"
          content="Centro de diagnostico por imágenes en zona puerto de Mar del Plata - Bermejo 446"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      {user ? <></> : <Login />}

      <Footer />
    </>
  );
}
