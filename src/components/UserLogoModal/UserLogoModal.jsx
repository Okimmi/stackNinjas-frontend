// import { useEffect } from 'react'; // Видаліть useState із цього імпорту

import {
  DropdownContainer,
  DropdownItem,
  IconLogout,
  IconSetting,
} from './UserLogoModal.styled';
import settingIcon from '../../images/header/settingIcon.svg';
import logoutIcon from '../../images/header/logoutIcon.svg';
// import { SettingModal } from 'components/Header/SettingModal/SettingModal';
// import { useState, useEffect } from 'react';

export const UserLogoModal = ({ isOpen, onClose }) => {
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  // const toggleModal = () => setModalIsOpen(prevState => !prevState);
  // const onCloseModal = () => setModalIsOpen(false);

  // useEffect(() => {
  //   const handleKeyDown = e => {
  //     if (e.code === 'Escape') {
  //       onCloseModal();
  //     }
  //   };

  //   window.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [modalIsOpen]);

  // const handleClickBackDrop = e => {
  //   if (e.currentTarget === e.target) {
  //     onCloseModal();
  //   }
  // };

  const handleButtonSettingClick = () => {
    //  код для відкриття модалки Setting
    onClose();
  };

  const handleButtonLogoutClick = () => {
    //  код для відкриття модалки Log out
    onClose();
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
    <DropdownContainer className="dropdown-container" isOpen={isOpen}>
      <DropdownItem onClick={handleButtonSettingClick}>
        <IconSetting src={settingIcon} alt="Setting" />
        Setting
        {/* <button type="button" onClick={toggleModal}>
          Setting
        </button>

        {modalIsOpen && <SettingModal />} */}
      </DropdownItem>
      <DropdownItem onClick={handleButtonLogoutClick}>
        <IconLogout src={logoutIcon} alt="Log out" />
        Log out
      </DropdownItem>
    </DropdownContainer>
  );
};
