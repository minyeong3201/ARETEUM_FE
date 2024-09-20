import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  margin-top: 0px;
  background: linear-gradient(180deg, #0c2456 0%, #0a759f 100%);
  min-height: 100vh;
`;

export const Background = styled.div`
  position: relative; /* 상대 위치 설정으로 자연스럽게 배치 */
  //   margin-top: 70px; /* Header의 높이만큼 띄워줍니다. */
  width: 393px;
  height: 737px;
  flex-shrink: 0;
  z-index: 0; /* 다른 요소들 뒤에 배치 */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 배경 이미지가 화면에 맞게 늘어나도록 설정 */
  }
`;

export const Som = styled.div`
  position: absolute; /* 절대 위치로 설정하여 Background 위에 배치 */
  top: 30%; /* 원하는 위치에 배치 (예시로 화면의 절반 위치) */
  left: 50%;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  z-index: 1; /* Background보다 위에 배치 */

  img {
    width: 414px;
    height: 414px;
    flex-shrink: 0;
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
  cursor: pointer;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const Title = styled.div`
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

export const Comment = styled.div`
  width: 350px;
  height: 55px;
  flex-shrink: 0;
  justify-content: space-between;
  border-radius: 20px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 9px;
  padding: 5px 10px;

  input {
    flex: 1;
    border: none;
    padding: 10px;
    color: #5a5a5a;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    outline: none;
  }

  button {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    cursor: pointer;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px; /* 이미지와 입력칸 사이 여백 추가 */
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
  flex-direction: column; /* 푸터 안에서 세로 정렬 */
`;
