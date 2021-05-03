import { useState } from 'react';
import { addPhone } from '../../../redux/Phonebook/phoneBook-operations';
import { getContacts } from '../../../redux/Phonebook/phoneBook-selectors';
import { useSelector, useDispatch } from 'react-redux';

export const useForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.warn(`Тип поля name - ${name} не обрабатывается `);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (isExistName(name)) {
      return alert(`${name} is already in contacts!`);
    }

    if ((name.length > 0) & (number.length > 0)) {
      dispatch(addPhone({ name, number }));
      reset();
    }
  };

  const contacts = useSelector(getContacts);

  const isExistName = inputName => {
    const normalaizedFilter = inputName.toLowerCase();

    return contacts.find(contact => contact.name.toLowerCase() === normalaizedFilter);
  };

  const handleFocus = () => setNumber('+380');

  const reset = () => {
    setName('');
    setNumber('');
  };

  return {
    handleChange,
    handleSubmit,
    handleFocus,
    name,
    number,
  };
};
