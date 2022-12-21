import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import AllContainer from '../../components/AllContainer';
import { GiAnticlockwiseRotation } from 'react-icons/gi';
import { useState } from 'react';

export default function ReadingLetter() {
  const navigate = useNavigate();
  const linkSnowmanGarden = () => {
    navigate('/');
  };

  const [letter, setLetter] = useState(false);

  const showLetter = () => {
    setLetter(!letter);
  };
  return (
    <AllContainer>
      <Main>
        <MainText>
          눈사람을 클릭하면 <span style={{ color: '#f5c51f' }}>편지</span>가
          보여요!
        </MainText>
        <GiAnticlockwiseRotation
          size={30}
          style={{
            margin: 'auto',
          }}
        />

        <SnowmanBox>
          <Letter>
            <Snowman onClick={showLetter}>
              <div
                className={
                  letter ? ' item front active' : ' item front notActive'
                }
              >
                <img
                  src={
                    process.env.PUBLIC_URL +
                    '/images/snowmanList/santasanta.png'
                  }
                  alt="snowman"
                  className="snowmanLetter"
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                    transform: 'scale(1.8)',
                  }}
                />
              </div>
              <LetterContent
                className={
                  letter ? ' item back active' : ' item back notActive'
                }
              >
                편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용
              </LetterContent>
            </Snowman>
          </Letter>
        </SnowmanBox>
        <DesignBox>
          <DesignBtnBox>
            <Name>
              <p>수지</p>

              <img
                src={process.env.PUBLIC_URL + '/images/woodenBoard.png'}
                alt="woodenBoard"
                className="woodenBoard"
              />
            </Name>
            <BackBtn onClick={linkSnowmanGarden}>뒤로가기</BackBtn>
          </DesignBtnBox>
        </DesignBox>
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

const Main = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const MainText = styled.div`
  font-size: 1.5rem;
  margin: 2rem;
  z-index: 99;
  line-height: 2rem;
`;
const LetterContent = styled.div`
  position: absolute;
  left: 0;
  transform: translate(-50%, 0);

  top: 10%;
  width: 100%;
  padding: 10%;
  background-color: rgba(0, 0, 0, 0.6);
  line-height: 150%;
  border-radius: 20px;
  margin-top: 3rem;
  text-align: center;
`;
const Letter = styled.div`
  padding: 0 5%;
`;

const Name = styled.div`
  position: absolute;
  width: 49%;
  font-size: 1.2rem;
  line-height: 150%;
  vertical-align: baseline;
  height: 7%;
  padding: 0.6rem 0 0.6rem 0;
  text-align: center;
  right: 8%;
  border-radius: 5px;

  .woodenBoard {
    position: absolute;
    width: inherit;
    float: right;
  }
  & p {
    color: #0f1322d8;
    position: absolute;
  }
`;
const Snowman = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  width: 50vw;
  max-width: 200px;
  max-height: 298px;
  z-index: 3;

  perspective: 300px;
  margin: auto;
  cursor: pointer;
  & img {
    max-width: 100%;
    height: auto;
  }
  .snowmanLetter {
    width: 100%;
    transform: scale(2);
    margin-top: 17rem;
  }

  // 회전 효과
  .item {
    backface-visibility: hidden;
    transition: 1s;
  }
  .front {
    transform: rotateY(0deg);
  }
  .active.item.front {
    transform: rotateY(180deg);
  }
  .back {
    transform: rotateY(-180deg);
  }
  .active.item.back {
    transform: rotateY(0deg);
  }
`;
const BackBtn = styled.div`
  width: 30%;
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
