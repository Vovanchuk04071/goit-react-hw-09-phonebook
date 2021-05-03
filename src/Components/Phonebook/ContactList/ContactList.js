import React from 'react';
import style from './ContactList.module.css';
import Button from '@material-ui/core/Button';
import { useContactList } from './ContactListSelectors';

export default function ContactList() {
  const { contacts, onDeleteContact } = useContactList();

  return (
    <ul className={style.contacts}>
      {contacts.map(({ id, name, number }) => (
        <li className={style.list} key={id}>
          <p>{name}</p>
          <p>{number}</p>

          <Button
            className={style.button}
            onClick={() => onDeleteContact(id)}
            variant="contained"
            color="primary"
            size="small"
            type="submit"
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
}
