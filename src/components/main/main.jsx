import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./main.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Main = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });
  const history = useHistory();

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    }, []);
  });

  const onLogout = () => {
    authService.onLogout();
  };

  const handleCreateOrUpdate = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const handleDelete = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.main}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          onSubmit={handleCreateOrUpdate}
          onDelete={handleDelete}
          onChange={handleCreateOrUpdate}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Main;
