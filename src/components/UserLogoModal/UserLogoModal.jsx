import { useState } from 'react';

import {
  DropdownContainer,
  DropdownItem,
  IconLogout,
  IconSetting,
} from './UserLogoModal.styled';
import settingIcon from '../../images/header/settingIcon.svg';
import logoutIcon from '../../images/header/logoutIcon.svg';
import { UserLogoutModal } from '../../components/UserLogoutModal/UserLogoutModal';

export const UserLogoModal = ({ isOpen, onClose }) => {
  const [LogoutActive, SetLogoutActive] = useState(false);

  const handleOnSetting = () => {
    // КОД ДЛЯ ВІДКРИТТЯ МОДАЛКИ НАЛАШТУВАНЬ ПРОФІЛЮ ЮЗЕРА
  };

  const handleOnLogout = () => {
    // відкриття модалки Log out

    SetLogoutActive(true);
    console.log('handleOnLogout is called');
  };

  const handleCloseLogout = () => {
    // закриття модалки Log out
    SetLogoutActive(false);
  };

  // useEffect(() => {
  //   const handleEscKeyPress = event => {
  //     if (event.key === 'Escape' && isOpen) {
  //       onClose();
  //     }
  //   };

  //   const handleOutsideClick = event => {
  //     if (!event.target.closest('.dropdown-container') && isOpen) {
  //       onClose();
  //     }
  //   };

  //   window.addEventListener('click', handleOutsideClick);
  //   window.addEventListener('keydown', handleEscKeyPress);

  //   return () => {
  //     window.removeEventListener('click', handleOutsideClick);
  //     window.removeEventListener('keydown', handleEscKeyPress);
  //   };
  // }, [isOpen, onClose]);

  return (
    isOpen && (
      <DropdownContainer onClick={onClose}>
        <DropdownItem onClick={handleOnSetting}>
          <IconSetting src={settingIcon} alt="Setting" />
          Setting
        </DropdownItem>
        <DropdownItem onClick={handleOnLogout}>
          <IconLogout src={logoutIcon} alt="Log out" />
          Log out
        </DropdownItem>

        <UserLogoutModal
          isLogoutActive={LogoutActive}
          onLogoutClose={handleCloseLogout}
        />
      </DropdownContainer>
    )
  );
};
