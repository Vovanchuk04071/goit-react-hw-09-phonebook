import React from 'react';
import style from './Filter.module.css';
import { useFilter } from './FilterSelectors';

export default function Filter({ children }) {
  const { value, onChange } = useFilter();

  return (
    <>
      <h3>Find contact by name</h3>
      <label className={style.label}>
        <input
          className={style.input}
          type="text"
          value={value}
          onChange={onChange}
        ></input>
        {children}
      </label>
    </>
  );
}
