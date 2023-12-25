import { useSelector } from 'react-redux';
import {
  selectIsError,
  selectIsRefreshing,
} from '../auth/selectors.js';

export const useAuth = () => {
  const isError = useSelector(selectIsError);
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    isError,
    isRefreshing,
  };
};