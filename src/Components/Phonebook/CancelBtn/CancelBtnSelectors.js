import { useDispatch } from 'react-redux';
import { changeFilter } from '../../../redux/Phonebook/phoneBook-action';

export const useCancelBtn = () => {
  const dispatch = useDispatch();
  const clearFilter = () => dispatch(changeFilter(''));
  return { clearFilter };
};
