import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as F from "../styles/StyledFoodBooth";

const FoodBooth = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(`/`);
  };

  return (
    <F.Container>
      <F.Header>
        <F.Back>
          <img
            id="back"
            src={`${process.env.PUBLIC_URL}/images/Backbtn.svg`}
            alt="back"
            onClick={goback}
          />
        </F.Back>
        <F.Title>부스 소개</F.Title>
      </F.Header>
      <F.BoothContainer />
      <F.BoothTag>주점</F.BoothTag>
      <F.BoothTitle>나란 돌쇠의 마님 환영회</F.BoothTitle>
      <F.BoothHost>총학생회 나란</F.BoothHost>
      <F.BoothInfo>📣 부스 운영 정보</F.BoothInfo>
      <F.LocationIcon />
      <F.BoothLocation>운동장</F.BoothLocation>
      <F.ClockIcon />
      <F.BoothDate>12:00 - 22:00</F.BoothDate>
      <F.FoodContainer>
        <span className="menutext">🔴 메뉴</span>

        <div className="menu-item">
          <span className="menuclass">{"<탕 : 돌쇠의 뜨거운 국물>"}</span>
          <span className="menuname">• 순두부열라면</span>
          <span className="price">3,500원</span>
        </div>

        <div className="menu-item">
          <span className="menuclass">
            {"<과일안주 : 마님을 위해 돌쇠가 산에서 따다 온 과일들>"}
          </span>
          <span className="menuname">• 과일꼬치 3개</span>
          <span className="price">4,000원</span>
          <span className="menuname">
            {" : 방울토마토 • 바나나 • 파인애플 • 청포도"}
          </span>
        </div>

        <div className="menu-item">
          <span className="menuclass">{"<볶음안주 : 마님과 지지고 볶고>"}</span>
          <span className="menuname">• 소세지볶음</span>
          <span className="price">3,000원</span>
          <span className="menuname">• 치즈감자전</span>
          <span className="price">3,000원</span>
          <span className="menuname">• 명란 계란말이 3국자 6등분</span>{" "}
          <span className="price">4,000원</span>
        </div>

        <div className="menu-item">
          <span className="menuclass">
            {"<마른안주 : 마님 몰래 내 입에 쏘옥>"}
          </span>
          <span className="menuname">• 버터구이 오징어</span>{" "}
          <span className="price">3,000원</span>
          <span className="menuname">• 쥐포 2장</span>{" "}
          <span className="price">2,000원</span>
        </div>
      </F.FoodContainer>

      <F.FooterTextLogo />
      <F.Footer>
        <img src={`${process.env.PUBLIC_URL}/images/Footer.svg`} alt="footer" />
      </F.Footer>
    </F.Container>
  );
};

export default FoodBooth;
