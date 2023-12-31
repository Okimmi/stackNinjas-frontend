import { useDispatch } from 'react-redux';
import {
  deleteEntryThunk,
  getTodayEntriesThunk,
} from '../../redux/hydrationEntries/operations';

import { ButtonContainer, Content, Question } from './WaterDelModal.styled';
import Notiflix from 'notiflix';

export const WaterDelModal = ({ close, waterId }) => {
  const dispatch = useDispatch();

  const handleCancelClick = () => {
    close();
  };

  const handleConfirmDelete = () => {
    dispatch(deleteEntryThunk(waterId))
      .then(() => {
        Notiflix.Notify.success('Water intake record successfully deleted.');
        dispatch(getTodayEntriesThunk());
        close();
      })
      .catch(error => {
        Notiflix.Notify.failure(
          `Failed to delete water value: ${error.message}`
        );
      });
    close();
  };

  return (
    <Content>
      <Question>Are you sure you want to delete the entry?</Question>
      <ButtonContainer>
        <button className="deleteBtn" onClick={handleCancelClick}>
          Cancel
        </button>
        <button className="deleteBtn delete" onClick={handleConfirmDelete}>
          Delete
        </button>
      </ButtonContainer>
    </Content>
  );
};
