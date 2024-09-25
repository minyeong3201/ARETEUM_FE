import { React, useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as BL from "../styles/StyledBoothLayout";
import boothData from "../data/BoothLayoutData";

const BoothLayout = () => {
  const navigate = useNavigate();

  const goback = () => {
    window.history.back();
  };
  const goDetail = () => {
    navigate(`/keyword`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 이미지 상태 관리
  const [isClicked1001, setIsClicked1001] = useState(false);
  const [isClicked1002, setIsClicked1002] = useState(false);
  // 요소가 화면에 보였는지 감지하는 상태
  const [isVisible, setIsVisible] = useState(false);
  const detailRef = useRef(null); // 요소에 대한 참조 생성
  // 데이터 필터링
  const [currentDay, setCurrentDay] =
    useState("날짜 선택 후, 구역을 선택하세요");
  const [selectedDay, setSelectedDay] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [activeButton, setActiveButton] = useState(""); // 클릭된 버튼 상태 관리

  const handleClick1001 = () => {
    setIsClicked1001(true);
    setIsClicked1002(false);
    setCurrentDay("DAY 1"); // DAY 1 설정
    filterData("1001", selectedDay); // day 버튼에 따른 필터링
    resetAnimation(); // 클릭 시 애니메이션 재실행
  };
  const handleClick1002 = () => {
    setIsClicked1002(true);
    setIsClicked1001(false);
    setCurrentDay("DAY 2"); // DAY 2 설정
    filterData("1002", selectedDay); // day 버튼에 따른 필터링
    resetAnimation(); // 클릭 시 애니메이션 재실행
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setActiveButton(day); // 클릭된 버튼 추적
    const date = isClicked1001 ? "1001" : "1002";
    filterData(date, day); // 클릭한 date와 day에 맞춰 필터링
  };

  const filterData = (date, day) => {
    const filtered = boothData.filter(
      (booth) =>
        booth[`date${date === "1001" ? "1" : "2"}`] === date &&
        booth.num === day
    );
    setFilteredData(filtered);
  };

  // 클릭 시 애니메이션 재실행을 위해 상태 리셋
  const resetAnimation = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true); // 100ms 후 다시 true로 설정해 애니메이션 실행
    }, 100);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // 요소가 보일 때 애니메이션 실행
            observer.unobserve(entry.target); // 한 번 보이면 더 이상 관찰하지 않음
          }
        });
      },
      { threshold: 0.1 } // 요소가 10% 이상 보이면 실행
    );

    if (detailRef.current) {
      observer.observe(detailRef.current);
    }

    return () => {
      if (detailRef.current) {
        observer.unobserve(detailRef.current);
      }
    };
  }, []);

  //부스 이미지 스와이프기능

  const [currentImage, setCurrentImage] = useState(0); // 0번 이미지부터 시작
  const images = [
    `${process.env.PUBLIC_URL}/images/BoothLayout/BoothImg1.svg`,
    `${process.env.PUBLIC_URL}/images/BoothLayout/BoothImg2.svg`,
  ]; // 이미지 배열
  const touchStartX = useRef(0); // 터치 시작 X 좌표
  const touchEndX = useRef(0); // 터치 끝 X 좌표

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX; // 터치 시작 위치 저장
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX; // 터치 중 위치 저장
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // 스와이프 왼쪽(다음 이미지)
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    } else if (touchStartX.current - touchEndX.current < -50) {
      // 스와이프 오른쪽(이전 이미지)
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  return (
    <BL.Container>
      <BL.Header>
        <BL.Back>
          <img
            id="back"
            src={`${process.env.PUBLIC_URL}/images/Backbtn.svg`}
            alt="back"
            onClick={goback}
          />
        </BL.Back>
        <BL.Title>부스배치도</BL.Title>
      </BL.Header>
      <BL.Background>
        <object
          data={`${process.env.PUBLIC_URL}/images/BoothLayout/BLBack.svg`}
          alt="background"
        />
      </BL.Background>
      <BL.Date>
        <img
          id="1001"
          src={`${process.env.PUBLIC_URL}/images/BoothLayout/${
            isClicked1001 ? "Clicked1001.svg" : "unClicked1001.svg"
          }`}
          alt="1001"
          onClick={handleClick1001}
          className={isClicked1001 ? "active" : ""}
        />
        <img
          id="1002"
          src={`${process.env.PUBLIC_URL}/images/BoothLayout/${
            isClicked1002 ? "Clicked1002.svg" : "unClicked1002.svg"
          }`}
          alt="1002"
          onClick={handleClick1002}
          className={isClicked1002 ? "active" : ""}
        />
      </BL.Date>
      <BL.BoothImg
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <BL.BoothImgback>
          <img src={images[currentImage]} alt="boothimg" />
        </BL.BoothImgback>
        스와이프로 부스배치도를 확인하세요!
      </BL.BoothImg>
      <BL.Buttons>
        <BL.DayButton
          id="day1"
          active={activeButton === "1"}
          onClick={() => handleDayClick("1")}
        >
          축운위
        </BL.DayButton>
        <BL.DayButton
          id="day2"
          active={activeButton === "2"}
          onClick={() => handleDayClick("2")}
        >
          한잔하솜
        </BL.DayButton>
        <BL.DayButton
          id="day3"
          active={activeButton === "3"}
          onClick={() => handleDayClick("3")}
        >
          코튼마켓
        </BL.DayButton>
        <BL.DayButton
          id="day4"
          active={activeButton === "4"}
          onClick={() => handleDayClick("4")}
        >
          제휴/푸드
        </BL.DayButton>
        <BL.DayButton
          id="day5"
          active={activeButton === "5"}
          onClick={() => handleDayClick("5")}
        >
          일반
        </BL.DayButton>
      </BL.Buttons>
      <BL.BoothInfo>
        <BL.Box>
          <BL.DAY>{currentDay}</BL.DAY>
          <BL.Booths>
            {filteredData.map((booth, index) => (
              <div id="one" key={index}>
                <div id="wrap">
                  {booth.name !== "(위치 변동 가능성 有)" && (
                    <img
                      src={`${process.env.PUBLIC_URL}/images/BoothLayout/Number.svg`}
                      alt="num"
                    />
                  )}
                  {booth.num !== "3" && booth.num !== "4" && (
                    <div id="num">{index + 1}</div>
                  )}
                </div>
                <div id="name">{booth.name}</div>
                {/* 부스 이름 출력 */}
              </div>
            ))}
          </BL.Booths>
        </BL.Box>
      </BL.BoothInfo>
      <BL.Detail ref={detailRef} isVisible={isVisible}>
        <div id="detail" onClick={goDetail}>
          부스 상세정보
        </div>
      </BL.Detail>

      <BL.Footer>
        <object
          data={`${process.env.PUBLIC_URL}/images/Footer.svg`}
          alt="footer"
        />
      </BL.Footer>
    </BL.Container>
  );
};

export default BoothLayout;
