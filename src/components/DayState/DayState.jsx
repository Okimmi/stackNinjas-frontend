// import { useEffect, useState } from 'react';
import { DaysGeneralStats } from 'components/DaysGeneralStats/DaysGeneralStats';
import {
  DateWrapper,
  Day,
  DailyProgress,
  CalendarItem,
} from './DayState.Styled';
// import { useState } from 'react';

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
    const { y: yPosition } = e.target.getBoundingClientRect();
    toggleModal(day, Math.round(yPosition));
  };
 
  return (
    <CalendarItem>
      <DateWrapper onClick={handleModal}>
        <Day> {`${day}`}</Day>
      </DateWrapper>
      <DailyProgress>{dailyProgress?Number.parseInt(dailyProgress):100}%</DailyProgress>
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
