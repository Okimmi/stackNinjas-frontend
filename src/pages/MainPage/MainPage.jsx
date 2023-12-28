import { WhyDrinkWater } from 'components/WhyDrinkWater/WhyDrinkWater';
import { WaterconsumTracker } from 'components/WaterconsumTracker/WaterconsumTracker';
import {
  BGElementMainPage,
  BGImgMainPage,
  MainPageContainer,
} from './MainPage.styled';

export const MainPage = () => {
  return (
    <MainPageContainer>
      <WaterconsumTracker />
      <WhyDrinkWater />
      <BGImgMainPage />
      <BGElementMainPage />
    </MainPageContainer>
  );
};
