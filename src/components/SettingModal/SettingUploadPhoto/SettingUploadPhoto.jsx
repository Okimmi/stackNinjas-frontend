import axios from 'axios';

import logo from '../icons/Ellipse 1.jpg';
import {
  Title,
  MainWrapper,
  UploadInput,
  UploadWrapper,
  Label,
  IconUploadImage,
  UploadBtn,
  IconUser,
} from '../SettingModal.styled';
import { ToastContainer, toast } from 'react-toastify';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAvatar } from '../../../redux/auth/selectors';
import { refreshUser } from '../../../redux/auth/operations';

const BASE_URL = 'https://stackninjas-backend.onrender.com';

export const UploadPhoto = () => {
  const input = useRef();
  const dispatch = useDispatch();
  const current = useSelector(selectAvatar);

  const [img, setImg] = useState();
  const [avatar, setAvatar] = useState(current);

  const sendFile = async () => {
    if (!img) {
      toast.error('Please, choose your avatar');
      return;
    }

    try {
      const formData = new FormData();

      formData.append('avatar', img);

      await axios
        .patch(`${BASE_URL}/api/auth/avatars`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(response => {
          setAvatar(response.data.avatar);
          dispatch(refreshUser());
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Title>Your photo</Title>

      <MainWrapper>
        {' '}
        {avatar ? (
          <IconUser src={avatar} alt="user_photo" />
        ) : (
          <IconUser src={logo} alt="user_photo" />
        )}
        <UploadWrapper>
          <Label>
            <UploadInput
              ref={input}
              type="file"
              id="file-input"
              onChange={e => {
                setImg(e.target.files[0]);
              }}
              accept="image/*, .png,.jpeg,.gif, .web"
            />
            <IconUploadImage />
          </Label>
          <UploadBtn onClick={sendFile}>Upload a photo</UploadBtn>
        </UploadWrapper>
        <ToastContainer />
      </MainWrapper>
    </>
  );
};
