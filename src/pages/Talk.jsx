import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as T from "../styles/StyledTalk";

const Talk = () => {
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const [messagePositions, setMessagePositions] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);

  const goback = () => {
    navigate(`/`);
  };
  const handleSubmit = async (event) => {
    // event.preventDefault(); // 페이지 새로고침 방지

    if (!comment) {
      return;
    }
    try {
      // 댓글 전송 API 호출
      const response = await axios.post("http://127.0.0.1:8000/somtalk", {
        comment: comment, // 백엔드로 보낼 데이터 (댓글)
      });

      // 댓글이 성공적으로 전송되면 새로운 메시지를 추가하고 새로고침
      if (response.status === 200) {
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { comment: response.data.comment }, // 서버에서 돌아온 댓글을 추가
        ]);
        setComment(""); // 입력 필드 초기화
      }
    } catch (error) {
      console.error("댓글 전송에 실패했습니다:", error);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/somtalk");
      if (response.status === 200) {
        // 백엔드에서 받아온 데이터를 상태로 설정
        setChatMessages(response.data);
      }
    } catch (error) {
      console.error("댓글 목록을 불러오는 데 실패했습니다:", error);
    }
  };

  const getRandomOffset = () => {
    return Math.random() * (70 - 30) + 30;
  }; //말풍선 사이드 간격 랜덤 배정 함수 (70~30 px사이로)

  useEffect(() => {
    // 페이지가 로드될 때 댓글 목록을 불러옴
    fetchMessages();
  }, []);

  useEffect(() => {
    const positions = chatMessages.map((_, index) => {
      const isLeft = index % 2 === 0;
      const offset = getRandomOffset();
      return {
        position: {
          top: `${index * 60}px`, // 각 말풍선 간격 설정 (위아래)
          [isLeft ? "left" : "right"]: `${offset}px`, // (사이드)
        },
        message: chatMessages[index].comment /*message에 순서대로 순서 부여*/,
      };
    });
    setMessagePositions(positions); //최종 포지션 정해짐
  }, [chatMessages]); //처음 랜더링 됐을 때만 함수 작동

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
      <form onSubmit={handleSubmit}>
        <T.Footer>
          <img
            src={`${process.env.PUBLIC_URL}/images/Footer.svg`}
            alt="footer"
          />
          <T.Comment>
            <input
              value={comment}
              placeholder="내용을 입력하세요"
              type="text"
              onChange={(event) => setComment(event.target.value)}
              required
            />
            <button type="submit">
              <img
                src={`${process.env.PUBLIC_URL}/images/Sendbtn.svg`}
                alt="보내기"
              />
            </button>
          </T.Comment>
        </T.Footer>
      </form>
    </T.Container>
  );
};

export default Talk;
