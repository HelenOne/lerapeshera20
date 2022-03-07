import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Carousel, Checkbox, Form, Input, PageHeader } from "antd";
import "antd/dist/antd.dark.css";
import Link from "next/link";
import React from "react";
import MessageOutlined from "@ant-design/icons";
import { Space } from "antd";


const Video: NextPage = () => {
  const [answersAreFilled, changeAnswersState] = React.useState(false);

  const onFinish = (values: any) => {
    changeAnswersState(true);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

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
        subTitle="for Lera"
        // onBack={() => console.log('hi')}
      />

      <main className={styles.main}>
        <h1>Ты молодец!!! Держи подарок</h1>
        <div className={styles.section}>
          <video className={styles.video} src="/mainvideo.MOV" controls />
        </div>
        <Button type="dashed" ghost className={styles.getPresentBtn}>
          <Link href="/messages">Получить еще подарок</Link>
        </Button>
      </main>

      <footer className={styles.footer}>With love by your friends ❤️</footer>
    </div>
  );
};

export default Video;
