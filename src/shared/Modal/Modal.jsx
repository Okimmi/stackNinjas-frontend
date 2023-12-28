import { useEffect } from 'react';
import { createPortal } from 'react-dom';


// import PropTypes from 'prop-types';

import style from './modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ close, children, title }) => {
  useEffect(() => {
    const closeModalEsc = ({ code }) => {
      if (code === 'Escape') {
        close();
      }
    };
    document.addEventListener('keydown', closeModalEsc);

    return () => document.removeEventListener('keydown', closeModalEsc);
  }, [close]);

  const closeModal = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      close();
    }
  };

  return createPortal(
    <div className={style.Overlay} onClick={closeModal}>
      <div className={style.Modal}>
        <h2 className={style.title} >{title}</h2>
        <button className={style.CloseButton} onClick={close}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 18L18 6M6 6L18 18"
            stroke="#407BFF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

// Modal.propTypes = {
//   children: PropTypes.element.isRequired,
//   close: PropTypes.func.isRequired,
// };
