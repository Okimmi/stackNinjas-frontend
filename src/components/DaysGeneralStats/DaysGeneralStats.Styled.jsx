import styled from 'styled-components';
const getPosition = props => {
  if (
    [1, 2, 3, 4, 11, 12, 13, 14, 21, 22, 23, 24, 31].includes(props.position)
  ) {
    return '0';
  } else {
    return '-100%';
  }
};

export const Modal = styled.div`
  position: absolute;
  top: ${props => (props.modalPosition ? props.modalPosition : 0) -14}px; 
  transform: translate(0, -100%);
  left: 0;
  width: 280px;
  height: 188px;
  color: #2f2f2f;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 4px 0 rgba(64, 123, 255, 0.3);
  padding: 24px 13px 24px 13px;
  z-index: 1200;

  /* Mobile responsive container */
  @media screen and (min-width: 320px) {   
  }
  @media screen and (min-width: 768px) {
    top: 0;
    left: 50%;
    margin-left: 0;
    transform: translate(${getPosition}, -100%);
    width: 292px;
    padding: 24px 16px 24px 16px;
  }
  @media screen and (min-width: 1440px) {
    top: 0;
    left: 50%;
    transform: translateY(0);
    transform: translate(-100%, -100%);
  }
`;

export const IconContainer = styled.div`
  color: #407bff;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 16px;
  font-weight: 400;
`;
export const DataText = styled.span`
  color: #407bff;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;
