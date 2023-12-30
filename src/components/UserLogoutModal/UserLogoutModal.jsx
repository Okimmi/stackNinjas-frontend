import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logOut } from '../../redux/auth/operations';
import closeIcon from '../../images/header/closeIcon.svg';
import {
  ButtonContainer,
  Content,
  IconClose,
  Title,
  TitleWrap,
} from './UserLogoutModal.styled';
import { clearUserData } from '../../redux/auth/slice';

export const UserLogoutModal = ({ onLogoutClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCancelClick = () => {
    onLogoutClose();
  };

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

  return (
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
  );
};
