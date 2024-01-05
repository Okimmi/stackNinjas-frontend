import styled from 'styled-components';

export const FooterStyled = styled.div`
  width: 100%;
  height: 56px;
  padding: 4px 0;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.5);

  @media screen and (min-width: 768px) {
    height: 64px;
    padding: 8px 0;
  }
  @media screen and (min-width: 1440px) {
    height: 60px;
    padding: 6px 0;
  }
`;
export const FooterWrap = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3px;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 48px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    width: 704px;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 4px;
    font-size: 18px;
    line-height: 1.33;
  }
  @media screen and (min-width: 1440px) {
    width: 1216px;
  }
  .content-wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }
  @media screen and (min-width: 768px) {
    gap: 5px;
  }
  .footer-developers {
    color: ${props => props.theme.colors.primeryBlue};
    cursor: pointer;
    transition: all 0.3s;

    &:hover,
    &:focus {
      color: ${props => props.theme.colors.secondary5};
      transform: scale(1.1);
    }
  }
`;
export const IconHeart = styled.img`
  width: 14px;
  height: 13px;
`;
