import styled from 'styled-components';
import { ReactComponent as GlassSvg } from '../../icons/glass_of_water.svg';

export const ModalWrapper = styled.div`
  width: 256px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 580px;
    padding: 32px 24px;
  }
  @media screen and (min-width: 1440px) {
    width: 544px;
  }
`;
export const WaterEditContainer = styled.div`
  width: 254px;
  display: flex;
  align-items: center;
  padding: 8px 24px;
  border-radius: 10px;
  gap: 12px;
  background-color: ${props => props.theme.colors.secondary2};
  margin-bottom: 24px;
`;

export const SvgGlass = styled(GlassSvg)`
  width: 36px;
  height: 36px;
`;

export const EnteredText = styled.p`
  color: ${props => props.theme.colors.primeryBlue};
  font-size: 18px;
  line-height: 1.3;
  margin-right: 4px;
`;

export const TimeValue = styled.p`
  font-size: 12px;
  line-height: 2;
`;

export const FormStyledIn = styled.form`
  display: flex;
  flex-direction: column;
  label {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  input {
    width: 100%;
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
