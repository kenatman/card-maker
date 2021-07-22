import React from "react";
import CreateForm from "../create_form/create_form";
import EditForm from "../edit_form/edit_form";
import styles from "./editor.module.css";

const Editor = ({ FileInput, cards, onSubmit, onDelete, onChange }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Editor</h1>
      {Object.keys(cards).map((key) => (
        <EditForm
          key={key}
          FileInput={FileInput}
          card={cards[key]}
          onDelete={onDelete}
          onChange={onChange}
        />
      ))}
      <CreateForm FileInput={FileInput} onSubmit={onSubmit} />
    </section>
  );
};

export default Editor;
