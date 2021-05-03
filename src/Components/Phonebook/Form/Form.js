import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './Form.module.css';
import { useForm } from './FormSelectors';

export default function Form() {
  const { handleChange, handleSubmit, handleFocus, name, number } = useForm();
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          type="Text"
          placeholder="Your name"
          value={name}
          name="name"
          onChange={handleChange}
          className={styles.formInput}
        ></input>
      </label>
      <label className={styles.label}>
        Number
        <input
          type="Text"
          placeholder="Your number"
          value={number}
          name="number"
          onFocus={handleFocus}
          onChange={handleChange}
          className={styles.formInput}
        ></input>
      </label>
      <Button variant="contained" color="primary" size="small" type="submit">
        Add contact
      </Button>
    </form>
  );
}
