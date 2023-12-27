import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: absolute;
  z-index: 1004;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f7f6f960;
`;

export const ModalContainer = styled.div`
  position: relative;
  z-index: 1005;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  min-width: 240px;
  max-width: 280px;
  padding: 24px 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ bg }) => bg || '#fff'};
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

  /* Mobile responsive container */
  @media screen and (min-width: 320px) {
    min-width: 320px;
    max-width: calc(767px-40px);
  }

  /* Tablet adaptive container */
  @media screen and (min-width: 768px) {
    min-width: 704px;
    max-width: 0;
  }

  /* Desktop adaptive container */
  @media screen and (min-width: 1440px) {
    min-width: 569px;
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
  background-color: ${props => props.theme.colors.primeryWhite};
  cursor: pointer;

  &:hover, &:focus {
    box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  }
`;
