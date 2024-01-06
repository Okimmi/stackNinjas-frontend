import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logOut } from '../../redux/auth/operations';
import { clearUserData } from '../../redux/auth/slice';
import { ButtonContainer, Content, Question } from './UserLogoutModal.styled';

export const UserLogoutModal = ({ close }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCancelClick = () => {
    close();
  };

  const handleConfirmLogout = () => {
    try {
      dispatch(logOut())
        .then(() => {
          dispatch(clearUserData());
          close();
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
      <Question>Do you really want to leave?</Question>
      <ButtonContainer>
        <button className="logoutBtn" onClick={handleCancelClick}>
          Cancel
        </button>
        <button className="logoutBtn logout" onClick={handleConfirmLogout}>
          Log out
        </button>
      </ButtonContainer>
    </Content>
  );
};
