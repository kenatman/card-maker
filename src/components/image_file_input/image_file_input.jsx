import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  const handleChange = async (e) => {
    const uploaded = await imageUploader.upload(e.target.files[0]);

    onFileChange({ name: uploaded.original_filename, url: uploaded.url });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={handleChange}
      />
      <button className={styles.button} onClick={handleClick}>
        {name || `No File`}
      </button>
    </div>
  );
};

export default ImageFileInput;
