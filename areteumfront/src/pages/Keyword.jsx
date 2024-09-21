import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as K from "../styles/StyledKeyword";

const Keyword = () => {
  const navigate = useNavigate();
  
  const [selectedThemeBox, setSelectedThemeBox] = useState(null); // 클릭된 테마 박스의 인덱스를 관리

  const goback = () => {
    navigate(`/`);
  };

  const gosearch = () => {
    navigate(`/search`);
  };

  const handleThemeBoxClick = (index) => {
    setSelectedThemeBox(index); // 테마 박스 클릭 시 상태 업데이트
  };

  // SVG 아이콘 상태 관리
  const [isDate1Clicked, setIsDate1Clicked] = useState(false); // date1 클릭 상태 관리
  const [isDate2Clicked, setIsDate2Clicked] = useState(false); // date2 클릭 상태 관리

  const handleDate1Click = () => {
    setIsDate1Clicked(true); // date1 클릭 시 true로 설정
    setIsDate2Clicked(false); // 다른 버튼의 상태 초기화
  };

  const handleDate2Click = () => {
    setIsDate2Clicked(true); // date2 클릭 시 true로 설정
    setIsDate1Clicked(false); // 다른 버튼의 상태 초기화
  };

  // List2의 아이템 상태 관리
  const [list2Items] = useState([
    
    { id: 1, name: "헤어지자고? 링크 주점 이제 시작인데?", manufacturer: "운동장", size: "12:00 ~ 22:00" },
    { id: 2, name: "상품명2", manufacturer: "제조사A", size: "Ng" },
    { id: 3, name: "상품명3", manufacturer: "제조사A", size: "Ng" },
    { id: 4, name: "상품명4", manufacturer: "제조사A", size: "Ng" },
    { id: 5, name: "상품명5", manufacturer: "제조사A", size: "Ng" },
    { id: 6, name: "상품명6", manufacturer: "제조사A", size: "Ng" },
    { id: 7, name: "상품명7", manufacturer: "제조사A", size: "Ng" },
    { id: 8, name: "상품명8", manufacturer: "제조사A", size: "Ng" },
    { id: 9, name: "상품명9", manufacturer: "제조사A", size: "Ng" },
    { id: 10, name: "상품명10", manufacturer: "제조사A", size: "Ng" },
    { id: 11, name: "상품명11", manufacturer: "제조사A", size: "Ng" }
  ]);
  return (
    <K.Container>
      <K.Header>
        <K.Back>
          <img
            id="back"
            src={`${process.env.PUBLIC_URL}/images/Backbtn.svg`}
            alt="back"
            onClick={goback}
          />
        </K.Back>
        <K.Search>
          <img
            id="search"
            src={`${process.env.PUBLIC_URL}/images/Search.svg`}
            alt="search"
            onClick={gosearch}
            style={{ position: "relative", right: "10px" }}
          />
        </K.Search>
        <K.Title>부스 소개</K.Title>
      </K.Header>
      <K.Background>
        <img
          src={`${process.env.PUBLIC_URL}/images/KeyBack2.svg`}
          alt="background"
          width= "150"
          height="500"
        />
      </K.Background>
      <img
          src={`${process.env.PUBLIC_URL}/images/Som.svg`}
          alt="Som"
          style={{ position: "absolute", top: "370px", left: "60px" }}
      />
      <K.Box>
        <K.Box2>
          {/* 날짜 버튼 1 */}
          <K.Keywordd>
            <K.SmallBox5
              isClicked={isDate1Clicked} // 클릭 상태에 따라 스타일 적용
              onClick={handleDate1Click} // 클릭 시 상태 업데이트
            >
              {/* 클릭 상태에 따라 SVG 아이콘 교체 */}
              <img
                src={`${process.env.PUBLIC_URL}/images/${isDate1Clicked ? "date11.svg" : "date1.svg"}`}
                alt="Date 1"
              />
            </K.SmallBox5>
          </K.Keywordd>

          {/* 날짜 버튼 2 */}
          <K.Keywordd>
            <K.SmallBox5
              isClicked={isDate2Clicked} // 클릭 상태에 따라 스타일 적용
              onClick={handleDate2Click} // 클릭 시 상태 업데이트
            >
              {/* 클릭 상태에 따라 SVG 아이콘 교체 */}
              <img
                src={`${process.env.PUBLIC_URL}/images/${isDate2Clicked ? "date22.svg" : "date2.svg"}`}
                alt="Date 2"
              />
            </K.SmallBox5>
          </K.Keywordd>
        </K.Box2>
      </K.Box>
      <K.Box3>
        <K.Box2>
          {["체험", "주점", "마켓"].map((theme, index) => (
            <K.Keywordd key={index}>
              <K.SmallBox6
                isClicked={selectedThemeBox === index} // 클릭 상태에 따라 스타일 적용
                onClick={() => handleThemeBoxClick(index)} // 클릭 시 상태 업데이트
              >
                <div style={{ fontWeight: "bold", fontSize: "13px" }}>
                  {theme}
                </div>
              </K.SmallBox6>
            </K.Keywordd>
          ))}
        </K.Box2>
      </K.Box3>
      <K.Border>
        <div></div>
      </K.Border>
      <K.List>
        <K.List2>
          {list2Items.map((item) => (
            <K.Booth key={item.id}>
              <K.Bname>{item.name}</K.Bname>
              <K.Time>운영시간</K.Time>
              <K.Blocation>{item.manufacturer}</K.Blocation>
              <br />
              <K.Btime>{item.size}</K.Btime>
            </K.Booth>
          ))}
        </K.List2>
      </K.List>
      <K.Footer>
        <img src={`${process.env.PUBLIC_URL}/images/Footer.svg`} alt="footer" />
      </K.Footer>
    </K.Container>
  );
};

export default Keyword;
