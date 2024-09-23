import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  margin-top: 0px;
  background: linear-gradient(180deg, #0c2456 0%, #0a759f 100%);
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
`;

export const Background = styled.div`
  position: absolute; /* 상대 위치 설정으로 자연스럽게 배치 */
  //   margin-top: 70px; /* Header의 높이만큼 띄워줍니다. */
  width: 393px;
  height: 737px;
  flex-shrink: 0;
  z-index: 0; /* 다른 요소들 뒤에 배치 */

  img {
    padding-top: 95px;
    // width: 100%;
    // height: 100%;
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

export const Wrap = styled.div`
  position: relation;
  diplay: flex;
  justify-content: center;
  align-items: center;
`;
export const Date = styled.div`
  diplay: flex;
  justify-content: center;
  img {
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
