import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./main.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Main = ({ authService }) => {
  const [cards, setCards] = useState([
    { id: 1, name: "kenatman", company: "Samsung", fileURL: `kenatman.com` },
    { id: 2, name: "kenatman2", company: "Samsung", fileURL: `kenatman.com` },
    { id: 3, name: "kenatman3", company: "Samsung", fileURL: `kenatman.com` },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.onLogout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    }, []);
  });
  return (
    <section className={styles.main}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Main;
