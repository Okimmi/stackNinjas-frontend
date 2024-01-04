import { useDispatch } from 'react-redux';
import { deleteEntryThunk } from '../../redux/hydrationEntries/operations';

import { ButtonContainer, Content, Question } from './WaterDelModal.styled';

export const WaterDelModal = ({ close, waterId }) => {
  const dispatch = useDispatch();

  const handleCancelClick = () => {
    close();
  };

  const handleConfirmDelete = () => {
    //dispatch(deleteEntryThunk(waterId));
    close();
  };


  return (
    <Content>
      <Question>Are you sure you want to delete the entry?</Question>
      <ButtonContainer>
        <button className="deleteBtn delete" onClick={handleConfirmDelete}>
          Delete
        </button>
        <button className="deleteBtn" onClick={handleCancelClick}>
          Cancel
        </button>
      </ButtonContainer>
    </Content>
  );
};
