// import { useDispatch } from 'react-redux';
import { Dialog } from '@headlessui/react';
// import { useNavigate } from 'react-router-dom';


import closeIcon from '../../images/header/closeIcon.svg';

import {
  ButtonContainer,
  Content,
  IconClose,
  Title,
  TitleWrap,
   WaterDelOverlay,
} from './WaterDelModal.styled';


export const WaterDelModal = ({ isLogoutActive, onLogoutClose }) => {
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();

  const handleCancelClick = () => {
    onLogoutClose();
  };

  const handleConfirmLogout = () => {};

  return (
    <Dialog open={isLogoutActive} onClose={onLogoutClose}>
      <WaterDelOverlay onClick={onLogoutClose} />
      <Content>
        <TitleWrap>
          <Title> Delete entry</Title>
          <IconClose onClick={onLogoutClose} src={closeIcon} alt="Close" />
        </TitleWrap>
        <p>Are you sure you want to delete the entry?</p>
        <ButtonContainer>
          <button onClick={handleConfirmLogout}>Delete</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </ButtonContainer>
      </Content>
    </Dialog>
  );
};
