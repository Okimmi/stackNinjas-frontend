import styled from 'styled-components';

export const WaterconsumTrackerStyled = styled.div`
  @media screen and (min-width: 1440px) {
    width: 439px;
    height: 366px;
  }
  h2 {
    font-size: 28px;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 16px;

    @media screen and (min-width: 768px) {
      font-size: 36px;
      line-height: 1.17;
    }
  }
  p {
    font-size: 24px;
    line-height: 1.25;
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
      font-size: 26px;
      line-height: 1.2;
    }
  }
  h3 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
    margin-bottom: 12px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
    @media screen and (min-width: 1440px) {
      flex-direction: column;
    }
  }
  li {
    line-height: 1.25;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    @media screen and (min-width: 768px) {
      width: 224px;
      height: 40px;
    }
  }
  img {
    width: 24px;
    height: 24px;

    @media screen and (min-width: 768px) {
      width: 30px;
      height: 30px;
    }
  }
`;

export const Titlelist = styled.h6`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 12px;
`;

export const ButtonTryTracker = styled.button`
  background-color: ${props => props.theme.colors.primeryBlue};
  color: ${props => props.theme.colors.primeryWhite};
  box-shadow: 0px 4px 8px 0px ${props => props.theme.colors.primeryBlue};
  border: none;
  border-radius: 10px;
  padding: 8px 30px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  cursor: pointer;
  width: 280px;
  height: 36px;

  &:hover,
  &:focus {
    box-shadow: 0px 4px 14px 0px ${props => props.theme.colors.primeryBlue};
  }
  &:active {
    box-shadow: none;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 44px;
    font-size: 18px;
    line-height: 1.3;
    padding: 10px 30px;
  }
  @media screen and (min-width: 768px) {
    width: 384px;
  }
`;
