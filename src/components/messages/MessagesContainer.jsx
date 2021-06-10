import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { selectDialog, sendMessage, updateNewMessageText } from '../../redux/dialogs-reducer';
import Messages from './Messages';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose(connect(mapStateToProps, { selectDialog, updateNewMessageText, sendMessage }), withAuthRedirect)(Messages);
