import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as T from "../styles/StyledTalk";

const Talk = () => {
  const navigate = useNavigate();
  const [text, setText] = useState();

  const goback = () => {
    navigate(`/`);
  };

  const gosend = () => {
    console.log(text);
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
      <T.Som>
        <img src={`${process.env.PUBLIC_URL}/images/Cotton.svg`} alt="솜솜" />
      </T.Som>
      <T.Footer>
        <img src={`${process.env.PUBLIC_URL}/images/Footer.svg`} alt="footer" />
        <T.Comment>
          <input
            value={text}
            placeholder="내용을 입력하세요"
            type="text"
            onChange={(event) => {
              return setText(event.target.value);
            }}
          ></input>
          <button onClick={gosend}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Sendbtn.svg`}
              alt="보내기"
            />
          </button>
        </T.Comment>
      </T.Footer>
    </T.Container>
  );
};

export default Talk;
