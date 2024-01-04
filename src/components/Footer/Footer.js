import { useState } from 'react';
import heart from './footer-heart.svg';
import ModalDevelopers from 'components/ModalDevelopers/ModalDevelopers';
import { FooterStyled, FooterWrap, IconHeart } from './Footer.styled';

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <FooterStyled>
        <FooterWrap>
          <div className="content-wrap">
            © 2024 | Developed with
            <IconHeart src={heart} alt="Love" />
          </div>
          <div className="content-wrap">
            by
            <span className="footer-developers" onClick={openModal}>
              GoIT Students
            </span>
          </div>
        </FooterWrap>
      </FooterStyled>
      {isModalOpen && <ModalDevelopers onClose={closeModal} />}
    </>
  );
};
