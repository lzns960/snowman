import { useState } from 'react';
import Pagination from 'react-js-pagination';
import '../../styles/Paging.css';
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from 'react-icons/io';
export default function SnowmanList({ props }) {
  /* pagingnation */
  // 첫 번째 페이지
  const [page, setPage] = useState(1);
  // 한 페이지에 보여줄 총 갯수
  const [pagePost] = useState(7);
  // 페이지 이동 이벤트함수
  const handlePageChange = (page) => {
    setPage(page);
  };

  if (props) {
    return (
      <>
        {props.length > 0 ? (
          props
            .slice(pagePost * (page - 1), pagePost * (page - 1) + pagePost)
            .map((prop, i) => {
              return (
                <div key={i}>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      '/images/snowmanList/' +
                      prop.Head +
                      prop.Body +
                      '.png'
                    }
                    alt="snowman"
                  />
                </div>
              );
            })
        ) : (
          <></>
        )}
        <Pagination
          // * 필수 값
          // *활성 페이지
          activePage={page}
          // 페이지당 항목 수
          itemsCountPerPage={7}
          // 페이지 총 아이템수
          totalItemsCount={props.length}
          // 페이지 범위
          pageRangeDisplayed={3}
          // 이전 페이지 탐색 버튼의 텍스트
          prevPageText={<IoMdArrowDropleftCircle />}
          // 다음 페이지 탐색 버튼의 텍스트
          nextPageText={'>'}
          // 페이지 변경 핸들러 pageNumber를 인수로 수신
          onChange={handlePageChange}
        />
      </>
    );
  }
}
