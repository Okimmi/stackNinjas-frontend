import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavPartStyledMenu = styled.nav``;

export const StyledNavLink = styled(NavLink)`
  line-height: 1.25;
  color: ${props => props.theme.colors.primeryBlue};
  text-decoration: none;
  padding: 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  transition: all 0.3s;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.secondary5};
    transform: scale(1.1);

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const IconLogin = styled.img`
  width: 28px;
  height: 28px;
`;
