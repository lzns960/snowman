import { useState } from 'react';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';
import '../../styles/Paging.css';

export default function SnowmanList({ data, gardenEmail }) {
  const snowmanList = [];
  
  /* pagingnation */
  // 첫 번째 페이지
  const [page, setPage] = useState(1);
  // 한 페이지에 보여줄 총 갯수
  const [pagePost] = useState(6);
  // 페이지 이동 이벤트함수
  const handlePageChange = (page) => {
    setPage(page);
    snowmanList.splice(0);
  };

  if (data) {
    return (
      <>
        {data.length > 0 ? (
          data
            .slice(pagePost * (page - 1), pagePost * (page - 1) + pagePost)
            .map((a, i) => {
              snowmanList.push(a.snowman_id);
              console.log(snowmanList);
              return (
                <div key={a.snowmanId}>
                  {snowmanList.indexOf(snowmanList[i]) === 0? (
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/images/snowmanList/' +
                        a.snowmanType +
                        '.png'
                      }
                      alt="snowman1"
                      className="snowman1"
                    />
                  ) : snowmanList.indexOf(snowmanList[i]) === 1? (
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/images/snowmanList/' +
                        a.snowmanType +
                        '.png'
                      }
                      alt="snowman2"
                      className="snowman2"
                    />
                  ) : snowmanList.indexOf(snowmanList[i]) === 2 ? (
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/images/snowmanList/' +
                        a.snowmanType +
                        '.png'
                      }
                      alt="snowman3"
                      className="snowman3"
                    />
                  ) : snowmanList.indexOf(snowmanList[i]) === 3 ? (
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/images/snowmanList/' +
                        a.snowmanType +
                        '.png'
                      }
                      alt="snowman4"
                      className="snowman4"
                    />
                  ) : snowmanList.indexOf(snowmanList[i]) === 4 ? (
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/images/snowmanList/' +
                        a.snowmanType +
                        '.png'
                      }
                      alt="snowman5"
                      className="snowman5"
                    />
                  ) : snowmanList.indexOf(snowmanList[i]) === 5 ? (
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/images/snowmanList/' +
                        a.snowmanType +
                        '.png'
                      }
                      alt="snowman6"
                      className="snowman6"
                    />
                  ) : null}
                </div>
              );
            })
        ) : (
          <></>
        )}
        {data.length > 0 ? (
          <Page>
            <Pagination
              // * 필수 값
              // *활성 페이지
              activePage={page}
              // 페이지당 항목 수
              itemsCountPerPage={6}
              // 페이지 총 아이템수
              totalItemsCount={data.length}
              // 페이지 범위
              pageRangeDisplayed={3}
              // 이전 페이지 탐색 버튼의 텍스트
              prevPageText={'<'}
              // 다음 페이지 탐색 버튼의 텍스트
              nextPageText={'>'}
              // 페이지 변경 핸들러 pageNumber를 인수로 수신
              onChange={handlePageChange}
              className="Pagination"
            />
          </Page>
        ) : null}
      </>
    );
  }
}

const Page = styled.div`
  &.Pagination {
    width: 100%;
`;
