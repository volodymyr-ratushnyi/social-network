import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../api/api';
import Login from './Login';
import { getEmail, getPassword } from '../../redux/auth-reducer';
import { setMe } from '../../redux/auth-reducer';

class LoginContainer extends React.Component {
  signIn = () => {
    login(this.props.email, this.props.password).then((res) => {
      if (res.resultCode === 0) {
        this.props.setMe(res.data.userId, null, this.props.email);
      }
    });
  };
  render() {
    return <Login getEmail={this.props.getEmail} getPassword={this.props.getPassword} signIn={this.signIn} />;
  }
}
const mapStateToProps = (state) => ({
  email: state.auth.myEmail,
  password: state.auth.myPassword,
});
export default connect(mapStateToProps, { getEmail, getPassword, setMe })(LoginContainer);
