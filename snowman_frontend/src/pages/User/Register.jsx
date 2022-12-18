import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import AllContainer from '../../components/AllContainer';

import { connect } from 'react-redux';
import { register } from '../../store/action/auth';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [nickName, setNickName] = useState('');
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const emailChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const rePasswordChange = (e) => {
    setRePassword(e.target.value);
  };
  const nickNameChange = (e) => {
    setNickName(e.target.value);
  };

  const onSubmitHandler = (e) => {
    console.log('눌렀음');
    e.preventDefault();

    setSuccessful(false);

    dispatch(register(email, password, nickName))
      .then(() => {
        setSuccessful(true);
        alert('회원가입을 성공적으로 완료했습니다!');
      })
      .catch(() => {
        console.log('실패');
        setSuccessful(false);
      });

    navigate('/snowmanGarden');
  };

  const navigate = useNavigate();
  const linkSnowmanGarden = () => {
    navigate('/snowmanGarden');
  };

  return (
    <AllContainer>
      <Main>
        <RegisterTitle>회원가입</RegisterTitle>
        <form onSubmit={onSubmitHandler}>
          <RegisterBox>
            <p>이메일</p>
            <NameInput onChange={emailChange} />
            <p>비밀번호</p>
            <NameInput onChange={passwordChange} />
            <p>비밀번호확인</p>
            <NameInput onChange={rePasswordChange} />
            <p>닉네임(익명)</p>
            <NameInput onChange={nickNameChange} />
          </RegisterBox>
          <BtnBox>
            <BackBtn onClick={linkSnowmanGarden}>뒤로가기</BackBtn>
            <RegisterBtn type="submit">회원가입</RegisterBtn>
          </BtnBox>
        </form>
      </Main>
      <Background>
        <DarkBg></DarkBg>
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
`;

const RegisterTitle = styled.div`
  color: white;
  font-size: 4rem;
  margin: 20% 0 10%;
`;

const RegisterBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0 5%;
  & p {
    font-size: 1.8rem;
  }
`;

const NameInput = styled.input`
  height: 50px;
  border-radius: 10px;
  margin-top: 5px;
  padding: 0 4%;
  color: black;
`;

const RegisterContent = styled.textarea`
  width: 100%;
  height: 40vh;
  border-radius: 10px;
  resize: none;
  white-space: pre-wrap;
  padding: 4%;
  box-sizing: border-box;
  color: black;
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

const RegisterBtn = styled.div`
  width: 30%;
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

const Background = styled.div``;

const DarkBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: -1;
`;

const TreeHome = styled.div`
  position: absolute;
  bottom: 40vh;
  width: 100%;
  z-index: -2;
`;

const Snow = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0vh;
  background-color: white;
  height: 42vh;
  z-index: -3;
`;
