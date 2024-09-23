import { React, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as BL from "../styles/StyledBoothLayout";

const BoothLayout = () => {
  const navigate = useNavigate();

  const goback = () => {
    window.history.back();
  };

  useEffect(() => {
    // 컴포넌트가 마운트되면 상단으로 스크롤
    window.scrollTo(0, 0);
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
      <BL.Wrap>
        <BL.Date>
          <img
            id="1001"
            src={`${process.env.PUBLIC_URL}/images/BoothLayout/Clicked1001.svg`}
            alt="1001"
          />
          <img
            id="1002"
            src={`${process.env.PUBLIC_URL}/images/BoothLayout/unClicked1002.svg`}
            alt="1002"
          />
        </BL.Date>
      </BL.Wrap>
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
