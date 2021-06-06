import React from 'react';
import { connect } from 'react-redux';
import { authMe, logout } from '../../api/api';
import Header from './Header';
import { setMe } from '../../redux/auth-reducer';
class HeaderContainer extends React.Component {
  signOut() {
    logout().then((res) => {
      if (res.resultCode === 0) {
        this.props.setMe(null, null, null);
      }
    });
  }
  componentDidMount() {
    authMe().then((res) => {
      if (res.resultCode === 0) {
        let { id, email, login } = res.data;
        this.props.setMe(id, login, email);
      }
    });
  }
  render() {
    return <Header {...this.props} signOut={this.signOut.bind(this)} />;
  }
}
const mapStateToProps = (state) => ({
  id: state.auth.id,
  email: state.auth.email,
  login: state.auth.login,
});
export default connect(mapStateToProps, { setMe })(HeaderContainer);
