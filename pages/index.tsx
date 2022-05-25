import type { NextPage } from "next";
import Head from "next/head";
import Gallery from "../src/components/Gallery";
import Header from "../src/components/Header";
import NavBar from "../src/components/NavBar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NFT Landing Page</title>
        <meta name="description" content="NFT Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Header />
      <Gallery />
    </>
  );
};

export default Home;
