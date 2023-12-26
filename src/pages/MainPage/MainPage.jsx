import { WhyDrinkWater } from 'components/WhyDrinkWater/WhyDrinkWater';
import { WaterconsumTracker } from 'components/WaterconsumTracker/WaterconsumTracker';
import { BGImgMainPage, MainPageContainer } from './MainPage.styled';

export const MainPage = () => {
  return (
    <MainPageContainer>
      <WaterconsumTracker />
      <WhyDrinkWater />
      <BGImgMainPage/>
    </MainPageContainer>
  );
};
