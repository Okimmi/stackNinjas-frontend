import styled from 'styled-components';
import {theme} from '../../components/GlobalStyle.js'

export const P = styled.h6`
    color: ${theme.colors.primeryBlue};
`;
export const Logo = styled.img`
    width: 40px;
    margin-right: 4px;
`;
export const LogoDiv = styled.div`
    width: 102px;
    display: flex;
    align-items: center;
`;
export const Icon = styled.img`
    width: 16px;
`
export const Avatar = styled.div`
    border-radius: 50%;
    width: 28px;
    height: 28px;
    background-color: grey;
    margin-right: 4px;
    margin-left: 8px
`
export const UserName = styled.p`
    color: ${theme.colors.primeryBlack};
    width: 66px;
    height: 20px;
    font-size: 14px
`
export const UserDiv = styled.div`
    width: 122px;
    height: 28px;
    display: flex;
    align-items: center;
`;
export const HeaderDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
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
`;
export const Edit = styled.p`
    font-size: 16px;
    height: 20px;
    margin-left: 16px;
    color: #8BAEFF;
`;
export const Div = styled.div`
display: flex;
align-items: end;
`;
export const Img = styled.img`

`
export const Background = styled.div`

position: relative;
`
export const BackgroundImage = styled.div`
  background-image: url('img/Frame_18.png'); /* Replace with your actual image path */
  background-size: cover;
  position: absolute;
  top: 108px; /* Adjust the margin-top value as needed */
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  height: 100%
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
        top: 100%; 
        transform: translateY(-50%); 
        left: 265px;
        z-index: -1;
      }
`
export const DivToday = styled.div`
    margin-top: 16px;
    
`

export const SliderInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 5px;
  background: ${theme.colors.secondary6};
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
  

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
    top: 100%; /* Зсув на половину висоти відносно повзунка */
    transform: translateY(-50%); 

    left: 10px;
    z-index: -1;
  }
  &::before {
    content: '';
    width: 1px;
    height: 8px;
    background: ${theme.colors.secondary6};
    position: absolute;
    top: 100%; 
    transform: translateY(-50%); 
    left: 132px;
    z-index: -1;
  }
  &::before {
    content: '';
    width: 1px;
    height: 8px;
    background: ${theme.colors.secondary6};
    position: absolute;
    top: 100%; 
    transform: translateY(-50%); 
    left: 132px;
    z-index: -1;
  }
`
export const SliderDiv = styled.div`
padding-left: 10px;
    padding-right: 14px`

export const Per = styled.p`
font-size: 12px;
color: ${theme.colors.primeryBlue};
z-index: 2
`

export const Percents = styled.div`
display: flex;
justify-content: space-between;
margin-top: 16px
z-index: 1;
position: absolute;
top: 101%; 
width: 100%;
`

export const AddWaterButton = styled.button`
    margin-top: 16px;
    width: 280px;
    height: 36px;
    z-index: 1;
position: absolute;
top: 105%; 
  background-color: ${theme.colors.primeryBlue};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 0
`

export const AddWater = styled.p`
  font-size: 16px;
  width: 94px;
  color: ${theme.colors.primeryWhite};
  margin-left: 10px;
  cursor: pointer;
`
export const DivAddWater = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const DivTodayAndMonth = styled.div`
  background-color: ${theme.colors.secondary2};
  position: absolute;
  top: 117%;
  height: 100%;
  width: 100%;
  margin-top: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 24px 8px 24px 8px;
`

export const DivTodayList = styled.div`
  max-height: 212px;
  width: 100%;
  overflow-y: auto;
  
`

export const PToday = styled.p`
  font-size: 24px;
  margin-bottom: 16px;
  color: ${theme.colors.primeryBlack};
`
export const ButtonAddWater = styled.button`
  font-size: 16px;
  color: ${theme.colors.primeryBlue};
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-align: center;
`

export const ButtonEdit = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  margin-left: 38px;
`
export const ButtonDelete = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  margin-left: 18px;
  
`
export const DivListItem = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  &.delete-line::after {
    content: '';
    width: 254px;
    height: 1px;
    background: ${theme.colors.secondary6};
    position: absolute;
    top: 145%; 
    z-index: 2;
  }
  margin-bottom: 24px;
`
export const SpanDate = styled.span`
  margin-left: 12px;
  font-size: 12px;
  color: ${theme.colors.primeryBlack};
`
export const SpanWater = styled.span`
  font-size: 18px;
  color: ${theme.colors.primeryBlue}
  gap: 12px;
`
export const SvgPlus = styled.svg`
  margin-right: 8px;
`
export const SpanCount = styled.span`
  margin-left: 12px;
  font-size: 18px;
  color: ${theme.colors.primeryBlue};
`

