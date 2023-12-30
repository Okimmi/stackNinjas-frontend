import axios from 'axios';

import defaultAvatar from '../icons/default_user_avatar.svg';
import {
  Title,
  MainWrapper,
  UploadInput,
  UploadWrapper,
  Label,
  IconUploadImage,
  IconUser,
} from '../SettingModal.styled';
import { ToastContainer, toast } from 'react-toastify';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAvatar } from '../../../redux/auth/selectors';
import { refreshUser } from '../../../redux/auth/operations';

export const BASE_URL = 'https://stackninjas-backend.onrender.com';

export const UploadPhoto = () => {
  const input = useRef();
  const dispatch = useDispatch();
  const current = useSelector(selectAvatar);

  const [img, setImg] = useState(null);
  const [avatar, setAvatar] = useState(current);

  const sendFile = async () => {
    if (!img) {
      toast.error('Please, choose your avatar');
      return;
    }

    try {
      const formData = new FormData();

      formData.append('avatar', img);

      const { data } = await axios.patch(
        `${BASE_URL}/api/auth/avatars`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      setAvatar(data.avatar);
      dispatch(refreshUser());
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleFileChange = e => {
    setImg(e.target.files[0]);
    sendFile();
  };

  return (
    <>
      <Title>Your photo</Title>

      <MainWrapper>
        {' '}
        {avatar ? (
          <IconUser src={avatar} alt="user_photo" />
        ) : (
          <IconUser src={defaultAvatar} alt="user_default_photo" />
        )}
        <UploadWrapper>
          <Label>
            <IconUploadImage />
            <UploadInput
              ref={input}
              type="file"
              id="file-input"
              onChange={handleFileChange}
              accept="image/*, .png, .jpeg, .gif, .web"
            />
            Upload a photo
          </Label>
        </UploadWrapper>
        <ToastContainer />
      </MainWrapper>
    </>
  );
};
