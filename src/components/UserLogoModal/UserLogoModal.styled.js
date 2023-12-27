import styled from 'styled-components';

export const DropdownOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
`;

export const DropdownContainer = styled.div`
  display: flex;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${props => props.theme.colors.primeryWhite};
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);

  flex-direction: column;
  gap: 16px;
  padding: 16px;
  width: 118px;
  height: 88px;
  z-index: 3000;
`;

export const DropdownItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  line-height: 1.25;
  color: ${props => props.theme.colors.primeryBlue};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.secondary5};
  }
`;

export const IconSetting = styled.img`
  width: 16px;
  height: 16px;
`;

export const IconLogout = styled.img`
  width: 16px;
  height: 16px;
`;
