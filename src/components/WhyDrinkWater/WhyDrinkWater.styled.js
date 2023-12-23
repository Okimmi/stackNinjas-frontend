import styled from 'styled-components';

export const WhyDrinkWaterStyled = styled.div`
  display: flex;
  flex-direction: column;

  box-shadow: 0px 4px 14px 0px ${props => props.theme.colors.primeryBlue};

  background-color: ${props => props.theme.colors.secondary2};
  border-radius: 10px;
  padding: 24px 16px;
  width: 280px;

  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    width: 494px;
    height: 332px;
  }

  h2 {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.1;

    color: ${props => props.theme.colors.primeryBlack};
    margin-bottom: 12px;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;

    li {
      line-height: 1.1;
      position: relative;
      padding-left: 16px;

      &::before {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;

        background-color: ${props => props.theme.colors.primeryBlue};
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  @media screen and (min-width: 1440px) {
    width: 494px;
    height: 332px;
    padding: 32px 24px;
  }
`;
