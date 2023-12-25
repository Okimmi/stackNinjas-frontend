import logo from '../icons/Ellipse 1.jpg';
import {
  Title,
  MainWrapper,
  UploadInput,
  UploadWrapper,
  Label,
  IconUploadImage,
  UploadBtn,
} from '../SettingModal.styled';
import { ToastContainer, toast } from 'react-toastify';
import { useCallback, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://stackninjas-backend.onrender.com/';

export const UploadPhoto = () => {
  const [img, setImg] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const sendFile = useCallback(async () => {
    if (!img) {
      toast.error('Please choose your avatar');
      return;
    }

    try {
      const formData = new FormData();

      formData.append('avatar', img);

      await axios
        .patch(`${BASE_URL}api/auth/avatars`, formData, {
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
        <UploadWrapper>
          {/* <input type="file" onChange={e => e.target.files[0]} />

          <button type="button" onClick={sendFile}>
            Upload{' '}
          </button> */}

          <Label htmlFor="file-input">
            <UploadInput
              type="file"
              id="file-input"
              onChange={e => setImg(e.target.files[0])}
              accept="image/*, .png,.jpeg,.gif, .web"
            />
            <IconUploadImage />{' '}
          </Label>
          <UploadBtn onClick={sendFile}>Upload a photo</UploadBtn>
        </UploadWrapper>
        <ToastContainer />
      </MainWrapper>
    </>
  );
};
