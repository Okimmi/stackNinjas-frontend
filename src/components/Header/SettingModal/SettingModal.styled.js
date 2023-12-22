import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../icons/outline.svg';
import { ReactComponent as IconUpload } from '../icons/upload.svg';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.primeryBlack};
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  border-radius: 10px;
  background-color: ${({ theme: { colors } }) => colors.primeryWhite};

  @media screen and (max-width: 768px) {
    max-width: 320px;
    padding: 32px 12px;
    gap: 24px;
  }
`;

export const ButtonCloseModal = styled.button`
  position: absolute;
  top: 32px;
  right: 12px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 0;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

export const Topic = styled.h1`
  color: ${({ theme: { colors } }) => colors.primeryBlack};
  font-family: Roboto;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.23;
  margin-bottom: 24px;
`;

export const TopicUserPhoto = styled.h2`
  margin-bottom: 8px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.111;
`;

export const IconCloseModal = styled(CloseIcon)`
  width: 24px;
  height: 24px;

  &:hover,
  &:focus {
    fill: ${({ theme: { colors } }) => colors.primeryBlack};
  }
`;

export const IconUploadImage = styled(IconUpload)`
  width: 16px;
  height: 16px;
`;

export const UploadInput = styled.input`
  display: none;
`;

export const Label = styled.label`
  display: inline-flex;
  color: ${({ theme: { colors } }) => colors.primeryBlue};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
`;

export const MainWrapper = styled.div`
  display: flex;
`;

export const UploadWrapper = styled.div`
  display: flex;
  align-self: center;
  margin-left: 8px;
`;

export const Span = styled.span`
  margin-left: 8px;
`;
