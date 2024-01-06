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
  .team-name::before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    inset: 0;
    transition: all 0.3s;
    margin: auto;
    margin-top: 40px;
    border: 10px;
  }
  .team-box .team-name::before {
    background-image: url(${defoultPhoto});
    background: center/cover no-repeat;
  }
  .team-box:hover .team-name::before {
    width: 60%;
    height: 60%;
  }

  .team-name:hover {
    backdrop-filter: blur(10px);
  }

  .team-content {
    display: flex;
    flex-direction: column;
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
  .team-icon-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 10px;
    justify-content: center;
  }

  .swiper-slide:hover .team-content {
    opacity: 1;
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

  .box-1,
  .box-1 .team-name::before {
    background-image: url(${olenaKim});
  }
  .box-2,
  .box-2 .team-name::before {
    background-image: url(${nataliaYarema});
  }
  .box-3,
  .box-3 .team-name::before {
    background-image: url(${oleksandrSylych});
  }
  .box-4,
  .box-4 .team-name::before {
    background-image: url(${ivanMalakhovskyi});
  }
  .box-5,
  .box-5 .team-name::before {
    background-image: url(${defoultPhoto});
  }
  .box-6,
  .box-6 .team-name::before {
    background-image: url(${valentynaMarchenko});
  }
  .box-7,
  .box-7 .team-name::before {
    background-image: url(${alinaMitolap});
  }
  .box-8,
  .box-8 .team-name::before {
    background-image: url(${yuriiPetrovskyi});
  }
  .box-9,
  .box-9 .team-name::before {
    background-image: url(${serhiiKhabuzov});
  }
`;
