import { useState } from 'react';

import {
  DropdownContainer,
  DropdownItem,
  DropdownOverlay,
  IconLogout,
  IconSetting,
} from './UserLogoModal.styled';
import settingIcon from '../../images/header/settingIcon.svg';
import logoutIcon from '../../images/header/logoutIcon.svg';
import { UserLogoutModal } from '../../components/UserLogoutModal/UserLogoutModal';
import { SettingModal } from 'components/SettingModal/SettingModal';

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
      <UserLogoutModal
        isLogoutActive={logoutActive}
        onLogoutClose={handleCloseLogout}
      />

      <SettingModal
        isModalOpen={settingModalIsOpen}
        onModalClose={handleCloseSetting}
      />
    </>
  );
};
