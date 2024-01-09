import defaultAvatar from '../../../images/SettingModal/default_user_avatar.svg';
import {
  Title,
  MainWrapper,
  UploadInput,
  UploadWrapper,
  Label,
  IconUploadImage,
  IconUser,
  ProgressBar,
  ProgressBarContainer,
  // UploaLoader,
  // UploadLoaderWrapper,
} from '../SettingModal.styled';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAvatar } from '../../../redux/auth/selectors';
import {
  // setUploadProgress,
  updateAvatar,
} from '../../../redux/auth/operations';

export const UploadPhoto = () => {
  const input = useRef();
  const dispatch = useDispatch();
  const currentAvatar = useSelector(selectAvatar);

  // const [loadingAvatar, setLoadingAvatar] = useState(false);

  const [progress, setProgress] = useState(0);

  const handleFileChange = async e => {
    try {
      setProgress(0);
      await dispatch(updateAvatar(e.target.files[0]));
    } catch (error) {
      console.log(error.message);
    }
    // try {
    //   setLoadingAvatar(true);
    //   await dispatch(updateAvatar(e.target.files[0]));
    // } catch (error) {
    //   console.error(error.message);
    // } finally {
    //   setLoadingAvatar(false);
    // }
  };

  return (
    <>
      <Title>Your photo</Title>
      <MainWrapper>
        {/* {loadingAvatar ? (
          <UploadLoaderWrapper>
            <UploaLoader />
          </UploadLoaderWrapper>
        ) : (
          <IconUser src={currentAvatar || defaultAvatar} alt="user_photo" />
        )} */}

        {/* {progress && ( */}
        <ProgressBarContainer>
          <ProgressBar
            style={{ width: progress + '%' }}
            value={progress}
            max="100"
          />
          <p>{progress}%</p>
        </ProgressBarContainer>
        {/* )} */}

        {!progress && (
          <IconUser src={currentAvatar || defaultAvatar} alt="user_photo" />
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
