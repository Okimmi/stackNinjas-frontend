import styled from "styled-components";
import { NavLink } from "react-router-dom";

const colorsValid = { 
  error: '#EF5050',       // textError + textHelp   props.theme.colors.secondary3 
  success: '#407BFF',         // textError + textHelp   
  valid: '#407BFF',           // border input
  invalid: '#EF5050',     // border input           props.theme.colors.secondary3
}

export const FieldBox = styled.div.attrs(props => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  $valid: 
    (colorsValid[props.$valid]) ||
    props.color ||
    props.theme.colors.secondary8,
}))`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
    color: ${props => props.theme.colors.primeryBlack};
  background-color: ${props => props.theme.colors.primeryWhite};
  color: ${(props) => props.$valid};
`

export const FieldLabel = styled.label`
  display: block;
  width: 100%;
  color: ${props => props.theme.colors.primeryBlack};
  background-color:  ${props => props.theme.colors.primeryWhite};
`

export const FieldInput = styled.input.attrs(props => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  // $valid: colorsValid[props.$valid] || props.color || 'gray',
  $valid: 
    colorsValid[props.$valid] ||
    props.color ||
    props.theme.colors.secondary8,
}))`
  display: block;
  width: 100%; //calc(100% - 2*4px);
  outline: 1px solid ${(props) => props.$valid};
  background-color:  ${props => props.theme.colors.primeryWhite};;
  color:${props => props.$valid}; 
  border-radius: 4px;
  border: none;
  padding: 12px 10px;
  line-height: 1.25;

  &:hover,
  &:focus-within {
    outline: 1px solid ${props => props.theme.colors.primeryBlue};
    background-color: rgb(232, 240, 254);
    color:${props => props.$valid };
    transition: outline 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`
export const FieldTextAbove = styled.p`
  width: 100%;
  initial-letter: 1.25; // 20/16=1.25
  margin-bottom: 8px;
  color: ${props => props.theme.colors.primeryBlack};
  background-color:  ${props => props.theme.colors.primeryWhite};
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
  font-size: 0;
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
  color: ${props => props.theme.colors.primeryBlack};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.secondary5}; // orange
  }
  &:active {
    color: ${props => props.theme.colors.secondary3}; // red
  }
`;