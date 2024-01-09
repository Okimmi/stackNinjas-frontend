import styled from 'styled-components';

import { ReactComponent as IconUpload } from '../../images/SettingModal/upload.svg';
import { ReactComponent as Eye } from '../../images/SettingModal/blueEye.svg';
import { ReactComponent as Hide } from '../../images/SettingModal/icon_show_hide.svg';

export const ModalContent = styled.div`
  @media screen and (max-width: 768px) {
    width: 256px;
    max-height: 100vh;
  }

  @media screen and (min-width: 768px) {
    width: 656px;
  }

  @media screen and (min-width: 1440px) {
    width: 960px;
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

export const ProgressBarContainer = styled.div`
  width: 100%;
  position: relative;
  height: 20px;
  margin-top: 10px;
`;

export const ProgressBar = styled.progress`
  width: 50%;
  height: 50%;

  // background-color: ${({ theme: { colors } }) => colors.primeryBlue};
  border-radius: 4px;
  overflow: hidden;

  &::-webkit-progress-bar {
    background-color: #eee;
    border-radius: 4px;
    transition: width 0.3s ease-in-out;
  }
`;

export const UploadLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
`;

export const UploaLoader = styled.span`
    width: 32px;
    height: 72px;
    display: inline-block;
    left: 5px;
    position: relative;
    border: 2px solid ${({ theme: { colors } }) => colors.primeryWhite};
    box-sizing: border-box;
    animation: animloader 2s linear infinite alternate;
    color: ${({ theme: { colors } }) => colors.primeryBlue};
    border-radius: 0 0 4px 4px;
    transform: perspective(140px) rotateX(-45deg);
  }

  @keyframes animloader {
    0% {
      box-shadow: 0 0 inset;
    }
    100% {
      box-shadow: 0 -70px inset;
    }
  }

`;

export const IconUploadImage = styled(IconUpload)`
  margin-right: 8px;
  width: 16px;
  height: 16px;
`;

export const IconUser = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const ToggleIcon = styled.div`
  position: absolute;
  top: 55%;
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
