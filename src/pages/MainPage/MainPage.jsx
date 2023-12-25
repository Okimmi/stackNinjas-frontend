import { WhyDrinkWater } from 'components/WhyDrinkWater/WhyDrinkWater';
import { WaterconsumTracker } from 'components/WaterconsumTracker/WaterconsumTracker';
import { BGImgMainPage, MainPageContainer } from './MainPage.styled';
import { SettingModal } from 'components/Header/SettingModal/SettingModal';

export const MainPage = () => {
  return (
    <MainPageContainer>
      <WaterconsumTracker />
      <WhyDrinkWater />
      <BGImgMainPage />
      <SettingModal />
    </MainPageContainer>
  );
};
