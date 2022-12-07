import styled from 'styled-components';

export default function AllContainer(props) {
  return (
    <>
      <Container>{props.children}</Container>
    </>
  );
}

const Container = styled.div`
  width: 768px;
  height: 100vh;
  margin: auto;
`;
