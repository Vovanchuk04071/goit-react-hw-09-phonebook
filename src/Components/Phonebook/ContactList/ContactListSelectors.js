import { deletePhone } from '../../../redux/Phonebook/phoneBook-operations';
import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContacts } from '../../../redux/Phonebook/phoneBook-selectors';

export const useContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  const onDeleteContact = id => () => dispatch(deletePhone(id));

  return {
    contacts,
    onDeleteContact,
  };
};
