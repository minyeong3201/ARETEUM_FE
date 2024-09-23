import { styled, keyframes } from "styled-components";

// 나타나는 애니메이션 정의
const slideUpAndFadeIn = keyframes`
  0% {
    transform: translateY(50px); /* 아래에서 시작 */
    opacity: 0; /* 투명하게 시작 */
  }
  100% {
    transform: translateY(0); /* 제자리로 */
    opacity: 1; /* 서서히 보이게 */
  }
`;

export const Container = styled.div`
  position: relative;
  diplay: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 393px;
  height: 1113px;
  margin-top: 0px;
  background: linear-gradient(180deg, #0c2456 0%, #0a759f 100%);
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  overflow: hidden;
  z-index: 0;
`;

export const Background = styled.div`
  position: absolute; /* 상대 위치 설정으로 자연스럽게 배치 */
  width: 393px;
  height: 737px;
  flex-shrink: 0;
  z-index: 1;
  img {
    object-fit: cover; /* 배경 이미지가 화면에 맞게 늘어나도록 설정 */
  }
`;

export const Header = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: relative;
`;

export const Back = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const Title = styled.div`
  margin-top: 20px;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Date = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  margin-top: 16px;
  gap: 90px;
  img {
    cursor: pointer;
  }
`;
export const BoothImg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  margin-top: 26px;
`;
export const Buttons = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  gap: 8.5px;
  margin-top: 18px;

  button {
    cursor: pointer;
    width: 60px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 30px;
    background: #fffdf0;
    border: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    color: #0c2557;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
export const BoothInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 15px;
  width: 334px;
  max-height: 298px;
  overflow-y: auto;
  flex-shrink: 0;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.7);

  margin-top: 29px;
  margin-bottom: 30px;

  padding-top: 17px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 17px;

  /* 스크롤바 스타일 (선택사항) */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2); /* 스크롤바의 색상 */
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* 스크롤 트랙 색상 */
  }
`;
export const DAY1 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  z-index: 2;

  width: 135px;
  gap: 10px;

  color: #0c2557;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const DAY2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  z-index: 2;

  width: 135px;
  gap: 10px;

  color: #0c2557;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Booths = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  #one {
    display: flex;
    gap: 6px;
    justify-content: center;
  }
  #wrap {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
  }
  #num {
    position: absolute;
    z-index: 4;
    color: #fff;
  }
  #name {
    color: #0c2557;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.375px;
  }
`;
export const Detail = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  cursor: pointer;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 115px;
    height: 39px;
    padding: 10px 7px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;

    border-radius: 30px;
    background: #fbefb5;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    color: #0c2557;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    animation: ${(props) => (props.isVisible ? slideUpAndFadeIn : "none")} 2s
      ease forwards;
  }
`;

export const Footer = styled.footer`
  width: 393px;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  bottom: 0;
  position: absolute;
`;
