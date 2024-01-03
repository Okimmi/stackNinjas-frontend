import { PiTelegramLogoThin } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import { selectUserId } from '../../redux/auth/selectors';
import { Btn, Container, Text, TextClick } from './TelegramBotInvite.styled';
import { theme } from 'components/GlobalStyle';

export const TelegramBotInvite = props => {
  const userId = useSelector(selectUserId);

  return (
    <Container>
      <PiTelegramLogoThin size={40} color={theme.colors.primeryBlue} />
      <Text>
        Do you want to receive notifications and helpful reminders about your
        water intake? We've created a Telegram bot just for you! It'll keep you
        informed about your water consumption progress and remind you to drink
        water every hour.
      </Text>
      <TextClick>Ready to get started?</TextClick>
      <Btn
        href={`https://t.me/water_tracker_by_stackNinjas_bot?start=${userId}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        Open Water Tracker Bot
      </Btn>
    </Container>
  );
};
