import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Carousel, Checkbox, Form, Input, PageHeader } from "antd";
import "antd/dist/antd.dark.css";
import Link from "next/link";
import React from "react";

const Test: NextPage = () => {
  const [a1, changea1] = React.useState("");
  const [a2, changea2] = React.useState("");
  const [a3, changea3] = React.useState("");
  const [checked, changeChecked] = React.useState(false);

  const onFinish = (values: any) => {
    //
  };

  const onFinishFailed = (errorInfo: any) => {
    //
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
        <h1>Чтобы посмотреть подарок 🎁 ты должна пройти небольшой тест</h1>
        <div className={styles.section}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <span>
              1. Водный символ зодиака, козерога друг и рака. Но бывают неулыбы
              Те, чей знак зовется...
            </span>
            <Form.Item
              label="Знак зодиака"
              name="a1"
              rules={[{ required: true, message: "Ответ обязателен!" }]}
            >
              <Input value={a1} onChange={(e) => changea1(e.target.value)} />
            </Form.Item>

            <span>
              2. Женское имя, происходит от латинского — «быть сильной,
              здоровой»
            </span>
            <Form.Item
              label="Имя"
              name="a2"
              rules={[{ required: true, message: "Ответ обязателен!" }]}
            >
              <Input value={a2} onChange={(e) => changea2(e.target.value)} />
            </Form.Item>

            <span>3. Сто разделить на пять равно</span>
            <Form.Item
              label="Число"
              name="a3"
              rules={[{ required: true, message: "Ответ обязателен!" }]}
            >
              <Input value={a3} onChange={(e) => changea3(e.target.value)} />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox checked={false} onChange={() => changeChecked(!checked)}>
                Поставь галочку, если ты котик
              </Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                disabled={
                  a1 !== "рыбы" || a2 !== "Валерия" || a3 !== "20" || checked
                }
                type="primary"
                htmlType="submit"
              >
                <Link href="/video">Обменять правильные ответы на подарок</Link>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </main>

      <footer className={styles.footer}>With love by your friends ❤️</footer>
    </div>
  );
};

export default Test;
