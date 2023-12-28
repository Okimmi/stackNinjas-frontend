import { useSelector } from 'react-redux';
import {
  selectIsError,
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../auth/selectors.js';

export const useAuth = () => {
  const isError = useSelector(selectIsError);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return {
    isError,
    isRefreshing,
    isLoggedIn,
  };
};
