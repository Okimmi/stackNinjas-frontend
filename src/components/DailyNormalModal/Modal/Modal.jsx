import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import {
  ModalBackdrop,
  ModalContainer,
  CloseBtn,
} from './Modal.styled';
// import IconCloseModal from '../../../images/modal/IconCloseModal';
import iconCloseModal from '../../../images/modal/iconCloseModal.svg'


const Modal = ({ children, closeModal, portalParent=document.body }) => {
 
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };

  }, [closeModal]);


  return createPortal(
    <ModalBackdrop onClick={(e) => closeModal(e)}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        
        <CloseBtn onClick={(e) => closeModal(e)}>
          {/* <IconCloseModal size={24}/> */}
          <img src={iconCloseModal} size={24} alt="Close modal"/>
        </CloseBtn>

        {children}

      </ModalContainer>
    </ModalBackdrop>
    , portalParent);
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.node),
};

export default Modal;
