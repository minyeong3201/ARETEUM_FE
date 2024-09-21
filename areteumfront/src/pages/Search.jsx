import React, { useState /*, useEffect */ } from "react";
import { useNavigate /*, useParams */ } from "react-router-dom";
import * as S from "../styles/StyledSearch";

const Search = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };
  /*
  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("customFit/search/", {
        params: { product_name: searchQuery },
      });
      setList2Items(response.data);
    } catch (error) {
      console.error("검색 중 오류 발생:", error.message);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  */

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
        <img
          src={`${process.env.PUBLIC_URL}/images/KeyBack2.svg`}
          alt="background"
          width= "150"
          height="500"
        />
      </S.Background>
      <img
          src={`${process.env.PUBLIC_URL}/images/Som.svg`}
          alt="Som"
          style={{ position: "absolute", top: "370px", left: "60px" }}
      />
      <S.InputBlank>
        <input
          type="text"
          placeholder="관심있는 부스를 검색해보세요."
          /*
          value={searchQuery}
          onChange={handleSearchInputChange}
          */
        />
        <img
          id="search"
          src={`${process.env.PUBLIC_URL}/images/Search2.svg`}
          alt="검색 버튼"
          /*
          onClick={handleSearch}
          */
        />
      </S.InputBlank>
      <S.List>
        <S.List2>
          {list2Items.map((item) => (
            <S.Booth key={item./*product_*/id}>
              <S.Bname>{item./*product_*/name}</S.Bname>
              <S.Time>운영시간</S.Time>
              <S.Blocation>{item./*product_*/manufacturer}</S.Blocation><br/>
              <S.Btime>{item./*product_*/size}</S.Btime>
            </S.Booth>
          ))}
        </S.List2>
      </S.List>
      <S.Footer>
        <img src={`${process.env.PUBLIC_URL}/images/Footer.svg`} alt="footer" />
      </S.Footer>
    </S.Container>
  );
};

export default Search;