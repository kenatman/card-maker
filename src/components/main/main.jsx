import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./main.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";

const Main = ({ authService }) => {
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
      <Footer />
    </section>
  );
};

export default Main;
