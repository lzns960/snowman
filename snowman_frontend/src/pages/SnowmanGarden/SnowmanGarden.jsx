import styled from 'styled-components';
import AllContainer from '../../components/AllContainer';

export default function SnowmanGarden() {
  return (
    <AllContainer>
      <Main>
        <MainText>
          <span style={{ color: '#f5c51f' }}>수지</span> 님의 정원에
          <br></br>
          <span style={{ color: '#ce4545' }}>0</span> 개의 눈사람이
          만들어졌어요!
          <br></br>총 <span style={{ color: '#ce4545' }}>0</span> 개의 메세지
          <br></br>
          <ShareBtn># 공유하기</ShareBtn>
          <CaptureBtn># 캡쳐하기</CaptureBtn>
        </MainText>

        <Garden>
          <Snowman>
            <img
              src={process.env.PUBLIC_URL + '/images/snowman.png'}
              alt="snowman"
              style={{
                width: '30vh',
                margin: 'auto',
              }}
            />
            <img
              src={process.env.PUBLIC_URL + '/images/snowman.png'}
              alt="snowman"
              style={{
                width: '30vh',
                margin: 'auto',
              }}
            />
            <img
              src={process.env.PUBLIC_URL + '/images/snowman.png'}
              alt="snowman"
              style={{
                width: '30vh',
                margin: 'auto',
              }}
            />
          </Snowman>
          <Santa>
            <img
              src={process.env.PUBLIC_URL + '/images/treeHomeSanta.png'}
              alt="treeHomeSanta"
              style={{ width: 'inherit', objectFit: 'cover' }}
            />
          </Santa>
          <Snow></Snow>
          <DesignBtn>눈사람 만들어주기</DesignBtn>
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

const ShareBtn = styled.button`
  display: inline;
  margin: 1rem 1rem 1rem 0rem;
  padding: 0.6rem;
  background-color: rgba(200, 200, 200, 0.5);
  border-radius: 1.2rem;
  color: #dcdcdc;
  font-size: 1rem;
  font-family: 'bitbit';

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    color: white;
    cursor: pointer;
  }
`;

const CaptureBtn = styled.button`
  display: inline;
  padding: 0.6rem;
  background-color: rgba(200, 200, 200, 0.5);
  border-radius: 1.2rem;
  color: #dcdcdc;
  font-size: 1rem;
  font-family: 'bitbit';

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    color: white;
    cursor: pointer;
  }
`;

const Garden = styled.div``;
const Snowman = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  top: 60vh;
  z-index: 99;
`;
const Santa = styled.div`
  position: absolute;
  bottom: 35vh;
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
