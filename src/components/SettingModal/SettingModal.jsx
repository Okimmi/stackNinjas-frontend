import { ModalContent } from './SettingModal.styled';
import { UploadPhoto } from './SettingUploadPhoto/SettingUploadPhoto';
import { FormModal } from './SettingFormModal/SettingFormModal';
import Modal from 'components/Global/Modal/Modal';

export const SettingModal = ({ isModalOpen, onModalClose }) => {
  return (
    <>
      {isModalOpen && (
        <Modal close={onModalClose} title={'Setting'}>
          <ModalContent>
            <UploadPhoto />
            <FormModal />
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
