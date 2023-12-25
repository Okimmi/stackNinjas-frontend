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
import { ToastContainer } from 'react-toastify';
import { useCallback, useState } from 'react';
import axios from 'axios';

export const UploadPhoto = () => {
  const [img, setImg] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const sendFile = useCallback(async () => {
    try {
      const formData = new FormData();

      formData.append('avatar', img);

      await axios
        .patch('api/auth/avatars', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(res => setAvatar(res.data.path));
    } catch (error) {
      console.log(error.message);
    }
  }, [img]);

  return (
    <>
      <Title>Your photo</Title>

      <MainWrapper>
        {' '}
        {avatar ? (
          <img src={avatar} alt="user_photo" />
        ) : (
          <img src={logo} alt="user_photo" />
        )}
        <UploadInput
          type="file"
          id="file-input"
          onChange={e => setImg(e.target.files[0])}
          accept="image/*, .png,.jpeg,.gif, .web"
        />
        <UploadWrapper>
          <Label htmlFor="file-input">
            <IconUploadImage /> <Span onClick={sendFile}>Upload a photo</Span>
          </Label>
        </UploadWrapper>
        <ToastContainer />
      </MainWrapper>
    </>
  );
};
