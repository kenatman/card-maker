import React, { useRef, useState } from "react";
import Button from "../button/button";
import styles from "./create_form.module.css";

const CreateForm = ({ FileInput, onSubmit }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Date.now(),
      name: nameRef.current.value || ``,
      company: companyRef.current.value || ``,
      theme: themeRef.current.value,
      title: titleRef.current.value || ``,
      email: emailRef.current.value || ``,
      message: messageRef.current.value || ``,
      fileName: file.fileName || ``,
      fileURL: file.fileURL || ``,
    });
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
  };

  const onFileChange = (file) => {
    setFile({ fileName: file.name, fileURL: file.url });
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input
        placeholder="name.."
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
      />
      <input
        placeholder="company.."
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
      />
      <select ref={themeRef} className={styles.select} name="theme">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        placeholder="title.."
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
      />
      <input
        placeholder="email.."
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
      />
      <textarea
        placeholder="message.."
        ref={messageRef}
        className={styles.textarea}
        name="message"
      />
      <div className={styles.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Add" onClick={handleSubmit} />
    </form>
  );
};

export default CreateForm;
