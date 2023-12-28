import styled from 'styled-components';
import { Formik, Form, ErrorMessage, Field } from 'formik';

export const TopicGender = styled.label`
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.111;
`;

export const Password = styled.label`
  margin-bottom: 8px;
  color: ${({ theme: { colors } }) => colors.primeryBlack};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
`;

export const Title = styled.label`
  margin-bottom: 8px;
  color: ${({ theme: { colors } }) => colors.primeryBlack};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.111; /* 111.111% */
`;

export const LabelGender = styled.label`
  color: ${({ theme: { colors } }) => colors.primeryBlack};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
`;

export const GenderWrapper = styled.span`
  margin-right: 24px;
`;

export const Gender = styled.span`
  margin-left: 8px;
`;

export const Base = styled(Formik)``;

export const RadioWrapper = styled.div`
  margin-bottom: 24px;

  @media screen and (min-width: 1140px) {
    margin-bottom: 52px;
  }
`;

export const NameWrapper = styled.div`
  margin-bottom: 24px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1140px) {
    flex-basis: calc((100% - 24px) / 2);
  }
`;

export const Container = styled.div`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  @media screen and (min-width: 768px) {
    width: 392px;
  }
`;

export const FormUser = styled(Form)`
  @media screen and (min-width: 1140px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const LabelForm = styled.label``;

export const LabelsPassword = styled.label`
  position: relative;
`;

export const ErrMessage = styled(ErrorMessage)`
  margin-top: 4px;
  color: ${({ theme: { colors } }) => colors.secondary3};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
`;

export const FieldForm = styled(Field)`
  width: 100%;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${({ theme: { colors } }) => colors.secondary6};
  color: ${({ theme: { colors } }) => colors.primeryBlue};

  @media screen and (max-width: 768px) {
    max-width: 392px;
  }

  @media screen and (min-width: 768px) {
    max-width: 392px;
  }
`;

export const RadioField = styled(Field)``;

export const SaveBtn = styled.button`
  color: ${({ theme: { colors } }) => colors.primeryWhite};
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.333;
  border-radius: 10px;
  background-color: ${({ theme: { colors } }) => colors.primeryBlue};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  &:active {
    background-color: ${({ theme: { colors } }) => colors.primeryBlue};
  }

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    width: 100%;
    max-width: 320px;
    padding: 8px 30px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    min-width: 160px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.333; /* 133.333% */
    padding: 10px 30px;
  }
`;
