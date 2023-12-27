import {
  DropdownContainer,
  DropdownItem,
  IconLogout,
  IconSetting,
} from './UserLogoModal.styled';
import settingIcon from '../../images/header/settingIcon.svg';
import logoutIcon from '../../images/header/logoutIcon.svg';
// import { SettingModal } from 'components/Header/SettingModal/SettingModal';

// import {
//   Topic,
//   ButtonCloseModal,
//   IconCloseModal,
// } from 'components/Header/SettingModal/SettingModal.styled';
// import { UploadPhoto } from 'components/Header/SettingModal/SettingUploadPhoto/SettingUploadPhoto';
// import { FormModal } from 'components/Header/SettingModal/SettingFormModal/SettingFormModal';

export const UserLogoModal = ({ isOpen, onClose }) => {
  const handleButtonSettingClick = () => {
    //  код для відкриття модалки Setting
    // onClose();
  };

  const handleButtonLogoutClick = () => {
    //  код для відкриття модалки Log out
    // onClose();
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
        Settings
      </DropdownItem>
      <DropdownItem onClick={handleButtonLogoutClick}>
        <IconLogout src={logoutIcon} alt="Log out" />
        Log out
      </DropdownItem>
    </DropdownContainer>
  );
};
