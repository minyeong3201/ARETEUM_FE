import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as T from "../styles/StyledTalk";

const Talk = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [messagePositions, setMessagePositions] = useState([]);

  const goback = () => {
    navigate(`/`);
  };

  const gosend = () => {
    console.log(text);
  };

  const chatMessages = [
    "안녕하세요!",
    "시험 중입니다.",
    "React가 좋아요!",
    "뻥치지마요",
    "무슨 도움이 필요하세요?",
    "잘 지내세요?",
    "응 아니요",
    "화면 괜춘?",
    "아니",
    "근데 예쁘다 디자인",
  ]; //댓글 데이터 (백에서 가져온 걸로 바꿔주면 됨)

  const getRandomOffset = () => {
    return Math.random() * (70 - 30) + 30;
  }; //말풍선 사이드 간격 랜덤 배정 함수 (70~30 px사이로)

  useEffect(() => {
    const positions = chatMessages.map((_, index) => {
      const isLeft = index % 2 === 0;
      const offset = getRandomOffset();
      return {
        position: {
          top: `${index * 60}px`, // 각 말풍선 간격 설정 (위아래)
          [isLeft ? "left" : "right"]: `${offset}px`, // (사이드)
        },
        message: chatMessages[index] /*message에 순서대로 순서 부여*/,
      };
    });
    setMessagePositions(positions); //최종 포지션 정해짐
  }, []); //처음 랜더링 됐을 때만 함수 작동

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
      <T.Talk>
        {messagePositions.map((item, index) => (
          //데이터 맵핑
          <T.TalkContent
            key={index}
            style={{
              position: "absolute",
              ...item.position,
              //절대로 포지션 지정
            }}
          >
            {item.message}
          </T.TalkContent>
        ))}
      </T.Talk>
      <T.Footer>
        <img src={`${process.env.PUBLIC_URL}/images/Footer.svg`} alt="footer" />
        <T.Comment>
          <input
            value={text}
            placeholder="내용을 입력하세요"
            type="text"
            onChange={(event) => setText(event.target.value)}
          />
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
