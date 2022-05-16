import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../src/NavBar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NFT Landing Page</title>
        <meta name="description" content="NFT Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <main></main>
    </>
  );
};

export default Home;
