import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import profile from './images/profile-image.png';
// import camera from './images/camera-free-icon-font.png';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const Wrapper = styled.div`

  img {
    width: 10vw;
    aspect-ratio: 1/1;
    border-radius: 99vh;
    object-fit: cover;
    /* border: 2px solid #818080; */
    cursor: pointer;
  }

  .ProfileImg {
    width: 10vw;
    border-radius: 100vh;
    object-fit: cover;
    /* -webkit-box-shadow: 0px 0px 4px 2px #818080;
    -moz-box-shadow: 0px 0px 4px 2px #818080;
    box-shadow: 0px 0px 4px 2px #818080; */
    margin-left: 2vh;
    cursor: pointer;
  }

  svg {
    font-size: 2rem;
    color: ${props => props.theme.activeBtnColor};
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {

    .ProfileImg {
      width: 25vw;
      margin-left: 5vw;
    }

    svg {
      font-size: 1.3rem;
    }
}

  input{
    display: none;
  }
  

`

interface IProps {
  file: any
  setFile: React.Dispatch<any>
  userImg: string
  // setNickChecked: React.Dispatch<React.SetStateAction<boolean>>
  setUserChangeBtn: React.Dispatch<React.SetStateAction<boolean>>
}

const ProfileImgBox:React.FC<IProps>= ({file, setFile, userImg, setUserChangeBtn}) => {
  const [fileSrc, setFileSrc] = useState<string>(userImg);
  const encodeMainFileToBasek64 = (fileBlob: any) => {
    const reader: any = new FileReader();
    if (fileBlob) {
      reader.readAsDataURL(fileBlob);
      setUserChangeBtn(true)
    }
    return new Promise(() => {
      reader.onload = () => {
        setFileSrc(reader.result);
        setUserChangeBtn(true)
      };
    });
  };

  

  const handleFileOnChange = (e: React.ChangeEvent) => {
    setFile((e.target as HTMLInputElement).files?.item(0));
    setUserChangeBtn(true)
    if ((e.target as HTMLInputElement).files) {
      encodeMainFileToBasek64((e.target as HTMLInputElement).files?.item(0));
      setUserChangeBtn(true)
    }
  };

  useEffect(() => {
    setFileSrc(userImg)
  },[userImg])


  const imageOnErrorHandler = (
    // ????????? ????????? ??? ?????? ??????
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src =
      profile;
  };
  return (
    <Wrapper>
      <section className='input-box'>
        <label htmlFor="chooseFile">
          <img className='ProfileImg' onError={imageOnErrorHandler} src={fileSrc} alt="????????? ?????????" />
          <PhotoCameraIcon />
        </label>
        <input
          className="file"
          id="chooseFile"
          type="file"
          onChange={handleFileOnChange}/>
      </section>
    </Wrapper>
  )
}

export default ProfileImgBox;