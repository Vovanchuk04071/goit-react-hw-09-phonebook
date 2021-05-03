import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../../redux/Auth/auth-selectors';

export const useNavigationSelectors = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return { isAuthenticated };
};
