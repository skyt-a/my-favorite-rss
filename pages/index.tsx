import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Articles from "../components/Articles";
import styles from "../styles/Home.module.css";
const RssParser = require("rss-parser");

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>記事一覧</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Articles />
      </main>
    </div>
  );
};

export default Home;
