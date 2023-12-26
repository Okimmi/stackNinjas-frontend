import {
  ButtonTryTracker,
  WaterconsumTrackerStyled,
} from './WaterconsumTracker.styled';
import habitDriveIcon from '../../images/mainPage/habitDriveIcon.svg';

import statisticIcon from '../../images/mainPage/statisticIcon.svg';
import settingIcon from '../../images/mainPage/settingIcon.svg';
import { Link } from 'react-router-dom';

export const WaterconsumTracker = () => {
  return (
    <WaterconsumTrackerStyled>
      <h2>Water consumption tracker</h2>
      <p>Record daily water intake and track</p>
      <h3>Tracker Benefits</h3>
      <ul>
        <li>
          <img src={habitDriveIcon} width={24} height={24} alt="Habit drive" />
          Habit drive
        </li>
        <li>
          <img
            src={statisticIcon}
            width={24}
            height={24}
            alt="View statistics"
          />
          View statistics
        </li>
        <li>
          <img
            src={settingIcon}
            width={24}
            height={24}
            alt="Personal rate setting"
          />
          Personal rate setting
        </li>
      </ul>
      <Link to="/signup">
        <ButtonTryTracker>Try tracker</ButtonTryTracker>
      </Link>
    </WaterconsumTrackerStyled>
  );
};
