import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, updateStatus } from '../../redux/profile-reducer';
import Preloader from '../common/preloader/Preloader';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile(this.props.match.params.user_id);
  }

  render() {
    return this.props.isFetching || !this.props.profile ? <Preloader /> : <Profile {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  notFoundAvatar: state.usersPage.notFoundImg,
  isFetching: state.usersPage.isFetching,
  myId: state.auth.id,
});

export default compose(
  connect(mapStateToProps, { getProfile, updateStatus }),
  withRouter
  //  withAuthRedirect
)(ProfileContainer);
