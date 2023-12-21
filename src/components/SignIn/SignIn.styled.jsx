import { Form, ErrorMessage, Field  } from 'formik';
import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`


export  const StyledForm = styled(Form)`
display: grid;
border-radius: 5px;
padding: 15px;
min-width: 280px;
gap: 16px;

`;

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
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
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
`