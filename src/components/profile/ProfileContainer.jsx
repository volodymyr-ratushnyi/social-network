import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfile } from '../../redux/profile-reducer';
import { toggleIsFetching } from '../../redux/users-reducer';
import Preloader from '../common/preloader/Preloader';
import { withRouter } from 'react-router';
import { authMe, getProfile } from '../../api/api';

class ProfileContainer extends React.Component {
  setProfile() {
    this.props.toggleIsFetching(true);
    authMe()
      .then((res) => {
        if (this.props.match.params.user_id) {
          return this.props.match.params.user_id;
        } else if (res.resultCode === 0) {
          return res.data.id;
        } else {
          return 2;
        }
      })
      .then((res) => {
        getProfile(res).then((res) => {
          this.props.setProfile(res.data);
          this.props.toggleIsFetching(false);
        });
      });
  }
  componentDidMount() {
    this.setProfile();
  }

  render() {
    return this.props.profile ? <Profile {...this.props} /> : <Preloader />;
  }
}
const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  notFoundAvatar: state.usersPage.notFoundImg,
});

export default connect(mapStateToProps, { setProfile, toggleIsFetching })(withRouter(ProfileContainer));
