import styled from 'styled-components';
import { useNavigate } from 'react-router';
import AllContainer from '../../components/AllContainer';
import ShareUrl from './ShareUrl';
import CaptureImage from './CaptureImage';
import BugerModal from './BugerModal';
import SnowmanList from './SnowmanList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import authHeader from '../../store/services/auth-header'

export default function SnowmanGarden(props) {
  // 로그인유저정보
  const { user: currentUser } = useSelector((state) => state.auth);
  if(currentUser != null) {
    const a = currentUser.email;
  };

  const navigate = useNavigate();

  const linkSnowmanDesign = () => {
    navigate('/snowmanDesign');
  };
  const linkReadingLetter = () => {
    navigate('/readingLetter');
  };
  const [data, setData] = useState([]);
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    if(currentUser != null) {
      const a = currentUser.email;
      axios
      .get('http://localhost:8080/api/snowmans/'+ a )
      .then((response) => {
        setData(response.data.data);
      });

      axios
      .get('http://localhost:8080/api/users/me', { headers: authHeader() })
      .then((response) => {
        setNickname(response.data.nickname)
      })
    };
  }, []);

  return (
    <AllContainer>
      <Main>
        <BugerModal />
        <MainText>
          <span style={{ color: '#f5c51f' }}>{nickname}</span> 님의 정원에
          <br></br>총 <span style={{ color: '#ce4545' }}>{data.length}</span>{' '}
          개의 눈사람이 만들어졌어요!
          <br></br>
          <ShareUrl />
          <CaptureImage />
        </MainText>

        <Garden>
          <Snowman>
            <SnowmanList data={data} />
          </Snowman>

          <Santa>
            <img
              src={process.env.PUBLIC_URL + '/images/treeHomeSanta.png'}
              alt="treeHomeSanta"
              style={{
                width: '100%',
                objectFit: 'cover',
                display: 'block',
                margin: 'auto',
              }}
            />
          </Santa>

          <Snow></Snow>

          <DesignBtn onClick={linkSnowmanDesign}>눈사람 만들어주기</DesignBtn>
          <DesignBtn onClick={linkReadingLetter}>편지 읽으러가기</DesignBtn>
        </Garden>
      </Main>
    </AllContainer>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainText = styled.div`
  font-size: 1.5rem;
  margin: 2rem;
  z-index: 99;
`;

const Garden = styled.div``;
const Snowman = styled.div`
  position: absolute;
  bottom: 10vh;
  z-index: 99;
  width: 100vw;

  max-width: 800px;
  max-height: 298px;

  & img {
    -webkit-border-radius: 100px;
  }

  & img:hover {
    transform: scale(1.8);
    cursor: pointer;
    z-index: 108;
  }
  .snowman1 {
    position: absolute;
    bottom: 7vh;
    left: 37%;
    transform: translate(-50%, 0);
    transform: scale(1.4);
    z-index: 106;
  }
  .snowman2 {
    position: absolute;
    bottom: 13vh;

    left: 18%;
    transform: scale(1.4);
    z-index: 105;
  }
  .snowman3 {
    position: absolute;
    bottom: 13vh;
    right: 20%;
    transform: scale(1.4);
    z-index: 105;
  }
  .snowman4 {
    position: absolute;
    bottom: 20vh;
    left: 6%;
    transform: scale(1.4);
    z-index: 104;
  }
  .snowman5 {
    position: absolute;
    bottom: 20vh;
    left: 37%;
    transform: translate(-50%, 0);
    transform: scale(1.4);
    z-index: 104;
  }
  .snowman6 {
    position: absolute;
    bottom: 20vh;
    right: 6%;

    transform: scale(1.4);
    z-index: 104;
  }
`;
const Santa = styled.div`
  position: absolute;
  bottom: 38vh;
  width: 100%;
  z-index: 1;
`;
const Snow = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0vh;
  background-color: white;
  height: 40vh;
`;

const DesignBtn = styled.div`
  position: absolute;
  width: 70%;
  bottom: 3vh;
  font-size: 1.5rem;
  background-color: #ce4545;

  padding: 0.6rem 0 0.6rem 0;
  text-align: center;
  left: 15%;

  &:hover {
    color: white;
    background-color: rgba(180, 40, 40, 1);
    cursor: pointer;
  }
`;
