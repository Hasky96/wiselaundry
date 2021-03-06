import React, { useEffect, useState } from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { EffectFade,Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay'

import styled from 'styled-components'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.article`
  /* background-color: #6274fd; */
  background:linear-gradient(#8c99fa,#4a57b6) ;
  height: 100vh;
  width: 100vw;
  .title{
    min-width: 200px;
    font-size: 5vw;
    color: white;
    position: fixed;
    left: 50%;
    /* top:300px; */
    top:30vh;
    transform: translate(-50%, 0);
    z-index: 2;
    @media screen and (max-width: 800px) {
      font-size: 40px;
      left: 57%;
    }
  }
  .up{
    /* top:100px; */
    top:10vh;
    transition: 1.5s;
    min-width: 200px;
    font-size: 5vw;
    color: white;
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 2;
    @media screen and (max-width: 800px) {
      font-size: 40px;
      left: 57%;
    }
  }
  img{
    height: 99.7vh;
    width: 100vw;
    filter: brightness(80%); 
    @media screen and (max-width: 1300px) {
      height: 100vh;
      width: 1300px;
      display: block;
      max-width: 100%;
      object-fit: cover;
    }
  }
  #slow{
    animation: fadein 1.5s;
  }
  @keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

  .subTitle {
    text-align: center;

    @media screen and (max-width: 800px) {
      display: flex;
      /* justify-content: center; */
      text-align: left;
      position: relative;
      left: 19%;
    }
  }
`
const Content = styled.div`
  article{
    background-color: #87878751;
    position:fixed;
    padding: 0 2vw;
    width: 35vw;
    /* height: 30vh; */
    left: 30%;
    /* top:350px; */
    top: 47vh;
    color:white;
    text-align: center;
    /* transition: 2s; */
    visibility: hidden;
    @media screen and (max-width: 800px) {
      width: 50vw;
      left: 25%;
      top: 40vh;
    }

    &.show{
    visibility: visible;
    transform: translateY(-10vh);
    transition: 1.5s;
  }
  }
  p{
    margin-top: 30px;
    font-size: 25px;
    transition: 1s;
    @media screen and (max-width: 800px) {
      font-size: 16px;

    }
  }

  @media screen and (max-width: 1300px) {
    left: 30%;
  }
`
const LoginBox = styled.div`
  visibility: hidden;
  &.show{
    visibility: visible;
    transform: translateY(-10vh);
    transition: 1s;
  }
  position: fixed;
  top:85vh;
  display: flex;
  width: 50vw;
  height: 50px;
  justify-content:center;
  left: 25%;
  button{
    position: relative;
    width: 15vw;
    border-radius: 15px 0 15px 0;
    border: none;
    z-index: 1;
    overflow: hidden;
    
    font-size: 1rem;
    &.home{
      background-color: #77b11c;
      background-repeat: no-repeat;
      border-radius: 15px 0 15px 0;
      color: white;
      font-size: 0.8rem;
      &:hover,
      &:focus {
        animation: bubbles 1s forwards ease-out;
        background: $bubbles;
        background-color: #77b11c;
        background-repeat: no-repeat;
      }
    }
  }

/* 버블 버튼 */

@keyframes bubbles {
  100% {
    background-position: $move;
    box-shadow: inset 0 -6.5em 0 #0072c4;
  }
}

.btn {
  display: inline-block;
  text-decoration: none;
  padding: 1em 2em;
}


  @media screen and (max-width: 1300px) {
    left: 5%;
    width: 90%;
    height: 50px;
    button{
      font-weight: 700;
      width: 42vw;  
      left: 1vw;    
    }
  }

  
`


const Start = () => {
  const [showImg,setShowImg] = useState(1)
  const [titleUp,setTitleUp ] = useState(false)
  const [showText,setShowText] = useState(false)
  const [showLogin,setShowLogin] = useState(false)
  const navigate = useNavigate()
  useEffect(()=>{
    setTitleUp(false)
    setShowText(false)
    setShowLogin(false)
    setTimeout(() => {
      setShowImg(2) // 첫번째 사진 먼저띄우기
    }, 1500);
    setTimeout(()=>{
      setShowImg(3) // swiper 시작
    },2500)
    setTimeout(() => {
      setShowImg(4) // swiper 끝내고 마지막 사진 올리기
    }, 7700);
    setTimeout(() => {
      setTitleUp(true) // 글자 올리기
    }, 8500);
    setTimeout(() => {
      setShowText(true)
      setShowLogin(true)
    }, 10000);
  },[])

  return (
    <Wrapper>
      <div className={titleUp ? 'up':'title'} >
        <div>슬기로운</div>
        <div className='subTitle'>세탁</div>
      </div>
      {showImg ===2 && <img id='slow' alt='img' src={img1}/>}
      {showImg ===3 && 
        <Swiper 
          className='my-swiper'
          autoplay={{delay: 500}} 
          speed={1000}
          modules={[Autoplay,EffectFade]} 
          loop={false}
          allowTouchMove ={false}
          effect="fade"
          >
        {[img1, img2,img4, img3].map((i, el) => {
          return <SwiperSlide key={el}>
              <img alt='img' src={i}/>
              </SwiperSlide>;
        })}
        </Swiper>
      } 
      {showImg ===4 && <img alt='img' src={img3}/>}
      
        <Content >
        <article className={showText ?"show":""} >
          <p >슬기로운 세탁이 처음이신가요?</p>
          <p >Start 버튼을 통해 홈페이지를 둘러보시고</p>
          <p >로그인 또는 회원가입을 통해 더 많은</p>
          <p >'슬세'만의 기능을 확인해 보세요.</p>
        </article>
          <LoginBox className={showLogin ?"show":""}>
            {/* <button onClick={()=>{navigate('/signup')}} className='signup'>가입하기</button> */}
            {/* <button onClick={()=>{navigate('/home')}}className='home'><span />Start</button> */}
            <button onClick={()=>{navigate('/home')}}className='btn home'>슬기로운 세탁 Start</button>
            {/* <span><a></a></span> */}
            {/* <a className="btn btn-bubble">슬기로운 세탁 Start</a> */}
            {/* <button className="btn btn-bubble">슬기로운 세탁 Start</button> */}
            
          </LoginBox>
        </Content>
        
    </Wrapper>
  )
}

export default Start