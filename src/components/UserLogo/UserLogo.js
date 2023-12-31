import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectUser } from '../../redux/auth/selectors';
import openIcon from '../../images/svg/user-logo-open-menu.svg';
import { UserLogoModal } from 'components/UserLogoModal/UserLogoModal';
import {
  IconOpenUserMenu,
  User,
  UserAvatar,
  UserLogoStyled,
  UserLogoWrapper,
  UserName,
} from './UserLogo.styled';

export const UserLogo = () => {
  const userData = useSelector(selectUser);
  const usernameFromEmail = userData.email ? userData.email.split('@')[0] : 'V';
  const userName = userData.name ? userData.name : usernameFromEmail;
  const userAvatar = userData.avatar;

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownClick = () => {
    setDropdownVisible(true);
  };

  const handleDropdownClose = () => {
    setDropdownVisible(false);
  };

  return (
    <UserLogoWrapper>
      <UserLogoStyled
        onClick={!isDropdownVisible ? handleDropdownClick : handleDropdownClose}
      >
        <User>
          <UserName>{userName}</UserName>
          <UserAvatar
            src={userAvatar}
            $defoultAvatar={userName.charAt(0).toUpperCase()}
            alt="User avatar"
          ></UserAvatar>
        </User>
        <IconOpenUserMenu src={openIcon} alt="Open menu" />
      </UserLogoStyled>
      <UserLogoModal isOpen={isDropdownVisible} onClose={handleDropdownClose} />
    </UserLogoWrapper>
  );
};
