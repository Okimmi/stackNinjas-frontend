import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  /* position: absolute; */
  z-index: 4;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f7f6f960;
`;

export const ModalContainer = styled.div`
  position: relative;
  z-index: 5;
  box-sizing: border-box;
  min-width: 240px;
  width: 280px;
  padding: 24px 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ bg }) => bg || '#fff'};
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

  @media screen and (max-width: 767px) {
    max-width: 303px;
  }

  @media screen and (min-width: 768px) {
    width: 396px;
  }
`;

export const CloseBtnContainer = styled.div`
  text-align: right;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 12px;
  padding: 0;
  border: 0;
  margin: 0;
  width: 24px;
  height: 24px;
  /* background-color: white; */
  background-color: ${({ bg }) => bg || 'transparent'};
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  }
`;
