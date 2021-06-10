import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profile-reducer';
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
  notFoundAvatar: state.usersPage.notFoundImg,
  isFetching: state.usersPage.isFetching,
});

export default compose(connect(mapStateToProps, { getProfile }), withRouter, withAuthRedirect)(ProfileContainer);
