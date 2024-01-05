import { DaysGeneralStats } from 'components/DaysGeneralStats/DaysGeneralStats';
import {
  DateWrapper,
  Day,
  DailyProgress,
  CalendarItem,
} from './DayState.Styled';


export const DayState = props => {
  const {
    day,
    month,
    dailyNorma,
    dailyProgress,
    entries,
    targetDay,
    modalPosition,
    closeModal,
    toggleModal,
  } = props;
  const handleModal = e => {
    e.stopPropagation();
    toggleModal(day, e.target.offsetTop);
  };
  
  return (
    <CalendarItem>
      <DateWrapper onClick={handleModal}  dailyProgress={dailyProgress}>
        <Day> {`${day}`}</Day>
      </DateWrapper>
      <DailyProgress>{dailyProgress?Number.parseInt(dailyProgress):0}%</DailyProgress>
      {targetDay === day && (
        <DaysGeneralStats
          day={day}
          month={month}
          dailyNorma={dailyNorma}
          dailyProgress={dailyProgress}
          entries={entries}
          onClose={closeModal}
          modalPosition={modalPosition}
        />
      )}
    </CalendarItem>
  );
};
