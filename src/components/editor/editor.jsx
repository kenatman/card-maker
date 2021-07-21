import React from "react";
import EditForm from "../edit_form/edit_form";
import styles from "./editor.module.css";

const Editor = ({ cards }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Editor</h1>
      {cards.map((card) => (
        <EditForm card={card} />
      ))}
    </section>
  );
};

export default Editor;
