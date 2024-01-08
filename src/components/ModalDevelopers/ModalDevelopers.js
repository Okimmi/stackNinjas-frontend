import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import { FaSquareGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { Overlay, SwipeContainer } from './ModalDevelopers.styled';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const ModalDevelopers = ({ onClose }) => {
  useEffect(() => {
    const closeModalEsc = ({ code }) => {
      if (code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', closeModalEsc);
    disableBodyScroll(document.body);

    return () => {
      document.removeEventListener('keydown', closeModalEsc);
      enableBodyScroll(document.body);
    };
  }, [onClose]);

  const handleClose = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClose();
    }
  };
  return (
    <Overlay onClick={handleClose}>
      <SwipeContainer>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: -100,
            depth: 500,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide">
            <div className="team-box box-1">
              <div className="team-name">
                <div className="team-respons">
                  <h3>Roles and Responsibilities</h3>
                  <ul>
                    <li>Project structure</li>
                    <li>Routes</li>
                    <li>Telegram bot</li>
                    <li>Notifications</li>
                  </ul>
                </div>
                <div className="team-content">
                  <h2>Olena Kim</h2>
                  <p>Team-lead</p>
                  <div className="team-icon-wrapper">
                    <a
                      href="https://www.linkedin.com/in/olena-kim"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="icon logo-linkedin" />
                    </a>
                    <a
                      href="https://github.com/Okimmi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareGithub className="icon logo-github" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="team-box box-2">
              <div className="team-name">
                <div className="team-respons">
                  <h3>Roles and Responsibilities</h3>
                  <ul>
                    <li>Header</li>
                    <li>Footer</li>
                    <li>Welcome Page</li>
                    <li>Delete water modal</li>
                    <li>Developers modal</li>
                    <li>Log out modal</li>
                  </ul>
                </div>
                <div className="team-content">
                  <h2>Natalia Yarema</h2>
                  <p>Scrum master</p>
                  <div className="team-icon-wrapper">
                    <a
                      href="https://www.linkedin.com/in/natalia-yarema"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="icon logo-linkedin" />
                    </a>
                    <a
                      href="https://github.com/YaremaNatalia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareGithub className="icon logo-github" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="team-box box-3">
              <div className="team-name">
                <div className="team-respons">
                  <h3>Roles and Responsibilities</h3>
                  <ul>
                    <li>Backend</li>
                  </ul>
                </div>
                <div className="team-content">
                  <h2>Oleksandr Sylych</h2>
                  <p>Backend developer</p>
                  <div className="team-icon-wrapper">
                    <a
                      href="https://www.linkedin.com/in/alexander-silich-b06424271"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="icon logo-linkedin" />
                    </a>
                    <a
                      href="https://github.com/sili41995"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareGithub className="icon logo-github" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="team-box box-4">
              <div className="team-name">
                <div className="team-respons">
                  <h3>Roles and Responsibilities</h3>
                  <ul>
                    <li>User settings modal</li>
                  </ul>
                </div>
                <div className="team-content">
                  <h2>Ivan Malakhovskyi</h2>
                  <p>Frontend developer</p>
                  <div className="team-icon-wrapper">
                    <a
                      href="http://linkedin.com/in/ivan-malakhovskyi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="icon logo-linkedin" />
                    </a>
                    <a
                      href="https://github.com/Ivan-Malakhovskyi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareGithub className="icon logo-github" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="team-box box-5">
              <div className="team-name">
                <div className="team-respons">
                  <h3>Roles and Responsibilities</h3>
                  <ul>
                    <li>Daily norma modal</li>
                    <li>Swagger</li>
                  </ul>
                </div>
                <div className="team-content">
                  <h2>SSerg</h2>
                  <p>Fullstack developer</p>
                  <div className="team-icon-wrapper">
                    <a
                      href="https://www.linkedin.com/in/sserg-s-733503279"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="icon logo-linkedin" />
                    </a>
                    <a
                      href="https://github.com/SSSerg05"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareGithub className="icon logo-github" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="team-box box-6">
              <div className="team-name">
                <div className="team-respons">
                  <h3>Roles and Responsibilities</h3>
                  <ul>
                    <li>Month statistic table</li>
                  </ul>
                </div>
                <div className="team-content">
                  <h2>Valentyna Marchenko</h2>
                  <p>Frontend developer</p>
                  <div className="team-icon-wrapper">
                    <a
                      href="https://www.linkedin.com/in/marchenko-valentyna-5a796a184"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="icon logo-linkedin" />
                    </a>
                    <a
                      href="https://github.com/ValentynaJasochka"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareGithub className="icon logo-github" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="team-box box-7">
              <div className="team-name">
                <div className="team-respons">
                  <h3>Roles and Responsibilities</h3>
                  <ul>
                    <li>Home page</li>
                  </ul>
                </div>
                <div className="team-content">
                  <h2>Alina Mitolap</h2>
                  <p>Frontend developer</p>
                  <div className="team-icon-wrapper">
                    <a
                      href="https://www.linkedin.com/in/alina-mitolap"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="icon logo-linkedin" />
                    </a>
                    <a
                      href="https://github.com/mitolapka"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareGithub className="icon logo-github" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="team-box box-8">
              <div className="team-name">
                <div className="team-respons">
                  <h3>Roles and Responsibilities</h3>
                  <ul>
                    <li>Add water modal</li>
                    <li>Edit the amount of water modal</li>
                    <li>Loader</li>
                  </ul>
                </div>
                <div className="team-content">
                  <h2>Yurii Petrovskyi</h2>
                  <p>Frontend developer</p>
                  <div className="team-icon-wrapper">
                    <a
                      href="https://www.linkedin.com/in/yurii-petrovskyi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="icon logo-linkedin" />
                    </a>
                    <a
                      href="https://github.com/georgiy95"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareGithub className="icon logo-github" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="team-box box-9">
              <div className="team-name">
                <div className="team-respons">
                  <h3>Roles and Responsibilities</h3>
                  <ul>
                    <li>Sign up page</li>
                    <li>Sign in page</li>
                    <li>Forgot password page</li>
                    <li>Google autoritation</li>
                  </ul>
                </div>
                <div className="team-content">
                  <h2>Serhii Khabuzov</h2>
                  <p>Fullstack developer</p>
                  <div className="team-icon-wrapper">
                    <a
                      href="https://www.linkedin.com/in/serhii-khabuzov"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="icon logo-linkedin" />
                    </a>
                    <a
                      href="https://github.com/Arag0rn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareGithub className="icon logo-github" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </SwipeContainer>
    </Overlay>
  );
};

export default ModalDevelopers;
