import { changeFilter } from '../../../redux/Phonebook/phoneBook-action';
import { getFilter } from '../../../redux/Phonebook/phoneBook-selectors';
import { useDispatch, useSelector } from 'react-redux';

export const useFilter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const onChange = e => dispatch(changeFilter(e.target.value));

  return { value, onChange };
};
