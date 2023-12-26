import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
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
import { calendarData, findData, daysInMonth  } from './helpers';
import axios from 'axios';

const date = new Date();

function subtractMonths(date, months) {
  date.setMonth(date.getMonth() - months);
  return date;
}

export const MonthStatesTable = () => {
  const [today, setToday] = useState(() => date.getTime());
  const [monthState, setMonthState] = useState([]);
  const [targetElement, setTargetElement] = useState(null);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    getMonthState({ year: date.getFullYear(), month: date.getMonth() });
  }, []);

  const toggleModal = (id, position) => {
    setTargetElement(prev => (prev === id ? 0 : id));
    setPosition(position);
  };

  const closeModal = () => setTargetElement(null);

  const getMonthState = async ({ month, year }) => {
    try {
      const response = await axios.get(
        `/api/hydration-entries//month-progress?month=${month + 1}&year=${year}`
      );
      setMonthState(response.data);
    } catch (error) {
      toast.error('Oops! Something went wrong! Try reloading the page!');
    }
  };

  const incrementMonth = () => {
    const newDate = subtractMonths(new Date(today), -1);
    getMonthState({ year: newDate.getFullYear(), month: newDate.getMonth() });
    setToday(newDate.getTime());
  };

  const decrementMonth = () => {
    const newDate = subtractMonths(new Date(today), 1);
    getMonthState({ year: newDate.getFullYear(), month: newDate.getMonth() });
    setToday(newDate.getTime());
  };

 
  const currentDate = new Date(today);
 
 
  const btnDisable = () =>  date - currentDate >= 86400000 ? false : true;


  const dayList = calendarData(findData(monthState), daysInMonth(currentDate));

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
              {currentDate.toLocaleString('en-GB', { month: 'long' })}, &nbsp;
              {currentDate.getFullYear()}
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
          {dayList.map(
            ({
              date,
              entriesQuantity,
              dailyWaterRequirement,
              dailyProgress,
            }) => (
              <DayState
                key={date}
                day={date}
                month={currentDate.toLocaleString('en-GB', { month: 'long' })}
                dailyNorma={dailyWaterRequirement}
                dailyProgress={dailyProgress}
                entries={entriesQuantity}
                targetDay={targetElement}
                modalPosition={position}
                toggleModal={toggleModal}
                closeModal={closeModal}
              />
            )
          )}
        </CalendarList>
      </Calendar>
    </Container>
  );
};
