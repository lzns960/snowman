import ShareUrl from './ShareUrl';
import CaptureImage from './CaptureImage';
import styled from 'styled-components';

export default function MainText({ gardenEmail, nickname, data }) {
  if (gardenEmail === 'main') {
    return (
      <MainGardenText>
        <div className="words words-1">
          <span>S</span>
          <span>N</span>
          <span>O</span>
          <span>W</span>
        </div>
        <div className="words words-1">
          <span>M</span>
          <span>A</span>
          <span>N</span>
        </div>
        <div className="words words-1">
          <span>G</span>
          <span>A</span>
          <span>R</span>
          <span>D</span>
          <span>E</span>
          <span>N</span>
        </div>
      </MainGardenText>
    );
  } else if (gardenEmail !== '') {
    return (
      <>
        <UserText>
          <span style={{ color: '#f5c51f' }}>{nickname}</span> 님의 정원에
          <br></br>총 <span style={{ color: '#ce4545' }}>{data.length}</span>{' '}
          개의 눈사람이 만들어졌어요!
          <br></br>
          <ShareUrl />
          <CaptureImage />
        </UserText>
      </>
    );
  }
}

const UserText = styled.div`
  font-size: 1.5rem;
  margin: 2rem;
  z-index: 99;
`;

const MainGardenText = styled.div`
  margin: 2rem;
  z-index: 99;

  .words {
    font-size: 0;
    line-height: 1;
    span {
      color: #0f1322;
      font-size: 5rem;
      display: inline-block;
      animation: move 2s ease-in-out infinite;
      &:nth-child(2) {
        animation-delay: 0.5s;
      }
      &:nth-child(3) {
        animation-delay: 1s;
      }
      &:nth-child(4) {
        animation-delay: 1.5s;
      }
    }
  }

  @keyframes move {
    0% {
      transform: translate(-33%, 0);
    }
    50% {
      text-shadow: 0 15px 40px rgba(255, 255, 255, 0.6);
    }
    100% {
      transform: translate(33%, 0);
    }
  }
`;
