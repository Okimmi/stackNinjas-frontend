import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CalendarList,
  Heder,
  Pagination,
  Title,
  PaginationText,
  PaginationBTN,
  PaginationBtnRight,
} from './MonsStateTable.Styled';
import {
  selectEntriesMonth,
  selectEntiesToday,
} from '../../redux/hydrationEntries/selectors';
import { getMonthProgressThunk } from '../../redux/hydrationEntries/operations';
import { DayState } from 'components/DayState/DayState';
import { calendarData, findData, daysInMonth } from './helpers';
import { ReactComponent as BtnLeft } from '../../images/month/BtnLeft.svg';

const date = new Date();

function subtractMonths(date, months) {
  date.setMonth(date.getMonth() - months);
  return date;
}
export const MonthStatesTable = () => {
  const [today, setToday] = useState(() => date.getTime());
  const [targetElement, setTargetElement] = useState(null);
  const [position, setPosition] = useState(0);
  const dispatch = useDispatch();
  const monthState = useSelector(selectEntriesMonth);
  const dayState = useSelector(selectEntiesToday);

  useEffect(() => {
    dispatch(
      getMonthProgressThunk({
        year: date.getFullYear(),
        month: date.getMonth() + 1,
      })
    );
  }, [dispatch, dayState]);

  const toggleModal = (id, position) => {
    setTargetElement(prev => (prev === id ? 0 : id));
    setPosition(position);
  };

  const closeModal = () => setTargetElement(null);

  const incrementMonth = () => {
    const newDate = subtractMonths(new Date(today), -1);
    dispatch(
      getMonthProgressThunk({
        year: newDate.getFullYear(),
        month: newDate.getMonth() + 1,
      })
    );
    setToday(newDate.getTime());
  };

  const decrementMonth = () => {
    const newDate = subtractMonths(new Date(today), 1);
    dispatch(
      getMonthProgressThunk({
        year: newDate.getFullYear(),
        month: newDate.getMonth() + 1,
      })
    );
    setToday(newDate.getTime());
  };

  const currentDate = new Date(today);

  const isBtnDisable = () => (date - currentDate >= 86400000 ? false : true);

  const dayList = calendarData(findData(monthState), daysInMonth(currentDate));

  return (
    <>
      <Heder>
        <Title>Month</Title>
        <Pagination>
          <PaginationBTN type="button" onClick={decrementMonth}>
            <BtnLeft size={14} />
          </PaginationBTN>
          <PaginationText>
            {currentDate.toLocaleString('en-GB', { month: 'long' })}, &nbsp;
            {currentDate.getFullYear()}
          </PaginationText>
          <PaginationBTN
            type="button"
            onClick={incrementMonth}
            disabled={isBtnDisable()}
          >
            <PaginationBtnRight disabled={isBtnDisable()} size={14} />
          </PaginationBTN>
        </Pagination>
      </Heder>
      <CalendarList>
        {dayList.map(
          ({ date, entriesQuantity, dailyWaterRequirement, dailyProgress }) => (
            <li key={date}>
              <DayState
                key={date}
                day={date}
                month={currentDate.toLocaleString('en-GB', { month: 'long' })}
                dailyNorma={dailyWaterRequirement}
                $dailyProgress={dailyProgress}
                entries={entriesQuantity}
                targetDay={targetElement}
                modalPosition={position}
                toggleModal={toggleModal}
                closeModal={closeModal}
              />
            </li>
          )
        )}
      </CalendarList>
    </>
  );
};
