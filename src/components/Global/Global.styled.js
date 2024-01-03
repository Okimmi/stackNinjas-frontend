import { styled } from 'styled-components';

export const Wrapper = styled.div`
  padding: 24px 20px 40px 20px;
  margin: 0 auto;
  margin-top: 56px;

  @media screen and (max-width: 319px) {
    width: 100%;
  }

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    margin-top: 64px;
    padding: 40px 32px 44px 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    margin-top: 60px;
    padding: 20px 112px 44px 112px;
  }
`;
