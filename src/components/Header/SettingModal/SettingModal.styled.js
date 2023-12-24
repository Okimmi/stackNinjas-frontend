import styled from 'styled-components';
import { ReactComponent as CloseIcon } from './icons/outline.svg';
import { ReactComponent as IconUpload } from './icons/upload.svg';
import { ReactComponent as Eye } from './icons/blueEye.svg';
import { ReactComponent as Hide } from './icons/icon_show_hide.svg';

export const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.primeryBlack};

  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 100%;
  border-radius: 10px;
  background-color: ${({ theme: { colors } }) => colors.primeryWhite};
  padding: 32px 24px;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (max-width: 768px) {
    max-width: 320px;
    padding: 32px 12px;
    min-height: 852px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1140px) {
    max-width: 1140px;
  }
`;

export const ButtonCloseModal = styled.button`
  position: absolute;
  top: 32px;
  right: 24px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 0;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.2);
  }

  @media screen and (max-width: 767px) {
    right: 12px;
  }
`;

export const Topic = styled.h1`
  color: ${({ theme: { colors } }) => colors.primeryBlack};
  font-family: Roboto;
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
  margin-bottom: 24px;
`;

export const Title = styled.label`
  margin-bottom: 8px;
  font-size: 18px;
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

export const ToggleIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const EyeIcon = styled(Eye)`
  width: 16px;
  height: 16px;
`;

export const HideIcon = styled(Hide)`
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
  font-weight: 500;
  line-height: 1.28;
  cursor: pointer;
`;

export const MainWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  margin-bottom: 24px;
`;

export const UploadWrapper = styled.div`
  display: flex;
  align-self: center;
  margin-left: 8px;
`;

export const Span = styled.span`
  margin-left: 8px;
`;
