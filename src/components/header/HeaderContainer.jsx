import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getMe, signOut } from '../../redux/auth-reducer';
class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getMe();
  }
  render() {
    return <Header {...this.props} signOut={this.props.signOut} />;
  }
}
const mapStateToProps = (state) => ({
  id: state.auth.id,
  email: state.auth.email,
  login: state.auth.login,
});
export default connect(mapStateToProps, { getMe, signOut })(HeaderContainer);
