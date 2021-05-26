import React from 'react';
import { connect } from 'react-redux';
import { selectDialogActionCreator, sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Messages from './Messages';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectDialog: (dialog_id) => {
      dispatch(selectDialogActionCreator(dialog_id));
    },
    updateNewMessageText: (val) => {
      dispatch(updateNewMessageTextActionCreator(val));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
