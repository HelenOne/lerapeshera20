import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Carousel, PageHeader } from "antd";
import "antd/dist/antd.dark.css";
import Link from "next/link";


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Happy birthday lerapeshera</title>
        <meta name="description" content="lerapeshera 20 years birthday" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <PageHeader
        className="site-page-header"
        title="Happy b-day site 🎉"
        subTitle="Мы тебя любим"
      />

      <main className={styles.main}>
        <h1>С днем рождения!</h1>
        <div className={styles.section}>
          <div className="styles.imagecontainer">
            <img src="/mainphoto.jpg" className={styles.img} />
            <img src="/mainphoto2.jpg" className={styles.img2} />
          </div>
        </div>
        <Button type="dashed" ghost className={styles.getPresentBtn}>
          <Link href="/test">Получить подарок</Link>
        </Button>
      </main>

      <footer className={styles.footer}>With love by your friends ❤️</footer>
    </div>
  );
};

export default Home;
