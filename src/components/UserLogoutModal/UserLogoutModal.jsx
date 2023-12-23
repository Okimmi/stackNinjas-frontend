// import { Link } from 'react-router-dom';
// import { Content, ProfMod } from './Modal.styled';
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
    // закриття модалки Log out
    onLogoutClose();
  };

  const handleConfirmLogout = () => {
    // код для видалення сесії користувача на бекенді та очищення глобального стейту
    // ...
    // закриття модалки Log out
    onLogoutClose();
    // додаткова логіка для очищення глобального стейту
    // ...
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
              <button onClick={handleCancelClick}>Log out</button>
              <button onClick={handleConfirmLogout}>Cancel</button>
 </ButtonContainer>
        </Content>
      </LogoutStyled>
    )
  );
};
