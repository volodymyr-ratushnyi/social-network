import { connect } from 'react-redux';
import Login from './Login';
import { signIn } from '../../redux/auth-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => ({});
export default compose(withAuthRedirect, connect(mapStateToProps, { signIn }))(Login);
