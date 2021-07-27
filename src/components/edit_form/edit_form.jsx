import React, { memo, useRef } from "react";
import Button from "../button/button";
import styles from "./edit_form.module.css";

const EditForm = memo(({ FileInput, card, onDelete, onChange }) => {
  const { name, company, theme, title, email, message, fileName } = card;
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleDelete = () => {
    onDelete(card);
  };

  const handleChange = (e) => {
    if (e.currentTarget === null) {
      return;
    }
    e.preventDefault();
    onChange({ ...card, [e.currentTarget.name]: e.currentTarget.value });
  };

  const onFileChange = (file) => {
    onChange({ ...card, fileName: file.name, fileURL: file.url });
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        value={company}
        onChange={handleChange}
      />
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        value={theme}
        onChange={handleChange}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        value={message}
        onChange={handleChange}
      />
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={handleDelete} />
    </form>
  );
});

export default EditForm;
