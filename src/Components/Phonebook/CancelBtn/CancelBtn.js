import React from 'react';
import styles from './cancel.module.css';
import cancelImg from '../../../img/icons8-отмена-20.png';

export default function CancelBtn({ clearFilter }) {
  return (
    <button onClick={clearFilter} className={styles.btn} type="button">
      <img src={cancelImg} className={styles.img} alt="cancel" />
    </button>
  );
}
