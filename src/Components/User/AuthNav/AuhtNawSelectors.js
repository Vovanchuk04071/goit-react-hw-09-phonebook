import { useSelector, useDispatch } from 'react-redux';
import { getError } from '../../../redux/Auth/auth-selectors';
import { fetchError } from '../../../redux/Auth/auth-action';

export const useAuthNow = () => {
  const isError = useSelector(getError);
  const dispatch = useDispatch();
  const setError = () => dispatch(fetchError(null));
  return { isError, setError };
};
