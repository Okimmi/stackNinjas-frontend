import styled from 'styled-components';
import { ReactComponent as CloseIcon } from './icons/iconCloseModal.svg';


export const ModalBackdrop = styled.div`
  position: absolute;
  z-index: 1004;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: rgba(0, 0, 0, 0.8);
  
  body > & {
    overflow: hidden;
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  z-index: 1005;
  
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  padding: 24px 12px;
  border-radius: 10px;
  background-color: ${({ theme: { colors } }) => colors.primeryWhite};
  box-shadow: 0px 4px 8px rgba(64, 123, 255, 0.34);

  /* Scrool */
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;

  /* Mobile responsive container */
  @media screen and (max-width: 330px) {
    max-width: 90%;
    min-width: 280px;
  }

  /* Tablet adaptive container */
  @media screen and (min-width: 768px) {
    max-width: 704px;
    padding: 32px 24px;
  }

  /* Desktop adaptive container */
  @media screen and (min-width: 1440px) {
    max-width: 569px;
  }
`;

export const CloseBtnContainer = styled.div`
  text-align: right;
`;

export const IconCloseModal = styled(CloseIcon)`
 stroke: ${props => props.theme.colors.primeryBlue};
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
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.2);
  }

  &:hover svg,
  &:focus svg {
    stroke: ${props => props.theme.colors.secondary5};
    transition: stroke ${({ theme }) => theme.transitionDurationAndFunc};
  }

  /* Tablet adaptive container */
  @media screen and (min-width: 768px) {
    top: 32px;
    right: 24px;
  }
`;

