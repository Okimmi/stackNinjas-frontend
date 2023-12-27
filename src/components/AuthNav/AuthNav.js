import { IconLogin,  StyledNavLink } from './AuthNav.styled';
import loginIcon from '../../images/header/signIn.svg';
export const AuthNav = () => {
  return (
    <>
      <StyledNavLink to="/signin">
        <span className="signin-text">Sign In</span>
        <IconLogin src={loginIcon} alt="Sign in" />
      </StyledNavLink>
    </>
  );
};
