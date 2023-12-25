import styled from "styled-components";
import { NavLink } from "react-router-dom";

const colorsValid = { 
  error: 'red',       // textError + textHelp
  success: 'green',   // textError + textHelp
  valid: 'green',     // border input
  invalid: 'red',     // border input
}

export const FieldBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* position: relative; */
  color: ${props => props.theme.colors.primeryBlack};
  background-color: ${props => props.theme.colors.primeryWhite};

  /* margin-bottom: 1rem;
  margin-top: 1rem; */

  color: ${(props) => 
    props.valid ? colorsValid[props.valid] : 'gray'
  }; 
`

export const FieldLabel = styled.label`
  display: block;
  width: 100%;
  color: ${props => props.theme.colors.primeryBlack};
  background-color:  ${props => props.theme.colors.primeryWhite};
`

export const FieldInput = styled.input`
  display: block;
  width: calc(100% - 2*4px);
  outline: 1px solid ${(props) =>
    colorsValid[props.valid] ?? 'rgba(33, 33, 33, 0.2)'}; 
  background-color:  ${props => props.theme.colors.primeryWhite};;
  color: ${props => props.theme.colors.primeryBlue};
  border-radius: 4px;
  border: none;
  /* margin-top: 4px; */
  padding: 12px 10px;


  &:hover,
  &:focus-within {
    outline: 1px solid blue;
    background-color: rgb(232, 240, 254);
    color:  ${props => props.theme.colors.primeryBlack};;
    transition: outline 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`
export const FieldTextAbove = styled.p`
  width: 100%;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.primeryBlack};
  background-color:  ${props => props.theme.colors.primeryWhite};;
` 

export const FieldPosition = styled.span`
  position: relative;
  margin-top: 4px;
`
export const FieldFeedback = styled.span`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  font-size: 0.875rem;
`
export const FieldHelpText = styled.div`
  padding-left: 4px;
  padding-right: 4px;
  font-size: 0.75rem;
`

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;

  padding: 0;
  text-decoration: none;
  
  font-weight: 500;
  border-radius: 4px;
  border: none;
  color:  #1976d2;;

  &:hover,
  &:focus {
    color: orangered;
  }
  &:active {
    color: red;
  }
`;