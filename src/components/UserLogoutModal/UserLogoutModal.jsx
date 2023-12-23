import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import closeIcon from '../../images/header/closeIcon.svg';
import {
  ButtonContainer,
  Content,
  IconClose,
  LogoutStyled,
  Title,
  TitleWrap,
} from './UserLogoutModal.styled';

export const UserLogoutModal = ({ isLogoutActive, onLogoutClose }) => {
  const handleCancelClick = () => {
    onLogoutClose();
  };

  const dispatch = useDispatch();

  const handleConfirmLogout = () => {
    dispatch(logOut());
    onLogoutClose();
  };

  if (isLogoutActive) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }
  return (
    isLogoutActive && (
      <LogoutStyled onClick={onLogoutClose}>
        <Content>
          <TitleWrap>
            <Title> Log out</Title>
            <IconClose src={closeIcon} alt="Close" />
          </TitleWrap>
          <p>Do you really want to leave?</p>
          <ButtonContainer>
            <button onClick={handleConfirmLogout}>Log out</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </ButtonContainer>
        </Content>
      </LogoutStyled>
    )
  );
};
