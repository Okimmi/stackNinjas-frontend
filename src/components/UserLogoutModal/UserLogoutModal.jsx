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

export const UserLogoutModal = ({ isLogoutActive, onLogoutClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCancelClick = () => {
    onLogoutClose();
  };

  const handleConfirmLogout = () => {
    dispatch(logOut());
    onLogoutClose();
    navigate('/');
  };

  return (
    <Dialog open={isLogoutActive} onClose={onLogoutClose}>
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
