import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../button/Button';

const Page = (props) => (
  <NavLink
    to={`/users?page=${props.page}&count=${props.pageSize}`}
    onClick={() => {
      props.setData(props.page);
    }}
  >
    <Button text={props.page} cls={props.currentPage === props.page ? 'activePage page blue' : 'page blue'} />
  </NavLink>
);
export default Page;
