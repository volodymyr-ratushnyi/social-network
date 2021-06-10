import { connect } from 'react-redux';
import Login from './Login';
import { getEmail, getPassword } from '../../redux/auth-reducer';
import { signIn } from '../../redux/auth-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => ({
  email: state.auth.myEmail,
  password: state.auth.myPassword,
});
export default compose(withAuthRedirect, connect(mapStateToProps, { getEmail, getPassword, signIn }))(Login);
