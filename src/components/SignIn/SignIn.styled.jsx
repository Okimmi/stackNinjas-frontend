import { Form, ErrorMessage, Field  } from 'formik';
import styled from 'styled-components';
import { ReactComponent as Bottle } from '../../images/Bottle.svg';
import { ReactComponent as Background } from '../../images/Background.svg';
import { theme } from 'components/GlobalStyle';

export  const BackgroundImg = styled(Background)`
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;

    
`

export const SightInContainer = styled.div`
    overflow:hidden;
   @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(10, 121px);



  }
`
export const ForFormContainer = styled.div`
   @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-self: center;

  }
`  

export  const BottleStyled = styled(Bottle)`
    z-index: -1;
    viewBox: 0 0 270 220;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 52px;
    left: calc(50% - 170px);
    width: 736px;
    height: 548px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 107px;
    position:static;
    width: 916px;
    height: 680px;
    grid-column: 1/3;
    grid-row: 1;
  }
`

export const FormHead = styled.h2`
    color: ${theme.colors.primeryBlack};
    font-size: 26px;
    font-weight: 500;
    line-height: 1.2; 

`

export  const StyledForm = styled(Form)`

    display: flex;
    flex-direction:column;
    border-radius: 5px;
    width: 280px;
    gap: 16px;
  @media screen and (min-width: 768px) {
    width: 336px;
  
  }

  @media screen and (min-width: 1440px) {
    justify-content: start;
    width: 384px;
    grid-column:7/9;
    grid-row: 1;
    align-self: center;
    
  }
`

export const ErMsg = styled(ErrorMessage )`
    font-size: 12px;  
    color: ${theme.colors.secondary3};
`;

export const StyledField = styled(Field)`
   
    display: flex;
    padding: 12px 10px;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 6px;
    border: 1px solid ${theme.colors.secondary6};
    background: ${theme.colors.primeryWhite};
    

`

export const Styledlabel = styled.label`
        color: ${theme.colors.primeryBlack};
        position: relative;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.33; 
    ::placeholder, 
    ::-webkit-input-placeholder{
        color: ${theme.colors.secondary4};
        font-size: 16px;
        font-weight: 400;
        line-height: 0.8; 
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
    background: ${theme.colors.primeryBlue};
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    outline: none;
    border: none;
    color:${theme.colors.primeryWhite};
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    cursor: pointer;
`

export const SightUp = styled.p`
    color: ${theme.colors.primeryBlue};
    font-size: 16px;
    font-weight: 400;
    line-height: 0.8; 
    cursor: pointer;
`

export const StyledBtn = styled.div`
    position: absolute;
    border: none;
    top: calc(50% + 4px);
    right: 4%;
    cursor: pointer;
`
