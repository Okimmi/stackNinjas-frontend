import { useEffect, useRef} from 'react';

import { Modal, IconContainer, DataText } from './DaysGeneralStats.Styled';
import { IoMdClose } from 'react-icons/io';

export const DaysGeneralStats = ({ day, dailyNorma, dailyProgress, entries, month, onClose, modalPosition }) => {
 
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
    <Modal position={day} modalPosition={modalPosition} ref={modalRef}>
      <IconContainer>
        <DataText>
          {' '}
          {day}, {month}
        </DataText>
        <IoMdClose size={16} onClick={onClose} />
      </IconContainer>
      <p>
        Daily norma: <DataText>{dailyNorma?dailyNorma:'2L'}</DataText>
      </p>
      <p>
        Fulfillment of the daily norm: <DataText>{dailyProgress?Number.parseInt(dailyProgress):100}%</DataText>
      </p>
      <p>
        How many servings of water: <DataText>{entries?entries:2}</DataText>
      </p>
    </Modal>
  );
};
