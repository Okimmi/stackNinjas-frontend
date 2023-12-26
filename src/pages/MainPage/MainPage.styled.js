import styled from 'styled-components';
import bgImgmob from '../../images/mainPage/BgMainPage-mob.png';
import bgImgtab from '../../images/mainPage/BgMainPage-tab.png';
import bgImgdesk from '../../images/mainPage/BgMainPage-desk.png';
import bgImElemgdesk from '../../images/mainPage/BgElMainPage-desk.png';

export const MainPageContainer = styled.div`
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
`;

export const BGImgMainPage = styled.div`
  position: absolute;
  top: 109px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  @media screen and (max-width: 767px) {
    height: 100%;
    background-image: url(${bgImgmob});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media screen and (min-width: 768px) {
    background-image: url(${bgImgtab});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${bgImElemgdesk}), url(${bgImgdesk});
    background-size: contain;
    background-position: top, bottom;
    background-repeat: no-repeat, no-repeat;
  }
`;
