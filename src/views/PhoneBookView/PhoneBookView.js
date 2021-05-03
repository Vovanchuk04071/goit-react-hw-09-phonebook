import React from 'react';
import Form from '../../Components/Phonebook/Form';
import style from './PhoneBookView.module.css';
import Filter from '../../Components/Phonebook/Filter';
import ContactList from '../../Components/Phonebook/ContactList';
import CancelBtn from '../../Components/Phonebook/CancelBtn';
import { usePhoneBook } from './PhoneBookViewSelectors';

export default function PhonebookView() {
  const { isLoadingContacts } = usePhoneBook();

  return (
    <div className={style.wraper}>
      <h1 className={style.titleBook}>Phonebook</h1>
      <Form />
      <h2 className={style.titleContact}>Contacts</h2>
      {isLoadingContacts && <h2>Загружаю....</h2>}
      <Filter>
        <CancelBtn />
      </Filter>
      <ContactList />
    </div>
  );
}
