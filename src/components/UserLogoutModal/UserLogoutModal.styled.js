import styled from 'styled-components';

export const LogoutOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
`;

export const Content = styled.div`
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translate(-50%);

  border-radius: 10px;
  background: ${props => props.theme.colors.primeryWhite};
  color: ${props => props.theme.colors.primeryBlack};
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 260px;
  padding: 32px 24px;
  justify-content: center;
  align-items: center;
  gap: 24px;
  z-index: 3000;

  @media screen and (min-width: 768px) {
    top: 200px;

    width: 592px;
    height: 208px;
    align-items: flex-start;
  }

  @media screen and (min-width: 1440px) {
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
  }

  p {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }
  button {
    background-color: ${props => props.theme.colors.secondary6};
    color: ${props => props.theme.colors.primeryBlue};

    border: none;
    border-radius: 10px;
    padding: 8px 30px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    cursor: pointer;
    width: 232px;
    height: 36px;

    &:hover {
      box-shadow: 0px 4px 8px 0px ${props => props.theme.colors.primeryBlue};
      background-color: ${props => props.theme.colors.secondary3};
      color: ${props => props.theme.colors.primeryWhite};
    }
    @media screen and (min-width: 768px) {
      width: 160px;
      height: 44px;
    }
  }
`;

export const IconClose = styled.img``;
export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const Title = styled.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.2;
`;
export const ButtonContainer = styled.h2`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }
  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
  }
`;
