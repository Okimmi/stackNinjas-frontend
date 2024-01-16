import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalStyled = styled.div`
  position: relative;
  max-width: 100vw;
  max-height: 100vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 24px 12px 24px 12px;
  border-radius: 10px;
  background-color: ${({ theme: { colors } }) => colors.primeryWhite};

  @media screen and (min-width: 768px) {
    padding: 32px 24px 32px 24px;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  stroke: ${({ theme: { colors } }) => colors.primeryBlue};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.2);
    stroke: ${({ theme: { colors } }) => colors.secondary5};
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
  max-width: 200px;

  @media screen and (min-width: 768px) {
    min-width: 384px;
  }
`;

export const Container = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;
