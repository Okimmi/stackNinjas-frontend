import styled from 'styled-components';
import { Notify } from 'notiflix';
import { createGlobalStyle } from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as IncrementIcon } from '../../icons/pluss.svg';
import { ReactComponent as DecrementIcon } from '../../icons/minus.svg';

export const ModalWrapper = styled.div`
  width: 256px;

  @media screen and (min-width: 768px) {
    width: 656px;
  }
  @media screen and (min-width: 1440px) {
    width: 544px;
  }
`;
export const StyledIncrementIcon = styled(IncrementIcon)`
  stroke: blue;
`;

export const StyledDecrementIcon = styled(DecrementIcon)`
  stroke: blue;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  h3 {
    color: black;
    font-size: 26px;
    font-weight: 500;
    line-height: 1.23;
  }

  button {
    width: 24px;
    height: 24px;
    border: none;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  margin-bottom: 24px;

  button {
    width: 44px;
    height: 44px;
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 30px;
    border: 1px solid ${props => props.theme.colors.primeryBlue};
    background: ${props => props.theme.colors.primeryWhite};
    box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
    cursor: pointer;
    &:hover,
    &:focus {
      box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
      transition: opacity 0.3s ease;
    }
  }

  span {
    width: 92px;
    height: 36px;
    display: flex;
    padding: 6px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 40px;
    background: ${props => props.theme.colors.secondary6};
    color: ${props => props.theme.colors.primeryBlue};
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }
`;

export const ValueText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 16px;
  color: black;
`;

export const AmountText = styled.p`
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 12px;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  label {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  input {
    width: 120px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    outline: none;
    border-radius: 6px;
    padding: 12px 10px;
    border: 1px solid ${props => props.theme.colors.primeryBlue};
    margin-bottom: 24px;
    appearance: none;
    font-size: 16px;
    appearance: none;
    color: ${props => props.theme.colors.primeryBlue};
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: 0em;
    text-align: left;
    &:hover,
    &:focus {
      background-color: rgb(232, 240, 254);
    }
  }

  label:nth-child(2) {
    color: black;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }

  @media screen and (min-width: 768px) {
    input,
    select {
      width: 100%;
    }
  }
`;

export const BtnSaveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  p {
    color: ${props => props.theme.colors.primeryBlue};
    font-size: 18px;
    font-weight: 700;
    align-items: center;
    line-height: 1.33;
  }

  button {
    width: 100%;
    display: flex;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;
    outline: none;
    gap: 10px;
    border-radius: 10px;
    border: none;
    background: ${props => props.theme.colors.primeryBlue};
    color: ${props => props.theme.colors.primeryWhite};
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    &:hover,
    &:focus {
      box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
      transition: opacity 0.3s ease;
    }
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media screen and (min-width: 768px) {
    gap: 24px;
    flex-direction: row;

    justify-content: flex-end;

    button {
      width: 160px;
    }
  }
`;

Notify.init({
  timeout: 2000,
  warning: {
    background: '#ff9d43',
    timeout: 8000,
    textColor: '#ffffff',
    childClassName: 'notiflix-notify-warning',
    notiflixIconColor: 'rgba(0,0,0,0.2)',
    fontAwesomeClassName: 'fas fa-exclamation-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(238,191,49,0.2)',
  },
});

export const StyledDateWrapper = styled.div`
  position: relative;
`;

export const TimeGlobalStyles = createGlobalStyle`
  .react-datepicker-wrapper {
    position: relative;
     width: 100%;
  }

.react-datepicker__triangle {
    visibility: hidden;
  }

.react-datepicker.react-datepicker--time-only {
    position: absolute;
    font-size: 12px;
    left: 50%;
    top: 50%;
    transform: translate(-1%, -10%);
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.colors.secondary6};
    border-radius: 10px;
    border:1px solid ${props => props.theme.colors.secondary4};
    color: ${props => props.theme.colors.primeryBlue};
  }

.react-datepicker__header.react-datepicker__header--time.react-datepicker__header--time--only{
  background-color: ${props => props.theme.colors.primeryBlue};
  color: ${props => props.theme.colors.primeryWhite};
}
.react-datepicker__header .react-datepicker-time__header{
  color: ${props => props.theme.colors.primeryWhite};
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list::-webkit-scrollbar {
  width: 12px;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list::-webkit-scrollbar-track {
  background-color: ${props => props.theme.colors.secondary6};
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list::-webkit-scrollbar-thumb {
  background-color: ${props => props.theme.colors.primeryWhite};
  border-radius: 6px;
    background: ${props => props.theme.colors.primeryWhite};
    border: solid 1px ${props => props.theme.colors.primeryBlue};
    height: 20px;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected{
  background-color: ${props => props.theme.colors.primeryBlue}; !important;
    color: ${props => props.theme.colors.primeryWhite};
    font-weight: bold;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover{

      border-left: 2px solid ${props => props.theme.colors.secondary5};
      border-right: 2px solid ${props => props.theme.colors.secondary5};
      border-top: 2px solid ${props => props.theme.colors.secondary5};
      border-bottom: 2px solid ${props => props.theme.colors.secondary5};
    
}
.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item{

}
  `;
