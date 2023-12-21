import { Form, ErrorMessage, Field  } from 'formik';
import styled from 'styled-components';
import { ReactComponent as Bottle } from '../../images/Bottle.svg';


export  const BottleStyled = styled(Bottle)`
    z-index: -1;
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 52px;
    left: calc(50% - 275px);
    width: 736px;
    height: 548px;
  }
  @media screen and (min-width: 1440px) {
    width: 916px;
    height: 680px;
  }
`

export const FormHead = styled.h2`
    color: var(--Primery-Color-Black, #2F2F2F);
    font-family: Roboto;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px; /* 123.077% */76
`

export  const StyledForm = styled(Form)`
    display: flex;
    flex-direction:column;
    border-radius: 5px;
    width: 280px;
    gap: 16px;
  @media screen and (min-width: 768px) {
    justify-content: start;
    width: 336px;
  }
`

export const ErMsg = styled(ErrorMessage )`
    font-size: 12px;  
    color: red;
`;

export const StyledField = styled(Field)`
   
    display: flex;
    padding: 12px 10px;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 6px;
    border: 1px solid var(--Secondary-color-5, #D7E3FF);
    background: var(--Primery-Color-White, #FFF);

`

export const Styledlabel = styled.label`
        color: var(--Primery-Color-Black, #2F2F2F);
        position: relative;
        font-family: Roboto;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 133.333% */
    ::placeholder, 
    ::-webkit-input-placeholder{
        color: var(--Secondary-color-4, #9EBBFF);
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 125% */
    }
`

export const FormBtnStyled = styled.button`
    width: 100%;
    display: flex;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background: var(--Primery-Color-Blue, #407BFF);
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    outline: none;
    border: none;
    color: var(--Primery-Color-White, #FFF);
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
`

export const SightUp = styled.p`
    color: var(--Primery-Color-Blue, #407BFF);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
`

export const StyledBtn = styled.div`
    position: absolute;
    border: none;
    top: calc(50% + 4px);
    right: 4%;
    cursor: pointer;
`
