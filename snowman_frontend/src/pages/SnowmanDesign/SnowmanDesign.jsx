import styled from 'styled-components';
import AllContainer from '../../components/AllContainer';

export default function SnowmanDesign() {
  return (
    <AllContainer>
      <Main>
        <MainText>
          1. 눈사람을 꾸밀 <span style={{ color: '#f5c51f' }}>재료</span>를
          선택해주세요
          <br></br>
          2. 눈사람을 완성했다면{' '}
          <span style={{ color: '#f5c51f' }}>편지쓰러가기</span> 버튼을 눌러
          친구에게 편지를 써주세요
        </MainText>

        <SnowmanBox>
          <Snowman>
            <img
              src={process.env.PUBLIC_URL + '/images/ns_snowman.png'}
              alt="snowman"
              style={{
                width: '100%',
                objectFit: 'cover',
              }}
            />
          </Snowman>
        </SnowmanBox>

        <DesignBox>
          <DesignBtnBox>
            <DesignBtn>모자</DesignBtn>
            <DesignBtn>얼굴</DesignBtn>
            <DesignBtn> 옷 </DesignBtn>
            <DesignBtn>장갑</DesignBtn>
          </DesignBtnBox>
          <AttrBox>
            <Attr></Attr>
            <Attr></Attr>
            <Attr></Attr>
            <Attr></Attr>
          </AttrBox>
        </DesignBox>
        <BackBtn>뒤로가기</BackBtn>
        <LetterBtn>편지쓰러가기</LetterBtn>

        <Tree>
          <img
            src={process.env.PUBLIC_URL + '/images/tree.png'}
            alt="tree"
            style={{
              width: '100%',
              objectFit: 'cover',
              display: 'block',
              margin: 'auto',
            }}
          />
        </Tree>
        <Snow></Snow>
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
  line-height: 2rem;
`;

const SnowmanBox = styled.div`
  width: 100%;
  height: 100%;
`;

const Snowman = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 38vh;
  width: 30vw;
  max-width: 200px;
  max-height: 298px;
  z-index: 99;

  & img {
    max-width: 100%;
    height: auto;
  }
`;

const DesignBox = styled.div`
  width: 85%;
  max-width: 550px;
  height: auto;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 9%;
  border-radius: 5px;
  background-color: #d3dff3;
  padding: 2.5% 2%;
  z-index: 99;
`;

const DesignBtnBox = styled.div`
  width: 100%;
  height: 120%;
  margin: 0 auto 10px;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const DesignBtn = styled.div`
  width: 23%;
  font-size: 1.7rem;
  line-height: 2.6rem;
  border-radius: 5px;
  background-color: #a2afc7;
  &:hover {
    color: white;
    background-color: #33374a;
    cursor: pointer;
  }
`;

const AttrBox = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const Attr = styled.div`
  width: 50%;
  max-width: 23%;
  max-height: 70%;
  margin: 2px;
  border: 1px solid #eef0f5;
  outline: 3px solid #f7f9fd;
  border-radius: 15px;
  background-color: white;

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  &:hover {
  }
`;

const BackBtn = styled.div`
  position: absolute;
  width: 20%;
  bottom: 3%;
  font-size: 1rem;
  background-color: #999;
  line-height: 20px;

  padding: 0.6rem 0 0.6rem 0;
  text-align: center;
  left: 8%;
  z-index: 99;
  border-radius: 5px;

  &:hover {
    color: white;
    background-color: #646464;
    cursor: pointer;
  }
`;

const LetterBtn = styled.div`
  position: absolute;
  width: 30%;
  bottom: 3%;
  font-size: 1rem;
  background-color: #ce4545;
  line-height: 20px;

  padding: 0.6rem 0 0.6rem 0;
  text-align: center;
  right: 8%;
  z-index: 99;
  border-radius: 5px;

  &:hover {
    color: white;
    background-color: rgba(180, 40, 40, 1);
    cursor: pointer;
  }
`;

const Tree = styled.div`
  position: absolute;
  bottom: 40vh;
  width: 100%;
  z-index: 1;
`;

const Snow = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0vh;
  background-color: white;
  height: 42vh;
`;
