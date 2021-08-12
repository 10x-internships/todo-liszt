import { useState } from 'react';

import { ArrowLeft, ArrowRight } from '@components/Icons';

import * as Styled from './components';

interface ListPaginationProps {
  total: number;
  pageSize?: number;
  defaultPage?: number;
}

const pages = (totalPages: number) => {
  const arr = [];
  for (let i = 1; i <= totalPages; i++) {
    arr.push(i);
  }
  return arr;
};

const ListPagination = ({ total, pageSize = 10, defaultPage = 1 }: ListPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(defaultPage);

  const totalPages = Math.ceil(total / pageSize);
  const pagesArr = pages(totalPages);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pagesArr[pagesArr.length - 1];

  const handleNextPage = () => setCurrentPage((prev) => prev + 1);

  const handlePrevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <Styled.PaginationList>
      <Styled.PaginationItem>
        <button disabled={isFirstPage} onClick={handlePrevPage}>
          <ArrowLeft />
        </button>
      </Styled.PaginationItem>
      {pagesArr.map((page) => (
        <Styled.PaginationItem key={page} isActive={page === currentPage}>
          <button onClick={() => setCurrentPage(page)}>{page}</button>
        </Styled.PaginationItem>
      ))}
      <Styled.PaginationItem>
        <button disabled={isLastPage} onClick={handleNextPage}>
          <ArrowRight />
        </button>
      </Styled.PaginationItem>
    </Styled.PaginationList>
  );
};

export default ListPagination;
