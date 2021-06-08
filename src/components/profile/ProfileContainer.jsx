import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profile-reducer';
import Preloader from '../common/preloader/Preloader';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile(this.props.match.params.user_id);
  }

  render() {
    return this.props.profile ? <Profile {...this.props} /> : <Preloader />;
  }
}
const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  notFoundAvatar: state.usersPage.notFoundImg,
});

export default connect(mapStateToProps, { getProfile })(withRouter(ProfileContainer));
