import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { useState } from 'react';
import {
  Container,
  Calendar,
  CalendarList,
  Heder,
  Pagination,
  Title,
  PaginationText,
  PaginationBTN,
} from './MonsStateTable.Styled';

import { DayState } from 'components/DayState/DayState';

const date = new Date();

function subtractMonths(date, months) {
  date.setMonth(date.getMonth() - months);
  return date;
}

export const MonthStatesTable = () => {
  const [today, setToday] = useState(date.getTime());
  const [targetElement, setTargetElement] = useState(null);
  const [position, setPosition] = useState(0);

  const toggleModal = (id, position) => {
    setTargetElement(prev => (prev === id ? 0 : id));
    setPosition(position);
  };

  const closeModal = () => setTargetElement(null);

  const incrementMonth = () => {
    setToday(prev => subtractMonths(new Date(prev), -1).getTime());
  };
  const decrementMonth = () => {
    setToday(prev => subtractMonths(new Date(prev), 1).getTime());
  };

  const curDate = new Date(today);
  const days = new Date(
    curDate.getFullYear(),
    curDate.getMonth() + 1,
    0
  ).getDate();
  const dayList = [];

  while (dayList.length < days) {
    const dayNumber = dayList.length + 1;
    dayList.push(dayNumber);
  }

  function btnDisable() {
    if (date - curDate > 0) {
      return false;
    }
    return true;
  }

  return (
    <Container>
      <Calendar>
        <Heder>
          <Title>Month</Title>
          <Pagination>
            <PaginationBTN type="button" onClick={decrementMonth}>
              <SlArrowLeft size={14} />
            </PaginationBTN>
            <PaginationText>
              {curDate.toLocaleString('en-GB', { month: 'long' })}, &nbsp;
              {curDate.getFullYear()}
            </PaginationText>
            <PaginationBTN
              type="button"
              onClick={incrementMonth}
              disabled={btnDisable()}
            >
              <SlArrowRight size={14} />
            </PaginationBTN>
          </Pagination>
        </Heder>
        <CalendarList>
          {dayList.map(i => (
            <DayState
              key={i}
              day={i}
              targetDay={targetElement}
              modalPosition={position}
              toggleModal={toggleModal}
              closeModal={closeModal}
             
            />
          ))}
        </CalendarList>
      </Calendar>
    </Container>
  );
};
