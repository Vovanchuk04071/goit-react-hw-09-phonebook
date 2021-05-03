import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../../redux/Auth/auth-selectors';
import { logout } from '../../../redux/Auth/auth-operation';

export const useUserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const onLogout = () => dispatch(logout());
  return { name, onLogout };
};
