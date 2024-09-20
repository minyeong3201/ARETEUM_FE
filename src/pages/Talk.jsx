import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as T from "../styles/StyledTalk";

const Talk = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(`/`);
  };

  return (
    <T.Container>
      <T.Header>
        <T.Back>
          <img
            id="back"
            src={`${process.env.PUBLIC_URL}/images/Backbtn.svg`}
            alt="back"
            onClick={goback}
          />
        </T.Back>
        <T.Title>솜톡</T.Title>
      </T.Header>
      <T.Background>
        <img
          src={`${process.env.PUBLIC_URL}/images/TalkBack.svg`}
          alt="background"
        />
      </T.Background>
      <T.Footer>
        <img src={`${process.env.PUBLIC_URL}/images/Footer.svg`} alt="footer" />
      </T.Footer>
    </T.Container>
  );
};

export default Talk;
