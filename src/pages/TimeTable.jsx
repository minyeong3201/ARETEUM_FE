import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as TT from "../styles/StyledTimeTable";

const TimeTable = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(`/`);
  };

  // 이미지 상태 관리
  const [isClicked1001, setIsClicked1001] = useState(true);
  const [isClicked1002, setIsClicked1002] = useState(false);
  // 배경 이미지 상태 관리
  const [backgroundImage, setBackgroundImage] = useState(
    `${process.env.PUBLIC_URL}/images/TimeTable/TTBack.svg`
  );
  // 애니메이션 트리거 상태 관리
  const [animateBooths, setAnimateBooths] = useState(false);
  const [showBooths, setShowBooths] = useState(true); // 부스 보여주기 상태

  // 날짜 상태 관리
  const [activeDate, setActiveDate] = useState("1001");

  // Boothlist의 top 값을 관리하기 위한 상태
  const [boothTop, setBoothTop] = useState("370px");
  // Center height 상태 관리
  const [centerHeight, setCenterHeight] = useState("370px");
  // Footer padding-top과 SomSom top 상태 관리
  const [footerPaddingTop, setFooterPaddingTop] = useState("30px");
  const [somSomTop, setSomSomTop] = useState("550px");

  // 부스를 숨긴 뒤 일정 시간 후 다시 나타내는 함수
  const triggerAnimation = () => {
    setShowBooths(false); // 부스 먼저 숨기기
    setAnimateBooths(false);
    setTimeout(() => {
      setShowBooths(true); // 부스 다시 나타내기
      setAnimateBooths(true); // 애니메이션 트리거
    }, 200); // 부스를 숨긴 뒤에 다시 나타나게 200ms 후 설정
  };

  // 이미지 클릭 핸들러
  const handleClick1001 = () => {
    setActiveDate("1001");
    setIsClicked1001(true);
    setIsClicked1002(false);
    setBoothTop("370px");
    setBackgroundImage(`${process.env.PUBLIC_URL}/images/TimeTable/TTBack.svg`);
    setCenterHeight("370px");
    setFooterPaddingTop("30px");
    setSomSomTop("550px");
    triggerAnimation(); // 애니메이션 트리거
  };

  const handleClick1002 = () => {
    setActiveDate("1002");
    setIsClicked1001(false);
    setIsClicked1002(true);
    setBoothTop("409px");
    setBackgroundImage(
      `${process.env.PUBLIC_URL}/images/TimeTable/TT1002Back.svg`
    );
    setCenterHeight("420px");
    setFooterPaddingTop("140px");
    setSomSomTop("600px");
    triggerAnimation(); // 애니메이션 트리거
  };

  // 부스 데이터
  const boothData = [
    {
      name: "<달 골짜기 타로 가게>",
      time: "15:00-19:00",
      info: "(사전 예약제)",
      type: "부스",
      date: "1001",
    },
    {
      name: "주점 부스 운영",
      time: "16:00-22:00",
      info: "(일부 주점 12시부터 운영)",
      type: "부스",
      date: "1001",
    },
    {
      name: "버스킹 <솜솜어게인>",
      time: "19:00-21:00",
      info: "",
      type: "공연",
      date: "1001",
    },
    {
      name: "<달 골짜기 타로 가게>",
      time: "15:00-19:00",
      info: "(사전 예약제)",
      type: "부스",
      date: "1002",
    },
    {
      name: "주점 부스 운영",
      time: "16:00-22:00",
      info: "(일부 주점 12시부터 운영)",
      type: "부스",
      date: "1002",
    },
    {
      name: "동아리 공연",
      time: "19:00-21:00",
      info: "",
      type: "공연",
      date: "1002",
    },
    {
      name: "연예인 공연",
      time: "19:00-21:00",
      info: "",
      type: "공연",
      date: "1002",
    },
  ];

  // 현재 선택된 날짜에 맞는 부스 필터링
  const filteredBooths = boothData.filter((booth) => booth.date === activeDate);

  return (
    <TT.Container>
      <TT.Header>
        <TT.Back>
          <img
            id="back"
            src={`${process.env.PUBLIC_URL}/images/Backbtn.svg`}
            alt="back"
            onClick={goback}
          />
        </TT.Back>
        <TT.Title>타임테이블</TT.Title>
      </TT.Header>
      <TT.Background>
        <object data={backgroundImage} alt="background" />
      </TT.Background>
      <TT.Wrap>
        <TT.Date>
          <img
            id="1001"
            src={`${process.env.PUBLIC_URL}/images/TimeTable/${
              isClicked1001 ? "Clicked1001.svg" : "unClicked1001.svg"
            }`}
            alt="1001"
            onClick={handleClick1001}
            className={isClicked1001 ? "active" : ""}
          />
          <img
            id="1002"
            src={`${process.env.PUBLIC_URL}/images/TimeTable/${
              isClicked1002 ? "Clicked1002.svg" : "unClicked1002.svg"
            }`}
            alt="1002"
            onClick={handleClick1002}
            className={isClicked1002 ? "active" : ""}
          />
        </TT.Date>
        <TT.Table>
          <TT.Menu>
            <div id="title">부스</div>
            <div id="line1"></div>
          </TT.Menu>
          <TT.Center style={{ height: centerHeight }}></TT.Center>
          <TT.Menu>
            <div id="title">공연</div>
            <div id="line2"></div>
          </TT.Menu>

          {showBooths && (
            <TT.Boothlist style={{ top: boothTop }}>
              {filteredBooths.map((booth, index) => (
                <TT.Booth
                  key={index}
                  type={booth.type}
                  className={animateBooths ? "animate" : ""}
                  delay={`${index * 0.5}s`}
                >
                  <div id="wrap">
                    <div id="top" type={booth.type}>
                      {booth.type === "부스" ? (
                        <>
                          <p id="time">{booth.time}</p>
                          <img
                            id="arrow"
                            type={booth.type}
                            src={`${process.env.PUBLIC_URL}/images/TimeTable/${
                              booth.type === "부스"
                                ? "boothArrow.svg"
                                : "performanceArrow.svg"
                            }`}
                            alt={booth.name}
                          />
                        </>
                      ) : (
                        <>
                          <img
                            id="arrow"
                            type={booth.type}
                            src={`${process.env.PUBLIC_URL}/images/TimeTable/${
                              booth.type === "부스"
                                ? "boothArrow.svg"
                                : "performanceArrow.svg"
                            }`}
                            alt={booth.name}
                          />
                          <p id="time">{booth.time}</p>
                        </>
                      )}
                    </div>
                    <div id="bottom" type={booth.type}>
                      <p id="name">{booth.name}</p>
                      <p id="info">{booth.info}</p>
                    </div>
                  </div>
                </TT.Booth>
              ))}
            </TT.Boothlist>
          )}
        </TT.Table>
        <TT.SomSom style={{ top: somSomTop }}>
          <object
            id="somsom"
            data={`${process.env.PUBLIC_URL}/images/TimeTable/SomSom.svg`}
            alt="somsom"
          />
        </TT.SomSom>
        <TT.TextBox>
          <p id="title">12:00-22:00 상시 운영 부스</p>
          <p id="booth">
            놀러와요 도담이네(~22시)
            <br /> 오늘 밤은 여기 ‘로타’ / 불꽃피움
            <br />
            나란 돌쇠의 마님 환영회 / 화학과 주점
            <br />
            밤하늘을 쏘다 / 국경 없는 바(BAR)
            <br />
            헤어지자고? 링크 주점 이제 시작인데?
          </p>
        </TT.TextBox>
      </TT.Wrap>

      <TT.Footer style={{ paddingTop: footerPaddingTop }}>
        <object
          data={`${process.env.PUBLIC_URL}/images/Footer.svg`}
          alt="footer"
        />
      </TT.Footer>
    </TT.Container>
  );
};
export default TimeTable;
