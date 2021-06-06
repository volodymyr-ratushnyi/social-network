import { connect } from 'react-redux';
import { selectDialog, sendMessage, updateNewMessageText } from '../../redux/dialogs-reducer';
import Messages from './Messages';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
const MessagesContainer = connect(mapStateToProps, { selectDialog, updateNewMessageText, sendMessage })(Messages);
export default MessagesContainer;
