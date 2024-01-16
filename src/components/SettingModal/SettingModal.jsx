import { ModalContent } from './SettingModal.styled';
import { FormModal } from './SettingFormModal/SettingFormModal';
import Modal from 'components/Global/Modal/Modal';

export const SettingModal = ({ isModalOpen, onModalClose }) => {
  return (
    <>
      {isModalOpen && (
        <Modal close={onModalClose} title={'Setting'}>
          <ModalContent>
            <FormModal close={onModalClose} />
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
