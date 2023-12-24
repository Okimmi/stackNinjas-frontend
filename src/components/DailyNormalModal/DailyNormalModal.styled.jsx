import styled from "styled-components";

export const Title = styled.h2`
  
`;

export const Formula = styled.p`
  color:  ${props => props.theme.colors.primeryBlack};
`;

export const FormulaText = styled.span`
  color: ${props => props.theme.colors.primeryBlue};
`;

export const BoxTextPostScriptum = styled.div`
  border: 1px solid ${props => props.theme.colors.secondary6};
  border-radius: 10px;
  color: ${props => props.theme.colors.secondary7};
`

export const PSText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  vertical-align: top;
  height: auto;
`;

export const MarkPSText =  styled.span`
  color: ${props => props.theme.colors.primeryBlue};
`;