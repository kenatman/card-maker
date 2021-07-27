import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./main.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Main = ({ FileInput, authService, cardRepository }) => {
  const historyState = useHistory()?.location?.state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);
  const history = useHistory();

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (abc) => {
      setCards(abc);
    });
    return () => stopSync();
  }, [userId, cardRepository]);

  useEffect(() => {
    authService.onAuthChange(
      (user) => {
        if (user) {
          setUserId(user.uid);
        } else {
          history.push("/");
        }
      },
      [authService, userId, history]
    );
  });

  const onLogout = useCallback(() => {
    authService.onLogout();
  }, [authService]);

  const handleCreateOrUpdate = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const handleDelete = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
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
