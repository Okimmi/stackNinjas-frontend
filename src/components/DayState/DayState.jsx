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
  const { day, targetDay, modalPosition, closeModal, toggleModal } = props;
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
      <DailyProgress>100%</DailyProgress>
      {targetDay === day && <DaysGeneralStats  day={day} onClose={closeModal} modalPosition={modalPosition}  />}
    </CalendarItem>
  );
};
