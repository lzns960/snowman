import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import Pagination from 'react-js-pagination';
import { GiAnticlockwiseRotation } from 'react-icons/gi';
import AllContainer from '../../components/AllContainer';
import BugerModal from '../SnowmanGarden/BugerModal';
import '../../styles/Paging.css';

export default function ReadingLetter() {
  const navigate = useNavigate();

  const [gardenEmail, setGardenEmail] = useState();
  const [letter, setLetter] = useState(false);
  const [data, setData] = useState([]);
  const [nickname, setNickname] = useState('');
  const [connect, setConnect] = useState(false);

  // 로그인유저정보
  const { user: currentUser } = useSelector((state) => state.auth);

  // 편지 회전효과(클래스 네임 추가)
  const showLetter = () => {
    setLetter(!letter);
  };

  /* pagingnation */
  // 첫 번째 페이지
  const [page, setPage] = useState(1);
  // 한 페이지에 보여줄 총 갯수
  const [pagePost] = useState(1);
  // 페이지 이동 이벤트함수
  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    setGardenEmail(currentUser.email);

    async function fetchData() {
      if (currentUser != null) {
        axios
          .get(`http://localhost:8080/api/snowmans/${gardenEmail}`)
          .then((response) => {
            setData(response.data.snowmans);
            setNickname(response.data.nickname);
          });
      }
    }

    if (gardenEmail !== undefined) {
      fetchData();
      setConnect(true);
    }
  }, [gardenEmail, currentUser]);

  const linkSnowmanGarden = () => {
    navigate(`/snowmangarden/${gardenEmail}`);
  };
  if (connect) {
    return (
      <AllContainer>
        <GiAnticlockwiseRotation
          size={30}
          style={{
            position: 'absolute',
            left: '50%',
            transform: ' translate(-50%, 0)',
            top: '18%',
          }}
        />

        <Main>
          <BugerModal gardenEmail={gardenEmail} currentUser={currentUser} />
          <MainText>
            <span style={{ color: '#f5c51f' }}>{nickname}</span> 님의 편지함 ({' '}
            <span style={{ color: '#ce4545' }}>{data.length}</span> 건)<br></br>
            <br></br>
            눈사람을 클릭하면 <span style={{ color: '#f5c51f' }}>편지</span>가
            보여요!
          </MainText>
          {data.length > 0
            ? data
              .slice(pagePost * (page - 1), pagePost * (page - 1) + pagePost)
              .map((a, i) => {
                return (
                  <Snowman onClick={showLetter} key={Date.now()}>
                    <div
                      className={
                        letter ? ' item front active' : ' item front notActive'
                      }
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '/images/snowmanList/' +
                          a.snowmanType +
                          '.png'
                        }
                        alt="snowman"
                        className="snowmanLetter"
                      />
                    </div>
                    <LetterContent
                      className={
                        letter ? ' item back active' : ' item back notActive'
                      }
                    >
                      {a.post}
                    </LetterContent>
                    <Name>{a.authorNickname}</Name>
                  </Snowman>
                );
              })
            : <NullBox></NullBox>}

          {data.length > 0 ? (
            <Pagination
              className="pagination"
              // * 필수 값
              // *활성 페이지
              activePage={page}
              // 페이지당 항목 수
              itemsCountPerPage={1}
              // 페이지 총 아이템수
              totalItemsCount={data.length}
              // 페이지 범위
              pageRangeDisplayed={6}
              // 이전 페이지 탐색 버튼의 텍스트
              prevPageText={'<'}
              // 다음 페이지 탐색 버튼의 텍스트
              nextPageText={'>'}
              // 페이지 변경 핸들러 pageNumber를 인수로 수신
              onChange={handlePageChange}
            />
          ) : null}
          <BackBtn onClick={linkSnowmanGarden}>뒤로가기</BackBtn>
        </Main>
        <Background>
          <TreeHome>
            <img
              src={process.env.PUBLIC_URL + '/images/treeHome.png'}
              alt="tree"
              style={{
                width: '100%',
                objectFit: 'cover',
                display: 'block',
                margin: 'auto',
              }}
            />
          </TreeHome>
          <Snow></Snow>
        </Background>
      </AllContainer>
    );
  }
}

const Main = styled.div`
  display: flex;
  flex-direction: column;

  .pagination {
    margin-top: 30vh;
    width:100%;
    color: #0f1322;
    z-index: 99;
  }

`;

const MainText = styled.div`
  z-index: 99;

  margin: 2rem;
  font-size: 1.5rem;
`;

const Snowman = styled.div`
  perspective: 500px;
  width: 100%;
  margin: auto;
  max-width: 200px;
  max-height: 298px;
  z-index: 3;

  cursor: pointer;
  & img {
    max-width: 100%;
    height: auto;
  }
  .snowmanLetter {
    position: absoulte;
    width: 100%;

    transform: scale(1.8);
    margin-top: 25vh;
    objectfit: cover;
  }

  // 회전 효과

  @keyframes snomanFront {
    0% {
      transform: rotateY(0deg);
    }
    70% {
      opacity: 0;
    }
    100% {
      transform: rotateY(180deg);
      opacity: 0;
    }
  }

  @keyframes snowmanBack {
    0% {
      transform: rotateY(-180deg);
      opacity: 0;
    }
    70% {
      opacity: 0;
    }
    100% {
      transform: rotateY(0deg);
    }
  }

  @keyframes letterFront {
    0% {
      transform: rotateY(0deg);
    }
    70% {
      opacity: 0;
    }
    100% {
      transform: rotateY(180deg);
      opacity: 0;
    }
  }

  @keyframes letterBack {
    0% {
      transform: rotateY(-180deg);
      opacity: 0;
    }
    70% {
      opacity: 0;
    }
    100% {
      transform: rotateY(0deg);
    }
  }

  .active.item.front {
    animation-name : snomanFront;
    animation-duration : 1s;
    animation-fill-mode: forwards;
  }

  .notActive.item.front {
    animation-name : snowmanBack;
    animation-duration : 1s;
    animation-fill-mode: forwards;
  }

  .active.item.back {
    animation-name : letterBack;
    animation-duration : 1s;
    animation-fill-mode: forwards;
  }

  .notActive.item.back {
    animation-name : letterFront;
    animation-duration : 1s;
    animation-fill-mode: forwards;
  }
`;

const LetterContent = styled.div`
  position:absolute;
  margin-top: -100%;
  margin-left: -30%;
  width: 150%;
  height: 25vh;
  padding: 10%;
  background-color: rgba(0, 0, 0, 0.7);
  overflow-y: scroll;
  border-radius: 15px;
  text-align: center;
  letter-spacing: 0.1rem;
  word-spacing: 0.2rem;
  font-size: 1.2rem;
`;

const Name = styled.span`
  position: absolute;
  margin-left: 17vh;
  margin-top: -3vh;
  color: #0f1322d8;
  font-size: 1rem;
  width: 50%;
  height: 80px;
  line-height: 60px;
  text-align: center;
  background-image: url(${process.env.PUBLIC_URL}/images/woodenBoard.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transform: rotate(7deg);
`;

const BackBtn = styled.div`
  width: 80%;
  font-size: 1rem;
  background-color: #999;
  line-height: 20px;
  z-index: 99;
  padding: 0.6rem 0 0.6rem 0;
  text-align: center;
  z-index: 99;
  border-radius: 5px;
  padding: 2.5% 2%;
  margin: 20px auto 0;

  &:hover {
    color: white;
    background-color: #646464;
    cursor: pointer;
  }
`;

const DesignBox = styled.div`
  width: 85%;
  height: auto;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 5%;
  border-radius: 5px;
  padding: 2.5% 2%;
  z-index: 99;
  display: flex;
  justify-content: space-between;
`;

const DesignBtnBox = styled.div`
  width: 100%;
  height: 120%;
  margin: 0 auto 10px;
`;

const SnowmanBox = styled.div`
  width: 100%;
  height: 100%;
`;
const Background = styled.div``;

const TreeHome = styled.div`
  position: absolute;
  bottom: 40vh;
  width: 100%;
  z-index: 2;
`;

const Snow = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0vh;
  background-color: white;
  height: 42vh;
  z-index: 1;
`;

const NullBox = styled.div`
  height:60vh;
`;