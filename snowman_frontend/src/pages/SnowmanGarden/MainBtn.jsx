import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function MainBtn({ gardenEmail, currentUser }) {
  const navigate = useNavigate();
  const linkSnowmanDesign = () => {

    navigate(`/snowmanDesign/${gardenEmail}`);
  };
  const linkReadingLetter = () => {
    navigate(`/readingLetter/${gardenEmail}`);
  };

  return (
    <>
      {currentUser != null ? (

        <DesignBtn onClick={linkReadingLetter}>편지 읽으러가기</DesignBtn>
      ) : (
        <DesignBtn onClick={linkSnowmanDesign}>눈사람 만들어주기</DesignBtn>
      )}
    </>
  );
}
const DesignBtn = styled.div`
  position: absolute;
  width: 70%;
  bottom: 3vh;
  font-size: 1.5rem;
  background-color: #ce4545;

  padding: 0.6rem 0 0.6rem 0;
  text-align: center;
  left: 15%;

  &.loginBtn {
    bottom: 9vh;
  }
  &.registerBtn {
    background-color: #527c63;
  }
  &:hover {
    color: white;
    background-color: rgba(180, 40, 40, 1);
    cursor: pointer;
  }
  &.registerBtn:hover {
    background-color: #375242;
  }
`;
