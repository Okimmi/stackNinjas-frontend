// import { useDispatch } from 'react-redux';
import { Dialog } from '@headlessui/react';
// import { useNavigate } from 'react-router-dom';

import closeIcon from '../../images/header/closeIcon.svg';

import {
  ButtonContainer,
  CloseBtn,
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
          <CloseBtn onClick={onLogoutClose}>
            <IconClose size={24} src={closeIcon} alt="Close" />
          </CloseBtn>
        </TitleWrap>
        <p>Are you sure you want to delete the entry?</p>
        <ButtonContainer>
          <button className="waterDelBtn del" onClick={handleConfirmLogout}>
            Delete
          </button>
          <button className="waterDelBtn" onClick={handleCancelClick}>
            Cancel
          </button>
        </ButtonContainer>
      </Content>
    </Dialog>
  );
};
