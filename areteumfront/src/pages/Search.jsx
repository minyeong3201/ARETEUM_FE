import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "../styles/StyledSearch";

const Search = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };

  const [list2Items, setList2Items] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [searchPerformed, setSearchPerformed] = useState(false); 

  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const handleSearch = async () => {
    setSearchPerformed(true); 
    try {
      const response = await axiosInstance.get("/booth-search/", {
        params: { search: searchQuery },
      });
      console.log("서버 응답:", response.data); 
      setList2Items(response.data.results); // results 배열로 설정
      setTotalResults(response.data.count); // 총 결과 수 설정
    } catch (error) {
      console.error("검색 중 오류 발생:", error.message);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Back>
          <img
            id="back"
            src={`${process.env.PUBLIC_URL}/images/Backbtn.svg`}
            alt="back"
            onClick={goback}
          />
        </S.Back>
        <S.Title>부스 검색</S.Title>
      </S.Header>
      <S.Background>
        <object
          data={`${process.env.PUBLIC_URL}/images/KeyBack2.svg`}
          alt="background"
        />
      </S.Background>

      {!searchPerformed || totalResults > 0 ? (  
        //검색 결과가 없을 때만 Som.svg를 숨기고, 그 외에는 항상 보여줌
        <object
          data={`${process.env.PUBLIC_URL}/images/Som.svg`}
          alt="Som"
          style={{ position: "absolute", top: "370px", left: "60px" }}
        />
      ) : null}

      <S.InputBlank>
        <input
          type="text"
          placeholder="관심있는 부스를 검색해보세요."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <img
          id="search"
          src={`${process.env.PUBLIC_URL}/images/Search2.svg`}
          alt="검색 버튼"
          onClick={handleSearch}
        />
      </S.InputBlank>
      <S.List>
        <S.ResultCount>
          {totalResults > 0 ? `총 ${totalResults}개의 부스` : ""}
        </S.ResultCount>

        {totalResults > 0 ? (
          //검색 결과가 있을 때
          <S.List2>
            {list2Items.map((item) => (
              <S.Booth key={item.id}>
                <S.Bname
                  style={{
                    fontSize: item.name.length > 17 ? "13px" : "17px",
                    marginTop: item.name.length > 17 ? "6px" : "3.3px",
                  }}
                >
                  {item.name}
                </S.Bname>
                <S.Time>운영시간</S.Time>
                <S.Blocation>{item.place}</S.Blocation>
                <br />
                <S.Btime>{item.timeDay1 || ""}</S.Btime>
                {item.timeDay2 ? (
                  <S.Btime2
                    style={{ marginTop: item.timeDay1 ? "0" : "-15px" }}
                  >
                    {item.timeDay2}
                  </S.Btime2>
                ) : null}
              </S.Booth>
            ))}
          </S.List2>
        ) : (
          searchPerformed && (
            <S.NoResult>
              <object
                data={`${process.env.PUBLIC_URL}/images/NoResult.svg`}
                alt="검색 결과 없음"
              />
            </S.NoResult>
          )
        )}
      </S.List>
      <S.Footer>
        <object
          data={`${process.env.PUBLIC_URL}/images/Footer.svg`}
          alt="footer"
        />
      </S.Footer>
    </S.Container>
  );
};

export default Search;