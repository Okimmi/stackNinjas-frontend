import { useEffect, useState } from 'react';
import {
  Backdrop,
  ButtonCloseModal,
  IconCloseModal,
  ModalContent,
  Topic,
} from './SettingModal.styled';
import { createPortal } from 'react-dom';
import { UploadPhoto } from './SettingUploadPhoto/SettingUploadPhoto';
import { FormModal } from './SettingFormModal/SettingFormModal';

const modalRoot = document.getElementById('modal-root');

export const SettingModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(prevState => !prevState);
  const onClose = () => setModalIsOpen(false);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalIsOpen]);

  const handleClickBackDrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <>
      <button type="button" onClick={toggleModal}>
        Open Modal
      </button>

      {modalIsOpen && (
        <Backdrop onClick={handleClickBackDrop}>
          <ModalContent>
            <Topic>Setting</Topic>
            <ButtonCloseModal type="button" onClick={toggleModal}>
              <IconCloseModal />
            </ButtonCloseModal>

            <UploadPhoto />

            <FormModal onClose={onClose} />
          </ModalContent>
        </Backdrop>
      )}
    </>,
    modalRoot
  );
};
