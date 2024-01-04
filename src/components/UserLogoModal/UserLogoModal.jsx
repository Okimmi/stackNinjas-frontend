import { useState } from 'react';

import Modal from '../Global/Modal/Modal.jsx';
import { UserLogoutModal } from '../UserLogoutModal/UserLogoutModal.jsx';
import { SettingModal } from 'components/SettingModal/SettingModal';
import settingIcon from '../../images/svg/user-logo-modal-settings.svg';
import logoutIcon from '../../images/svg/user-logo-modal-logout.svg';
import {
  DropdownContainer,
  DropdownItem,
  DropdownOverlay,
  IconLogout,
  IconSetting,
} from './UserLogoModal.styled';

export const UserLogoModal = ({ isOpen, onClose }) => {
  const [logoutActive, setLogoutActive] = useState(false);
  const [settingModalIsOpen, setSettingModalIsOpen] = useState(false);

  const handleOnSetting = () => {
    setSettingModalIsOpen(true);
    onClose();
  };

  const handleCloseSetting = () => {
    setSettingModalIsOpen(false);
    onClose();
  };

  const handleOnLogout = () => {
    setLogoutActive(true);
    onClose();
  };

  const handleCloseLogout = () => {
    setLogoutActive(false);
  };

  return (
    <>
      {isOpen && (
        <>
          <DropdownContainer className="dropdown-container">
            <DropdownItem onClick={handleOnSetting}>
              <IconSetting src={settingIcon} alt="Setting" />
              Setting
            </DropdownItem>
            <DropdownItem onClick={handleOnLogout}>
              <IconLogout src={logoutIcon} alt="Log out" />
              Log out
            </DropdownItem>
          </DropdownContainer>
          <DropdownOverlay onClick={onClose} />
        </>
      )}
      {logoutActive && (
        <Modal close={handleCloseLogout} title={'Log out'}>
          <UserLogoutModal close={handleCloseLogout} />
        </Modal>
      )}

      <SettingModal
        isModalOpen={settingModalIsOpen}
        onModalClose={handleCloseSetting}
      />
    </>
  );
};
