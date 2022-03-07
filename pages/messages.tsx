import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Card, Carousel, Checkbox, Form, Input, PageHeader } from "antd";
import "antd/dist/antd.dark.css";
import Link from "next/link";
import React from "react";
import MessageOutlined from "@ant-design/icons";
import { Space } from "antd";

const Messages: NextPage = () => {
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
        <h1>Юху!!! Держи еще подарок</h1>
        <Card className={styles.letter} title="Письмо 1">
          <p>
            С днём рождения, солнышко! Пусть все в жизни сложится так, как ты
            хочешь, ведь ты заслуживаешь всего самого лучшего✨ не
            останавливайся на достигнутом и продолжай заниматься тем, что
            любишь)) Оставайся такой же энергичной, позитивной и жизнерадостной!
            И самое главное - будь счастлива и любима❤️❤️❤️
          </p>
          <p>Аня.</p>
        </Card>
        <Card className={styles.letter} title="Письмо 2">
          <p>
            Дорогая Лера! Я хочу позравить тебя С Днем Рождения!🥳 Происходит
            невероятная магия между нами. Никакие ссоры, годы и расстояния не
            мешают нам общаться и поддерживать связь. Не многие меня знают той
            маленькой Сашей, которую знаешь ты. Мы наблюдаем чуть ли не всю
            жизнь друг за другом. Видим, как развиваемся в разных сферах
            деятельности. Это редко в наши дни, когда сохраняется такая
            невидимая связь между людьми. Я желаю тебе постоянных побед. Ты
            очень целеустремленная и у тебя все получится! А самое главное держи
            рядом тех людей, которые готовы тебя поддержать в любых твоих
            задумках. Безумно люблю и скучаю каждый день!❤️
          </p>
          <p>Саша.</p>
        </Card>
        <Card className={styles.letter} title="Письмо 3">
          <p>
            Дорогие россияне, этот год... Стоп, это из другого праздника.
            *Кхм-кхм* Дорогая Лера, я очень рад тому, что ты официально вступила
            в сообщество 20летних почтенных господ и теперь можешь (сидя в
            кожаном кресле у камина) с бокалом вина в руке рассуждать в стиле:
            "Эх, были времена когда за 70 000 рублей можно было купить айфон",
            или "А вот я в вашем возрасте слушала нормальных исполнителей:
            Яникса, Коржа, а не всю эту вашу молодёжную дрянь" и т.д. 20 лет
            может казаться солидной цифрой, но говорят что пересекая этот рубеж
            жизнь только начинается. Ты уже достигла успеха - завела 17
            магазинов, мне об этом похвастался Никита в бане, а я так и не понял
            что ты в них продаешь. Еще ты возвела ваше семейное гнёздышко и
            завела кошку (про последнее не уверен). В общем, программа минимум
            реализована с лихвой: дом - дерево - ребенок. Теперь настало время
            посвятить время себе. Я надеюсь, что твоё настроение и
            благосостояние будут расти в этом году как курс доллара; что подарки
            будут тебе приходить к тебе с той же частотой и в том же объеме, что
            и пакеты санкций приходят в Россию, что все твои враги уйдут как
            иностранные компании, а проблемы забудутся и пропадут так же, как
            пропал коронавирус из информационного поля. С праздником вас,
            дорогие Россияне, с новым две тысячи... Ах да, не тот же праздник. С
            Днем рождения, Лерочка!!! Расти большой, не будь бубылдой P.S. Ищу
            вакантное место в одном из твоих магазинов
          </p>
          <p>Рома.</p>
        </Card>
        <Card className={styles.letter} title="Письмо 4">
          <p>
            Кошечка моя ,поздравляю с твоим днём!💖 Всегда помни,что ты
            лучшая,потому что-уникальная! Других таких точно нет💖 Я безумно
            рада что ты появилась в моей жизни,ведь с твоим появлением она стала
            ярче! Звучит как признание в любви?😹 Да потому что так и есть!
            Люблю тебя крошка💖 Любые желания тут бессмысленны,просто оставайся
            собой,не унывай и топи дальше,думаю через парочку лет увижу тебя в
            Форбс🙃💖
          </p>
          <p>Наташа.</p>
        </Card>
        <Card className={styles.letter} title="Письмо 5">
          <p>
            С днем рождения, кошка! Я очень горжусь тем, что у меня есть такая подруга как ты 💖
            Желаю счастья, здоровья и денег побольше)
          </p>
          <p>Лена.</p>
        </Card>
        <Button type="dashed" ghost className={styles.getPresentBtn}>
          <Link href="/">Вернуться на главную страницу</Link>
        </Button>
      </main>

      <footer className={styles.footer}>With love by your friends ❤️</footer>
    </div>
  );
};

export default Messages;
