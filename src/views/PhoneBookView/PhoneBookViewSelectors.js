import { useEffect } from 'react';
import { fetchContact } from '../../redux/Phonebook/phoneBook-operations';
import { getLoading } from '../../redux/Phonebook/phoneBook-selectors';
import { useDispatch, useSelector } from 'react-redux';

export const usePhoneBook = () => {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getLoading);
  useEffect(() => dispatch(fetchContact()), [dispatch]);

  return {
    isLoadingContacts,
  };
};
