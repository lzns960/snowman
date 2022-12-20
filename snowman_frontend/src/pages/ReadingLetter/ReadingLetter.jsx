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
        <Letter>
          <Snowman onClick={showLetter}>
            <div
              className={
                letter ? ' item front active' : ' item front notActive'
              }
            >
              <img
                src={
                  process.env.PUBLIC_URL + '/images/snowmanList/santasanta.png'
                }
                alt="snowman"
                className="snowmanLetter"
              />
            </div>
            <LetterContent
              className={letter ? ' item back active' : ' item back notActive'}
            >
              편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용편지내용
            </LetterContent>
          </Snowman>
          <Name>
            <p>수지</p>
          </Name>
          <img
            src={process.env.PUBLIC_URL + '/images/woodenBoard.png'}
            alt="woodenBoard"
            className="woodenBoard"
          />
        </Letter>
        <BtnBox>
          <BackBtn onClick={linkSnowmanGarden}>뒤로가기</BackBtn>
        </BtnBox>
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
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  z-index: 4;
`;

const MainText = styled.div`
  font-size: 1.5rem;
  margin: 2rem;
  z-index: 99;
  line-height: 2rem;
`;
const LetterTitle = styled.div`
  color: white;
  font-size: 4rem;
  margin: 20% 0 5%;
`;

const LetterContent = styled.div`
  position: absolute;
  left: 0;
  transform: translate(-50%, 0);

  top: 10%;
  width: 100%;
  padding: 5%;
  background-color: rgba(0, 0, 0, 0.6);
  line-height: 150%;
  // vertical-align: baseline;
  text-align: center;

  border-radius: 5px;
  // margin-top: 7%;
  // z-index: 999;

  // & p {
  //   color: #0f1322d8;
  // }
`;
const Letter = styled.div`
  padding: 0 5%;
  .woodenBoard {
    width: 30%;
    float: right;
  }
`;

const Name = styled.div`
  position: absolute;
  width: 20%;
  font-size: 1.2rem;
  line-height: 150%;
  vertical-align: baseline;
  height: 7%;
  padding: 0.6rem 0 0.6rem 0;
  text-align: center;
  right: 8%;
  border-radius: 5px;
  margin-top: 5%;

  & p {
    color: #0f1322d8;
  }
`;
const Snowman = styled.div`
  perspective: 300px;
  margin: auto;
  z-index: 999;
  max-width: 200px;
  max-height: 298px;
  cursor: pointer;
  & img {
    max-width: 100%;
    height: auto;
  }
  .snowmanLetter {
    width: 100%;
    transform: scale(2);
    margin-top: 5rem;
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
const BtnBox = styled.div`
  margin: 5% 0;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
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
