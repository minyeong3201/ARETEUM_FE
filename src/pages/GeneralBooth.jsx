import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as G from "../styles/StyledGeneralBooth";
import axios from "axios";
import { useEffect, useState } from "react";

const GeneralBooth = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState([]);

  const goback = () => {
    navigate(`/`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/booth-detail/9/`
        );
        setContent([response.data]); // 데이터 설정
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
      }
    };

    fetchData();
  }, []);

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
      {content.map((e) => (
        <G.BoothBox key={e.id}>
          <G.BoothContainer />
          <G.BoothTag>{e.category}</G.BoothTag>
          <G.BoothTitle>{e.name}</G.BoothTitle>
          <G.BoothImage>
            <img src={e.image} alt="booth image" />
          </G.BoothImage>
          <G.BoothInfo>📣 부스 운영 정보</G.BoothInfo>
          <G.LocationIcon />
          <G.BoothLocation>{e.place}</G.BoothLocation>
          <G.ClockIcon />
          <G.BoothDate>
            {e.date === "day1" ? (
              <>
                10/1 (화) <span className="time">{e.timeDay1}</span>
              </>
            ) : e.date === "day2" ? (
              <>
                10/2 (수) <span className="time">{e.timeDay2}</span>
              </>
            ) : e.date === "both" ? (
              <>
                10/1 (화) <span className="time">{e.timeDay1}</span>
                <br />
                10/2 (수) <span className="time">{e.timeDay2}</span>
              </>
            ) : (
              e.date
            )}
          </G.BoothDate>

          <G.BoothIntro>부스 소개</G.BoothIntro>
          <G.BoothIntroContent>{e.introduction}</G.BoothIntroContent>
        </G.BoothBox>
      ))}
      <G.FooterTextLogo>
        <object
          data={`${process.env.PUBLIC_URL}/images/FooterTextLogo.svg`}
          alt="footer text logo"
        />
      </G.FooterTextLogo>
      <G.Footer>
        <object
          data={`${process.env.PUBLIC_URL}/images/Footer.svg`}
          alt="footer"
        />
      </G.Footer>
    </G.Container>
  );
};

export default GeneralBooth;
