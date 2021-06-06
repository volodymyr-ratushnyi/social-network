import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { follow, checkFollow, unfollow, getUsers } from '../../api/api';
import { setUsers, switchFollow, toggleIsFetching, toggleFollowingProgress } from '../../redux/users-reducer';
import Preloader from '../common/preloader/Preloader';
import Users from './Users';

class UsersContainer extends React.Component {
  setUsers(p = null) {
    let currentPage = 1;
    let count = this.props.pageSize;
    currentPage = new URLSearchParams(this.props.location.search).get('page')
      ? parseInt(new URLSearchParams(this.props.location.search).get('page'), 10)
      : currentPage;
    currentPage = p ? p : currentPage;
    count = new URLSearchParams(this.props.location.search).get('count')
      ? parseInt(new URLSearchParams(this.props.location.search).get('count'), 10)
      : count;

    this.props.toggleIsFetching(true);

    getUsers(count, currentPage).then((res) => {
      this.props.setUsers(res.items, res.totalCount, currentPage);
      this.props.toggleIsFetching(false);
    });
  }
  switchFollow(id) {
    this.props.toggleFollowingProgress(true, id);
    console.log(this.props.followingInProgress);
    checkFollow(id).then((res) => {
      res
        ? unfollow(id).then((res) => {
            if (res.data.resultCode === 0) {
              this.props.switchFollow(id);
            }
          })
        : follow(id).then((res) => {
            if (res.data.resultCode === 0) {
              this.props.switchFollow(id);
            }
          });
      this.props.toggleFollowingProgress(false, id);
      console.log(this.props.followingInProgress);
    });
  }
  componentDidMount() {
    this.setUsers();
  }

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            users={this.props.users}
            setUsers={this.setUsers.bind(this)}
            totalPagesCount={this.props.totalPagesCount}
            switchFollow={this.switchFollow.bind(this)}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            notFoundImg={this.props.notFoundImg}
            followingInProgress={this.props.followingInProgress}
          />
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalPagesCount: state.usersPage.totalPagesCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    notFoundImg: state.usersPage.notFoundImg,
    followingInProgress: state.usersPage.followingInProgress,
  };
};
export default connect(mapStateToProps, { switchFollow, setUsers, toggleIsFetching, toggleFollowingProgress })(withRouter(UsersContainer));
