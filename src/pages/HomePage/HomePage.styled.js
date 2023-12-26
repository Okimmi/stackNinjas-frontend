import styled from 'styled-components';
import {theme} from '../../components/GlobalStyle.js'
import frame from '../../images/Frame.png'
import bottle from '../../images/Bottle.png'
import botle_home from '../../images/Botle_Home.png'
import frame_18 from '../../images/Frame_18.png'
import background from '../../images/Background.png'
import main_page from '../../images/Main_Page.png'

export const P = styled.h6`
    color: ${theme.colors.primeryBlue};
`;
// export const Logo = styled.img`
// //     width: 40px;
// //     margin-right: 4px;
// // `;
// export const LogoDiv = styled.div`
//     width: 102px;
//     display: flex;
//     align-items: center;
// `;
export const Icon = styled.img`
    width: 16px;
`;
export const Avatar = styled.div`
    border-radius: 50%;
    margin-right: 4px;
    margin-left: 8px;
`;
// export const UserName = styled.p`
//     color: ${theme.colors.primeryBlue};
//     width: 66px;
//     height: 20px;
//     font-size: 14px;
//     text-align: right;
//     &:hover{
//       color: ${theme.colors.secondary5};
//       transition: opacity 0.3s ease;
//     }
//     &:focus {
//       color: ${theme.colors.secondary5};
//       transition: opacity 0.3s ease;
//     }
// `;
// export const UserDiv = styled.div`
//     width: 122px;
//     height: 28px;
//     display: flex;
//     align-items: center;
//     &:hover .NewDiv,
//     &:focus .NewDiv {
//         display: block;
//         opacity: 1;
//     }
// `;

export const NewDiv = styled.div`
// position: absolute;
// width: 118px;
// height: 88px;
// top: 100%;
// right: -65px;
// transform: translateX(-50%);
// background-color: #fff;
// border: none;
// border-radius: 10px;
// padding: 16px;
// box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// margin-top: 10px;
// display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
// `;

// export const IconWrapper = styled.div`
// position: relative;

// `; 

export const SvgTrigger = styled.svg`
    width: 11px;
    height: 11px;
    &:hover + ${NewDiv},
    &:focus + ${NewDiv} {
        display: block;
        opacity: 1;
    }
`;
// export const HeaderDiv = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
// `;
export const MyDailyNormaDiv = styled.div`
    margin-top: 24px;
    border-radius: 10px;
    width: 164px;
    height: 74px;
    background-color: ${theme.colors.primeryWhite};
    border: 1px solid ${theme.colors.secondary2};
    padding: 7px 19px 7px 19px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 8px;
    @media screen and (min-width: 1440px) {
      margin-top: 52px;
    }
`;
export const MyDailyNorma = styled.p`
    font-size: 18px;
    height: 24px;
    margin-bottom: 12px;
`;
export const Litr = styled.p`
    font-size: 20px;
    height: 22px;
    color: ${theme.colors.primeryBlue};
    font-weight: bold;
`;
export const Edit = styled.button`
    font-size: 16px;
    height: 20px;
    margin-left: 16px;
    color: #8BAEFF;
    border: none;
    background: transparent;
    cursor: pointer;
    
    &:hover {
      color: ${theme.colors.primeryBlue};
    }
`;
export const Div = styled.div`
  display: flex;
  align-items: end;
`;
export const Img = styled.img`

`;
export const ImgBottle = styled.img`
  content: url(${frame});
  background-repeat: no-repeat;
 
  @media screen and (min-width: 768px) {
    content: url(${bottle});
  }
  @media screen and (min-width: 1440px) {
    content: url(${botle_home});
    position: absolute;
    top: 82px; 
    left: -50px;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  
}
`;


export const Background = styled.div`
position: relative;

`;

export const BackgroundImage = styled.div`
content: url(${frame_18});
position: absolute;
top: 108px; 
left: -20px;
right: 0;
bottom: 0;
z-index: -1;


@media screen and (min-width: 768px) {
  content: url(${background});
  top: 88px;
  left: -32px;
}

@media screen and (min-width: 1440px) {
  content: url(${main_page});
  left: -112px;
}
`;

export const Today = styled.p`
    font-size: 18px;
    color: ${theme.colors.primeryBlue};
    &::before {
        content: '';
        width: 1px;
        height: 8px;
        background: ${theme.colors.secondary6};
        position: absolute;
        top: 360px; 
        transform: translateY(-50%); 
        left: 265px;
        z-index: -1;
        @media screen and (min-width: 768px) {
          left: 341px;
          top: 555px;
        }
        @media screen and (min-width: 1440px) {
          top: 685px;
        }
      }
`;

export const DivToday = styled.div`
    margin-top: 16px;
    @media screen and (min-width: 768px) {
      width: 356px;
    }
    
`;

export const SliderInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 5px;
  background: ${theme.colors.secondary6};
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
  
  @media screen and (min-width: 768px) {
    margin-top: 16px;
    }
  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${theme.colors.primeryWhite};
    border: 2px solid ${theme.colors.primeryBlue};
    cursor: pointer;
    transform: translateY(-20%);
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    background: linear-gradient(to right, ${theme.colors.secondary4} 0%, ${theme.colors.secondary4} ${(props) => props.value}%, ${theme.colors.secondary6} ${(props) => props.value}%, ${theme.colors.secondary6} 100%);
    border-radius: 5px;
    border: none;
    cursor: pointer;
    position: relative;
    z-index: 0;
  }
  
  &::after {
    content: '';
    width: 1px;
    height: 8px;
    background: ${theme.colors.secondary6};
    position: absolute;
    top: 360px;  
    transform: translateY(-50%); 
    left: 10px;
    z-index: -1;
    @media screen and (min-width: 768px) {
      top: 555px;
    }
    @media screen and (min-width: 1440px) {
      top: 685px;
      }
  }
  &::before {
    content: '';
    width: 1px;
    height: 8px;
    background: ${theme.colors.secondary6};
    position: absolute;
    top: 360px;  
    transform: translateY(-50%); 
    left: 132px;
    z-index: -1;
    @media screen and (min-width: 768px) {
      left: 170px;
      top: 555px;
    }
    @media screen and (min-width: 1440px) {
      top: 685px;
      }
  }
`;

export const SliderDiv = styled.div`
  padding-left: 10px;
    padding-right: 14px
    
`;

export const Per = styled.p`
font-size: 12px;
color: ${theme.colors.primeryBlue};
z-index: 2;
`;

export const Percents = styled.div`
display: flex;
justify-content: space-between;
margin-top: 16px;
z-index: 1;
position: absolute;
top: 350px; 
width: 100%;
@media screen and (min-width: 768px) {
  width: 356px;
  top: 545px;
}
@media screen and (min-width: 1440px) {
  top: 675px;
}
`;

export const AddWaterButton = styled.button`
    margin-top: 36px;
    width: 280px;
    height: 36px;
    z-index: 1;
    cursor: pointer;
top: 105%; 
  background-color: ${theme.colors.primeryBlue};
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  border: none;
  @media screen and (min-width: 768px) {
    width: 336px;
    height: 44px;
  }
  @media screen and (min-width: 1440px) {
    width: 178px;
    height: 44px;
    margin-left: 36px;
  }
  &:hover, &:focus{
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    transition: opacity 0.3s ease;
  }
  &:active{
    box-shadow: none;
  }

`;

export const AddWater = styled.p`
  font-size: 16px;
  width: 94px;
  color: ${theme.colors.primeryWhite};
  margin-left: 10px;
  cursor: pointer;
  
`;

export const DivAddWater = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivTodayAndMonth = styled.div`
  background-color: ${theme.colors.secondary2};
  top: 110%;
  height: 836px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 24px 8px 24px 8px;

  @media screen and (min-width: 768px) {
    padding: 32px 24px 32px 24px;
    margin-top: 40px;
    height: 688px;
  }
  @media screen and (min-width: 1440px) {
    padding: 32px 24px 32px 24px;
    margin-top: 20px;
    margin-bottom: 0px;
    height: 680px;
    width: 592px;
  }
`;

export const DivTodayList = styled.div`
  max-height: 212px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 4px; 
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.secondary4}; 
  }
  
  &::-webkit-scrollbar-track {
    background-color: ${theme.colors.secondary6}; 
  }
`;

export const PToday = styled.p`
  font-size: 24px;
  margin-bottom: 16px;
  color: ${theme.colors.primeryBlack};
  
`
export const ButtonAddWater = styled.button`
  font-size: 18px;
  color: ${theme.colors.primeryBlue};
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: ${theme.colors.secondary5};
    & img {
      filter: invert(86%) sepia(60%) saturate(124%) hue-rotate(327deg) brightness(94%) contrast(93%);
    }
  }

  &:active {
    color: ${theme.colors.primeryBlue};
    & img {
      filter: none;
    }
  }
`;

export const ButtonEdit = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  padding: 0;
  cursor: pointer;
  position: relative;
  &:hover, &:focus{
    &::after {
      content: ''; 
      position: absolute;
      top: 18px;
      left: 0;
      width: 16px;
      height: 1px;
      background-color: ${theme.colors.secondary4};
      z-index: 5; 
    }
  }
`
export const ButtonDelete = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  margin-left: 18px;
  padding: 0;
  cursor: pointer;
  &:hover, &:focus{
    &::after {
      content: ''; 
      position: absolute;
      top: 18px;
      
      left: 94%;
      width: 16px;
      margin-top: 8px;
      height: 1px;
      background-color: ${theme.colors.secondary3};
      z-index: 6; 
      @media screen and (min-width: 736px) {
        left: 97.5%;
      }
      @media screen and (min-width: 1440px) {
        left: 97%;
      }
    }
  }
`
export const DivListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  &.delete-line::after {
    content: '';
    width: 254px;
    height: 1px;
    background: ${theme.colors.secondary6};
    position: absolute;
    top: 133%; 
    z-index: 2;
    @media screen and (min-width: 768px) {
      width: 646px;
    }
  }
  margin-bottom: 24px;
`;

export const DivTodayAndButton = styled.div`
@media screen and (min-width: 768px) {
  display: flex;
}
`;

export const SpanDate = styled.span`
  margin-left: 12px;
  font-size: 12px;
  color: ${theme.colors.primeryBlack};
`;

export const SpanWater = styled.span`
  font-size: 18px;
  color: ${theme.colors.primeryBlue}
  gap: 12px;
`;

export const SvgPlus = styled.svg`
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    width: 12px;
    height: 12px
  }

`;

export const SpanCount = styled.span`
  margin-left: 12px;
  font-size: 18px;
  color: ${theme.colors.primeryBlue};
`;

export const DivFirstPart = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 1440px) {
  
    
  }
`;

export const DivFlex = styled.div`
@media screen and (min-width: 768px) {
  display: flex;
   align-items: end;
   justify-content: space-between;
}
@media screen and (min-width: 1440px) {
  display: flex;
   align-items: end;
   justify-content: space-between;
    margin-top: 466px;
}
`;

export const DivLeftPart = styled.div`

`

export const Div2 = styled.div`
@media screen and (min-width: 1440px) {
  display: flex;
  justify-content: space-between;
}
`
// export const DivSettings = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   margin-bottom: 16px;
// `

// export const DivLogOut = styled.div`
// display: flex;
//   align-items: center;
//   gap: 8px;
// `

export const PDiv = styled.p`
  color: ${theme.colors.primeryBlue}
`

export const ImgPlus = styled.img`
  fill: ${theme.colors.primeryWhite};
`

export const ImgPlusAdd = styled.img`
  fill: ${theme.colors.primeryBlue};
`

export const ImgGlass = styled.img`
  fill: ${theme.colors.primeryBlue};
`

export const ImgEdit = styled.img`

`

export const ImgDelete = styled.img`

`