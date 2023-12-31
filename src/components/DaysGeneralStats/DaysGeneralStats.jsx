import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { Modal, IconContainer, DataText } from './DaysGeneralStats.Styled';
import { IoMdClose } from 'react-icons/io';
import { selectDailyWaterRequirement } from '../../redux/auth/selectors';

export const DaysGeneralStats = ({
  day,
  dailyNorma,
  $dailyProgress,
  entries,
  month,
  onClose,
  modalPosition,
}) => {
  const defaultDailyNorma = useSelector(selectDailyWaterRequirement);
  const modalRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    const handleClick = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [modalRef, onClose]);

  return (
    <Modal $position={day} $modalPosition={modalPosition} ref={modalRef}>
      <IconContainer>
        <DataText>
          {' '}
          {day}, {month}
        </DataText>
        <IoMdClose size={16} onClick={onClose} />
      </IconContainer>
      <p>
        Daily norma:{' '}
        <DataText>
          {dailyNorma ? dailyNorma : `${defaultDailyNorma / 1000} L`}
        </DataText>
      </p>
      <p>
        Fulfillment of the daily norm:{' '}
        <DataText>
          {$dailyProgress ? Number.parseInt($dailyProgress) : 0}%
        </DataText>
      </p>
      <p>
        How many servings of water: <DataText>{entries ? entries : 0}</DataText>
      </p>
    </Modal>
  );
};
