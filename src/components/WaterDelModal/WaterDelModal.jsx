// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

import { ButtonContainer, Content, Question } from './WaterDelModal.styled';

export const WaterDelModal = ({ close }) => {
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();

  const handleCancelClick = () => {
    close();
  };

  const handleConfirmLogout = () => {};

  return (
    <Content>
      <Question>Are you sure you want to delete the entry?</Question>
      <ButtonContainer>
        <button className="deleteBtn delete" onClick={handleConfirmLogout}>
          Delete
        </button>
        <button className="deleteBtn" onClick={handleCancelClick}>
          Cancel
        </button>
      </ButtonContainer>
    </Content>
  );
};
