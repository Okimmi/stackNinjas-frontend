import { useDispatch } from 'react-redux';
import { Dialog } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

import { logOut } from '../../redux/auth/operations';
import closeIcon from '../../images/header/closeIcon.svg';
import {
  ButtonContainer,
  Content,
  IconClose,
  LogoutOverlay,
  Title,
  TitleWrap,
} from './UserLogoutModal.styled';
import { clearUserData } from '../../redux/auth/slice';

export const UserLogoutModal = ({ isLogoutActive, onLogoutClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCancelClick = () => {
    onLogoutClose();
  };

  // const handleConfirmLogout = () => {
  //   dispatch(logOut());
  //   onLogoutClose();
  // setState(initialState);
  //   navigate('/');
  // };

  const handleConfirmLogout = () => {
    try {
      dispatch(logOut())
        .then(() => {
          dispatch(clearUserData());
          onLogoutClose();
          navigate('/');
        })
        .catch(error => {
          console.error('Log out error:', error);
        });
    } catch (error) {
      console.error(error);
    }
  };

//  useEffect(() => {
  //   const handleEscKeyPress = event => {
  //     if (event.code === 'Escape' && isLogoutActive) {
  //       onLogoutClose();
  //     }
  //   };

  //   const handleOutsideClick = event => {
  //     if (!event.target.closest('.logout-container') && isLogoutActive) {
  //       onLogoutClose();
  //     }
  //   };

  //   window.addEventListener('click', handleOutsideClick);
  //   window.addEventListener('keydown', handleEscKeyPress);

  //   return () => {
  //     window.removeEventListener('click', handleOutsideClick);
  //     window.removeEventListener('keydown', handleEscKeyPress);
  //   };
  // }, [isLogoutActive, onLogoutClose]);

  return (
    <Dialog className="logout-container" open={isLogoutActive} onClose={onLogoutClose}>
      <LogoutOverlay />
      <Content>
        <TitleWrap>
          <Title> Log out</Title>
          <IconClose onClick={onLogoutClose} src={closeIcon} alt="Close" />
        </TitleWrap>
        <p>Do you really want to leave?</p>
        <ButtonContainer>
          <button onClick={handleConfirmLogout}>Log out</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </ButtonContainer>
      </Content>
    </Dialog>
  );
};
