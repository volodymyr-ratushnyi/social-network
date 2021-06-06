import React from 'react';
import Pagination from '../common/pagination/Pagination';
import User from './user/User';
import s from './Users.module.scss';

const Users = (props) => {
  return (
    <main className={s.wrapper}>
      <Pagination totalPagesCount={props.totalPagesCount} setData={props.setUsers} currentPage={props.currentPage} pageSize={props.pageSize} />
      {props.users.map((user) => (
        <User
          key={user.id}
          user_id={user.id}
          firstName={user.firstName}
          lastName={user.lastName}
          nickName={user.name}
          avatar={user.photos.small ? user.photos.small : props.notFoundImg}
          profession={user.profession}
          location={user.location}
          followed={user.followed}
          switchFollow={props.switchFollow}
          followingInProgress={props.followingInProgress}
        />
      ))}
      <Pagination totalPagesCount={props.totalPagesCount} setUsers={props.setUsers} currentPage={props.currentPage} />
    </main>
  );
};

export default Users;
