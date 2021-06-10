import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { switchFollow, getUsers } from '../../redux/users-reducer';
import Preloader from '../common/preloader/Preloader';
import Users from './Users';

class UsersContainer extends React.Component {
  getUsers = (page = null) => {
    this.props.getUsers(this.props.pageSize, this.props.location.search, page);
  };
  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            users={this.props.users}
            getUsers={this.getUsers}
            totalPagesCount={this.props.totalPagesCount}
            switchFollow={this.props.switchFollow}
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
export default compose(connect(mapStateToProps, { switchFollow, getUsers }), withRouter, withAuthRedirect)(UsersContainer);
