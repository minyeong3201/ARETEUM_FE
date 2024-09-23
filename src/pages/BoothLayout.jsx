import { React, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as BL from "../styles/StyledBoothLayout";

const BoothLayout = () => {
  const navigate = useNavigate();

  const goback = () => {
    window.history.back();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 이미지 상태 관리
  const [isClicked1001, setIsClicked1001] = useState(true);
  const [isClicked1002, setIsClicked1002] = useState(false);

  const handleClick1001 = () => {
    setIsClicked1001(true);
    setIsClicked1002(false);
  };
  const handleClick1002 = () => {
    setIsClicked1002(true);
    setIsClicked1001(false);
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
          <BL.DAY1></BL.DAY1>
          <BL.DAY1></BL.DAY1>
        </BL.Box>
      </BL.BoothInfo>
      <BL.Detail>
        <div id="detail">부스 상세정보</div>
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
