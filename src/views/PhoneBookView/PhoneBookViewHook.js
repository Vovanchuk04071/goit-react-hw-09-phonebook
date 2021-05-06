import { useEffect } from 'react';
import { fetchContact } from '../../redux/Phonebook/phoneBook-operations';
import { getLoading } from '../../redux/Phonebook/phoneBook-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/Phonebook/phoneBook-action';

export const usePhoneBook = () => {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getLoading);
  useEffect(() => dispatch(fetchContact()), []);

  const clearFilter = () => dispatch(changeFilter(''));

  return {
    isLoadingContacts,
    clearFilter,
  };
};
