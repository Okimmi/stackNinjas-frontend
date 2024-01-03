import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  Backdrop,
  ButtonCloseModal,
  IconCloseModal,
  ModalContent,
  Topic,
} from './SettingModal.styled';

import { UploadPhoto } from './SettingUploadPhoto/SettingUploadPhoto';
import { FormModal } from './SettingFormModal/SettingFormModal';

const modalRoot = document.getElementById('modal-root');

export const SettingModal = ({ isModalOpen, onModalClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onModalClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onModalClose]);

  const handleClickBackDrop = e => {
    if (e.currentTarget === e.target) {
      onModalClose();
    }
  };

  return createPortal(
    <>
      {isModalOpen && (
        <Backdrop onClick={handleClickBackDrop}>
          <ModalContent>
            <Topic>Setting</Topic>
            <ButtonCloseModal type="button" onClick={onModalClose}>
              <IconCloseModal />
            </ButtonCloseModal>

            <UploadPhoto />

            <FormModal onClose={onModalClose} />
          </ModalContent>
        </Backdrop>
      )}
    </>,
    modalRoot
  );
};
