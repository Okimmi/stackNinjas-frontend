import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import {
  ModalBackdrop,
  ModalContainer,
  CloseBtn,
  IconCloseModal,
} from './Modal.styled';

const Modal = ({ children, closeModal, portalParent=document.body, ...props }) => {

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    disableBodyScroll(portalParent);

    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      enableBodyScroll(portalParent);
    };

  }, [closeModal, portalParent]);


  return createPortal(
    <ModalBackdrop onClick={(e) => closeModal(e)}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        
        <CloseBtn onClick={(e) => closeModal(e)}>
          <IconCloseModal size={24}/>
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
