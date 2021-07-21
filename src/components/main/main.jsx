import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./main.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Main = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "kenatman",
      company: "Samsung",
      theme: "dark",
      title: "developer",
      email: "kenatman.com",
      message: "let it go",
      fileName: "photoName",
      fileURL: null,
    },
    {
      id: 2,
      name: "kenatman2",
      company: "Samsung",
      theme: "colorful",
      title: "developer",
      email: "kenatman.com",
      message: "let it go",
      fileName: "photoName",
      fileURL: null,
    },
    {
      id: 3,
      name: "kenatman",
      company: "Samsung",
      theme: "light",
      title: "developer",
      email: "kenatman.com",
      message: "let it go",
      fileName: "photoName",
      fileURL: null,
    },
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

  const handleSubmit = (newObj) => {
    const newCards = [...cards, newObj];
    setCards(newCards);
  };
  return (
    <section className={styles.main}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} onSubmit={handleSubmit} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Main;
