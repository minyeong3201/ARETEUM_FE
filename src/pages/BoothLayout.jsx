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
  const [isClicked1001, setIsClicked1001] = useState(true);
  const [isClicked1002, setIsClicked1002] = useState(false);
  // 요소가 화면에 보였는지 감지하는 상태
  const [isVisible, setIsVisible] = useState(false);
  const detailRef = useRef(null); // 요소에 대한 참조 생성

  const handleClick1001 = () => {
    setIsClicked1001(true);
    setIsClicked1002(false);
    resetAnimation(); // 클릭 시 애니메이션 재실행
  };
  const handleClick1002 = () => {
    setIsClicked1002(true);
    setIsClicked1001(false);
    resetAnimation(); // 클릭 시 애니메이션 재실행
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
        />
        <img
          id="1002"
          src={`${process.env.PUBLIC_URL}/images/BoothLayout/${
            isClicked1002 ? "Clicked1002.svg" : "unClicked1002.svg"
          }`}
          alt="1002"
          onClick={handleClick1002}
        />
      </BL.Date>
      <BL.BoothImg>
        <img
          src={`${process.env.PUBLIC_URL}/images/BoothLayout/BoothImg.svg`}
          alt="boothimg"
        />
      </BL.BoothImg>
      <BL.Buttons>
        <button id="day1">1</button>
        <button id="day1">2</button>
        <button id="day1">3</button>
        <button id="day1">4</button>
        <button id="day1">5</button>
      </BL.Buttons>
      <BL.BoothInfo>
        <BL.Box>
          <BL.DAY1>
            DAY 1
            <BL.Booths>
              <div id="one">
                <div id="wrap">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/BoothLayout/Number.svg`}
                    alt="num"
                  />
                  <div id="num">1</div>
                </div>
                <div id="name">
                  앗! 호신용품
                  <br /> 타이어보다 싸다!!!
                </div>
              </div>
            </BL.Booths>
          </BL.DAY1>
          <BL.DAY2>
            DAY 2
            <BL.Booths>
              <div id="wrap">
                <img
                  src={`${process.env.PUBLIC_URL}/images/BoothLayout/Number.svg`}
                  alt="num"
                />
                <div id="num">1</div>
              </div>
              <div id="name">부스 이름</div>
            </BL.Booths>
          </BL.DAY2>
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
