import AllContainer from '../../components/AllContainer';

export default function SnowmanGarden() {
  return (
    <AllContainer>
      <div style={{ color: 'white' }}>메인</div>
      <img
        src={process.env.PUBLIC_URL + '/images/treeHomeSanta.png'}
        alt="treeHomeSanta"
      />
    </AllContainer>
  );
}
