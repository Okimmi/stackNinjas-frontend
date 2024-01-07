import styled from 'styled-components';
import defoultPhoto from '../../images/modalDevelopers/defoult-photo.jpg';
import olenaKim from '../../images/modalDevelopers/olena-kim.jpg';
import nataliaYarema from '../../images/modalDevelopers/natalia-yarema.jpg';
import oleksandrSylych from '../../images/modalDevelopers/oleksandr-sylych.jpg';
import yuriiPetrovskyi from '../../images/modalDevelopers/yurii-petrovskyi.jpg';
import ivanMalakhovskyi from '../../images/modalDevelopers/ivan-malakhovskyi.jpg';
import alinaMitolap from '../../images/modalDevelopers/alina-mitolap.jpg';
import valentynaMarchenko from '../../images/modalDevelopers/valentyna-marchenko.jpg';
import serhiiKhabuzov from '../../images/modalDevelopers/serhii-khabuzov.jpg';

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

export const SwipeContainer = styled.div`
  .mySwiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 280px;
    height: 380px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }

  .team-box {
    background-image: url(${defoultPhoto});
    background: center/cover no-repeat;
    width: 100%;
    height: 100%;
  }
  .team-name {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .team-name:hover {
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.2);
  }

  .team-respons {
    position: absolute;
    transition: all 0.3s;
    top: 30px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    gap: 8px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${props => props.theme.colors.primeryWhite};
    transform: scale(0);
  }
  .swiper-slide:hover .team-respons {
    transform: scale(1);
  }
  .team-respons h3 {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.3px;
    text-transform: uppercase;
  }

  .team-respons ul {
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }

  .team-respons li {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    position: relative;
    padding-left: 10px;

    &::before {
      content: '';
      display: inline-block;
      width: 6px;
      height: 6px;
      background-color: ${props => props.theme.colors.primeryWhite};
      border-radius: 50%;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .team-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    margin-top: 270px;
    opacity: 0;
  }
  .team-content h2 {
    color: ${props => props.theme.colors.primeryWhite};
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .team-content p {
    color: ${props => props.theme.colors.primeryWhite};
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    letter-spacing: 0.5px;
    margin-bottom: 5px;
  }

  .swiper-slide:hover .team-content {
    opacity: 1;
  }

  .team-icon-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 10px;
    justify-content: center;
  }
  .icon {
    position: relative;
    font-size: 25px;
    padding: 5px;
    background: ${props => props.theme.colors.primeryWhite};
    border-radius: 10px;
    cursor: pointer;
  }

  .logo-linkedin {
    color: ${props => props.theme.colors.primeryBlue};
  }
  .logo-linkedin:hover {
    background-color: ${props => props.theme.colors.primeryBlue};
    color: ${props => props.theme.colors.primeryWhite};
  }

  .logo-github {
    color: ${props => props.theme.colors.primeryBlack};
  }
  .logo-github:hover {
    background-color: ${props => props.theme.colors.primeryBlack};
    color: ${props => props.theme.colors.primeryWhite};
  }

  .box-1 {
    background-image: url(${olenaKim});
  }
  .box-2 {
    background-image: url(${nataliaYarema});
  }
  .box-3 {
    background-image: url(${oleksandrSylych});
  }
  .box-4 {
    background-image: url(${ivanMalakhovskyi});
  }
  .box-5 {
    background-image: url(${defoultPhoto});
  }
  .box-6 {
    background-image: url(${valentynaMarchenko});
  }
  .box-7 {
    background-image: url(${alinaMitolap});
  }
  .box-8 {
    background-image: url(${yuriiPetrovskyi});
  }
  .box-9 {
    background-image: url(${serhiiKhabuzov});
  }
`;
