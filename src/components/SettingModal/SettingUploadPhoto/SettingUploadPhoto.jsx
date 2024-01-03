import defaultAvatar from '../setting-modal-icons/default_user_avatar.svg';
import {
  Title,
  MainWrapper,
  UploadInput,
  UploadWrapper,
  Label,
  IconUploadImage,
  IconUser,
} from '../SettingModal.styled';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAvatar } from '../../../redux/auth/selectors';
import { updateAvatar } from '../../../redux/auth/operations';

export const UploadPhoto = () => {
  const input = useRef();
  const dispatch = useDispatch();
  const currentAvatar = useSelector(selectAvatar);

  const handleFileChange = e => {
    dispatch(updateAvatar(e.target.files[0]));
  };

  return (
    <>
      <Title>Your photo</Title>
      <MainWrapper>
        {currentAvatar ? (
          <IconUser src={currentAvatar} alt="user_photo" />
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
      </MainWrapper>
    </>
  );
};
