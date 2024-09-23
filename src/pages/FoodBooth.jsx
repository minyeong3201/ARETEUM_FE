import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as F from "../styles/StyledFoodBooth";
import axios from "axios";

const FoodBooth = () => {
  const navigate = useNavigate();
  const [boothData, setBoothData] = useState(null); // 부스 데이터를 저장할 state

  const goback = () => {
    window.history.back();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/booth-detail/6/`
        );
        setBoothData(response.data); // API에서 받아온 데이터를 상태에 저장
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
      }
    };

    fetchData();
  }, []);

  if (!boothData) {
    return <div>Loading...</div>; // 데이터를 불러오는 중일 때
  }

  const { booth, menu } = boothData; // 데이터 구조에서 booth와 menu를 분리

  const convertNewlinesToBreaks = (text) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
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
      <F.BoothTag>{booth.category}</F.BoothTag>
      <F.BoothTitle>{booth.name}</F.BoothTitle>
      <F.BoothHost>{booth.host}</F.BoothHost>
      <F.BoothInfo>📣 부스 운영 정보</F.BoothInfo>
      <F.LocationIcon />
      <F.BoothLocation>{booth.place}</F.BoothLocation>
      <F.ClockIcon />
      <F.BoothDate>
        {booth.date === "day1" && (
          <>
            10/1 (화) <span className="time">{booth.timeDay1}</span>
          </>
        )}
        {booth.date === "day2" && (
          <>
            10/2 (수) <span className="time">{booth.timeDay2}</span>
          </>
        )}
      </F.BoothDate>

      <F.FoodContainer>
        <span className="menutext">🔴 메뉴</span>
        {menu && menu.length > 0 ? (
          menu.map((group, index) => (
            <div key={index} className="menu-group">
              <span
                className="menuclass"
                dangerouslySetInnerHTML={{
                  __html: `&lt;${group.menuGroup}&gt;`,
                }}
              ></span>{" "}
              {group.menuGroupPrice && (
                <span className="group-price">
                  {group.menuGroupPrice.toLocaleString()}원
                </span>
              )}
              {group.foodList.map((food, idx) => (
                <div key={idx} className="name-price">
                  <span className="menuname">
                    • {convertNewlinesToBreaks(food.name)}
                  </span>
                  {food.price && (
                    <span className="price">
                      {food.price.toLocaleString()}원
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))
        ) : (
          <div>메뉴가 없습니다.</div>
        )}
      </F.FoodContainer>

      <F.FooterTextLogo>
        <object
          data={`${process.env.PUBLIC_URL}/images/FooterTextLogo.svg`}
          alt="footer text logo"
        />
      </F.FooterTextLogo>
      <F.Footer>
        <object
          data={`${process.env.PUBLIC_URL}/images/Footer.svg`}
          alt="footer"
        />
      </F.Footer>
    </F.Container>
  );
};

export default FoodBooth;
