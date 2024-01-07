import styled from 'styled-components';

export const DivSuspenseLoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  z-index: 3000;

  & > div {
    width: 260px;
    height: 260px;
  }

  @media screen and (min-width: 768px) {
    & > div {
      width: 656px;
      height: 300px;
    }
  }

  @media screen and (min-width: 1440px) {
    & > div {
      width: 538px;
      height: 576px;
    }
  }
`;
