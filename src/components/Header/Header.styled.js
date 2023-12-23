import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.div`
  width: 100%;
  height: 56px;
  padding: 4px 0;
  box-sizing: border-box;
  flex-shrink: 0;
  position: fixed;
  z-index: 1000;
  top: 0px;
  left: auto;
  right: 0px;
  background-color: ${props => props.theme.colors.primeryWhite};

  @media screen and (min-width: 768px) {
    height: 64px;
    padding: 8px 0;
  }
  @media screen and (min-width: 1440px) {
    height: 60px;
    padding: 6px 0;
  }
`;
export const HeaderWrap = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 280px;
  height: 48px;

  @media screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1440px) {
    width: 1216px;
  }
`;

export const LogoStyled = styled.img`
  width: 102px;
  height: 48px;
`;

export const StyledNavLink = styled(NavLink)`
  align-items: center;
  cursor: pointer;

  transition: all 0.3s;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  text-decoration: none;
`;
