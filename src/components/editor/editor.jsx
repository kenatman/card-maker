import React from "react";
import CreateForm from "../create_form/create_form";
import EditForm from "../edit_form/edit_form";
import styles from "./editor.module.css";

const Editor = ({ cards, onSubmit }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Editor</h1>
      {cards.map((card) => (
        <EditForm key={card.id} card={card} />
      ))}
      <CreateForm onSubmit={onSubmit} />
    </section>
  );
};

export default Editor;
