import styled from 'styled-components';

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserName = styled.span`
  color: ${props => props.theme.colors.primeryBlack};
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const UserAvatar = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primeryWhite};
  color: ${props => props.theme.colors.primeryBlue};
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;

  &:empty::before {
    content: '${props => props.defoultAvatar || 'V'}';
  }

  ${props =>
    props.src
      ? `&:empty::before {
          content: '';
        }`
      : ''};
`;

export const IconOpenUserMenu = styled.img`
  width: 16px;
  height: 16px;
`;

export const UserLogoStyled = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  border: none;
  background-color: transparent;

  transition: all 0.3s;

  &:hover,
  &:focus {
    transform: scale(1.1);
    ${UserName} {
      color: ${props => props.theme.colors.secondary5};
    }
  }
`;
