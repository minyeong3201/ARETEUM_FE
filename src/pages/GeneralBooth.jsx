import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as G from "../styles/StyledGeneralBooth";

const GeneralBooth = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(`/`);
  };

  return (
    <G.Container>
      <G.Header>
        <G.Back>
          <img
            id="back"
            src={`${process.env.PUBLIC_URL}/images/Backbtn.svg`}
            alt="back"
            onClick={goback}
          />
        </G.Back>
        <G.Title>부스 소개</G.Title>
      </G.Header>
      <G.BoothContainer />
      <G.BoothTag>체험</G.BoothTag>
      <G.BoothTitle>달 골짜기 타로가게</G.BoothTitle>
      <G.BoothImage>
        <img
          src={`${process.env.PUBLIC_URL}/images/DefaultBoothImage.svg`}
          alt="booth image"
        />
      </G.BoothImage>
      <G.BoothInfo>📣 부스 운영 정보</G.BoothInfo>
      <G.LocationIcon />
      <G.BoothLocation>운동장 구령대 앞</G.BoothLocation>
      <G.ClockIcon />
      <G.BoothDate>10월 1일 (화) 15:00 - 19:00</G.BoothDate>
      <G.BoothIntro>부스 소개</G.BoothIntro>
      <G.BoothIntroContent>
        아무에게도 말하지 못한 고민이나 걱정거리가 있으신가요? 혹은 마음 속에
        있는 두려움을 털어놓고 싶으신가요? 🔮 🌕 달 골짜기에 있는 타로 가게로
        오세요! 🌕 🔮 비밀스러운 타로 가게에서 당신의 이야기를 들어드립니다!
      </G.BoothIntroContent>
      <G.FooterTextLogo />
      <G.Footer>
        <img src={`${process.env.PUBLIC_URL}/images/Footer.svg`} alt="footer" />
      </G.Footer>
    </G.Container>
  );
};

export default GeneralBooth;
