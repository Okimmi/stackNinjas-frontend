import { Form, ErrorMessage, Field  } from 'formik';
import styled from 'styled-components';
import { ReactComponent as Bottle } from '../../images/AuthForm/Bottle.svg';
import { ReactComponent as Background } from '../../images/AuthForm/Background.svg';
import { ReactComponent as Bubles720 } from '../../images/AuthForm/Bubles720.svg';
import { ReactComponent as Bubles320 } from '../../images/AuthForm/Bubles320.svg';
import { ReactComponent as Bottle320 } from '../../images/AuthForm/Bottle320.svg';


import { theme } from 'components/GlobalStyle';

export  const BackgroundImg = styled(Background)`
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;

    
`



export  const BackgroundImg720 = styled(Bubles720)`
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;

    
`

export  const BackgroundImg320 = styled(Bubles320)`
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

export  const BottleMobil = styled(Bottle320)`
    z-index: -1;
    
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
    margin-top: 8px;
    display: flex;
    padding: 12px 10px;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    outline: none;
    border-radius: 6px;
    border: 1px solid ${theme.colors.secondary6};
    background: ${theme.colors.primeryWhite};
    &::placeholder{
        color: ${theme.colors.secondary4};
        font-size: 16px;
        font-weight: 400;
        line-height: 1.23; 
    }
    

`

export const Styledlabel = styled.label`
        margin-top: 16px;
        color: ${theme.colors.primeryBlack};
        position: relative;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.33; 
 
    
`

export const FormBtnStyled = styled.button`
    margin-top: 16px;
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
    @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  
  }

`


export const SightUp = styled.p`
    margin-top: 16px;
    color: ${theme.colors.primeryBlue};
    font-size: 16px;
    font-weight: 400;
    line-height: 0.8; 
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover{
      color: ${theme.colors.secondary5};;
    }
`

export const StyledBtn = styled.div`
    position: absolute;
    border: none;
    top: calc(50% + 34px);
    right: 4%;
    cursor: pointer;
    
`
