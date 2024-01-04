import styled from 'styled-components';

import { ReactComponent as IconUpload } from './setting-modal-icons/upload.svg';
import { ReactComponent as Eye } from './setting-modal-icons/blueEye.svg';
import { ReactComponent as Hide } from './setting-modal-icons/icon_show_hide.svg';

export const ModalContent = styled.div`
  @media screen and (max-width: 768px) {
    min-width: 280px;
    max-height: 100vh;
  }

  @media screen and (min-width: 768px) {
    min-width: 704px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 1008px;
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
