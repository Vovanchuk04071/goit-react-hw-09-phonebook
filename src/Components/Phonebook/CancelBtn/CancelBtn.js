import React from 'react';
import styles from './cancel.module.css';
import cancelImg from '../../../img/icons8-отмена-20.png';
import { useCancelBtn } from './CancelBtnSelectors';

export default function CancelBtn() {
  const { clearFilter } = useCancelBtn();
  return (
    <button onClick={clearFilter} className={styles.btn} type="button">
      <img src={cancelImg} className={styles.img} alt="cancel" />
    </button>
  );
}
