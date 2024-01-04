import styled from 'styled-components';

export const Content = styled.div`
  width: 232px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    width: 544px;
    align-items: flex-start;
  }
`;

export const Question = styled.p`
  color: ${props => props.theme.colors.primeryBlack};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }

  .deleteBtn {
    display: flex;
    align-items: center;
    justify-content: center;
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
      box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    }
    @media screen and (min-width: 768px) {
      padding: 10px 30px;
      font-size: 18px;
      line-height: 1.33;
      width: 160px;
      height: 44px;
    }
  }
  .deleteBtn.delete {
    background-color: ${props => props.theme.colors.secondary3};
    color: ${props => props.theme.colors.primeryWhite};
  }
`;
