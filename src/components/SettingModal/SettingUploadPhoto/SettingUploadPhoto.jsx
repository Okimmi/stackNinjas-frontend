import logo from '../icons/Ellipse 1.jpg';
import {
  Title,
  MainWrapper,
  UploadInput,
  UploadWrapper,
  Label,
  IconUploadImage,
  Span,
} from '../SettingModal.styled';

export const UploadPhoto = () => {
  return (
    <>
      <Title>Your photo</Title>

      <MainWrapper>
        {' '}
        <img src={logo} alt="user_photo" />
        <UploadInput type="file" id="file-input" multiple />
        <UploadWrapper>
          <Label htmlFor="file-input">
            <IconUploadImage /> <Span>Upload a photo</Span>
          </Label>
        </UploadWrapper>
      </MainWrapper>
    </>
  );
};
