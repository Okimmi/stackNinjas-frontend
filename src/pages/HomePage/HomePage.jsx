import React, { useState } from 'react';
import {
  DivTodayList,
  PToday,
  P,
  Logo,
  LogoDiv,
  Icon,
  Avatar,
  UserName,
  UserDiv,
  HeaderDiv,
  MyDailyNormaDiv,
  MyDailyNorma,
  Litr,
  Edit,
  Div,
  Background,
  Img,
  BackgroundImage,
  Today,
  DivToday,
  SliderInput,
  Per,
  Percents,
  SliderDiv,
  AddWaterButton,
  AddWater,
  DivAddWater,
  DivTodayAndMonth,
} from './HomePage.styled.js';

export const HomePage = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = event => {
    setSliderValue(event.target.value);
  };

  return (
    <>
      <Background>
        <BackgroundImage />
        <HeaderDiv>
          <LogoDiv>
            <Logo src="logo.png" alt="Logo" />
            <P>TRACKER OF WATER</P>
          </LogoDiv>

          <UserDiv>
            <UserName>UserName</UserName>
            <Avatar></Avatar>
            <Icon src="img/Vector.png" alt="Icon"></Icon>
          </UserDiv>
        </HeaderDiv>

        <MyDailyNormaDiv>
          <MyDailyNorma>My daily norma</MyDailyNorma>
          <Div>
            <Litr>1.5 L</Litr>
            <Edit>Edit</Edit>
          </Div>
        </MyDailyNormaDiv>
        <Img src="img/Frame.png" alt="Bottle" />

        <DivToday>
          <Today>Today</Today>
          <SliderDiv>
            <SliderInput
              type="range"
              min="1"
              max="100"
              value={sliderValue}
              onChange={handleSliderChange}
            />
          </SliderDiv>
          <Percents>
            <Per>0%</Per>
            <Per>50%</Per>
            <Per>100%</Per>
          </Percents>
        </DivToday>

        <AddWaterButton type="button">
          <DivAddWater>
            <Img src="img/outline.png" alt="Plus" />
            <AddWater>Add Water</AddWater>
          </DivAddWater>
        </AddWaterButton>

        <DivTodayAndMonth>
          <DivTodayList>
            <PToday>Today</PToday>
          </DivTodayList>
        </DivTodayAndMonth>
      </Background>
    </>
  );
};
