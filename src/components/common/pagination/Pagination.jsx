import React from 'react';
import Page from './Page/Page';
import s from './Pagination.module.scss';

const Paginations = (props) => {
  const pages = [];
  for (let i = props.currentPage - 4; i <= props.currentPage + 5; i++) {
    if (i > 1 && i < props.totalPagesCount) {
      pages.push(i);
    }
  }
  return (
    <div>
      <Page key={1} page={1} currentPage={props.currentPage} setData={props.setData} pageSize={props.pageSize} />
      {props.currentPage >= 7 && <span className={s.dots}>...</span>}
      {pages.map((page, index) => (
        <Page key={index + 1} page={page} currentPage={props.currentPage} setData={props.setData} pageSize={props.pageSize} />
      ))}
      {props.totalPagesCount - props.currentPage >= 7 && <span className={s.dots}>...</span>}
      <Page
        key={props.totalPagesCount}
        page={props.totalPagesCount}
        currentPage={props.currentPage}
        setData={props.setData}
        pageSize={props.pageSize}
      />
    </div>
  );
};
export default Paginations;
