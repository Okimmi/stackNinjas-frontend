import styled from 'styled-components';
import bgImgtab from '../../images/mainPage/BgMainPage-tab.png';
import bgImgdesk from '../../images/mainPage/BgMainPage-desk.png';
import bgImElemgdesk from '../../images/mainPage/BgElMainPage-desk.png';

export const MainPageContainer = styled.div`
  height: 100vh;

  .mainPage-wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
    @media screen and (min-width: 768px) {
      gap: 60px;
    }

    @media screen and (min-width: 1440px) {
      flex-direction: row;
      align-items: flex-end;
      gap: 81px;
      padding: 56px 0 0 110px;
    }
  }
`;

export const BGImgMainPage = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  background-image: url(${bgImgtab});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;

  @media screen and (min-width: 769px) {
    background-image: url(${bgImElemgdesk}), url(${bgImgdesk});
    background-size: contain;
    background-position: top, bottom;
    background-repeat: no-repeat, no-repeat;
  }
`;
