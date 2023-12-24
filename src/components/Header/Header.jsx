import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import logo from '../../images/header/logo.svg';
import {
  HeaderStyled,
  HeaderWrap,
  LogoStyled,
  StyledNavLink,
} from './Header.styled';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserLogo } from 'components/UserLogo/UserLogo';

export const Header = () => {
  const authentificated = useSelector(selectIsLoggedIn);
  return (
    <HeaderStyled>
      <HeaderWrap>
        <StyledNavLink to="/">
          <LogoStyled to="/" src={logo} alt="Logo" />
        </StyledNavLink>
        {authentificated ? <UserLogo /> : <AuthNav />}
        {/* {authentificated ? <AuthNav /> : <UserLogo />} */}
      </HeaderWrap>
    </HeaderStyled>
  );
};
