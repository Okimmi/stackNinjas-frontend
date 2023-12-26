import styled from 'styled-components';

export const DropdownContainer = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${props => props.theme.colors.primeryWhite};
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px ${props => props.theme.colors.primeryBlue};

  flex-direction: column;
  gap: 16px;
  padding: 16px;
  width: 118px;
  height: 88px;
  z-index: 1;
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
    box-shadow: 0px 4px 8px 0px ${props => props.theme.colors.primeryBlue};
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
