const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const SELECT_DIALOG = 'SELECT-DIALOG';
const dialogsReducer = (state, action, dataForMe) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    case SEND_MESSAGE:
      if (state.selected_id === 0) return state;
      let dialog = state.dialogs[state.selected_id - 1];
      let message = { message_id: dialog.messages.length + 1, message: state.newMessageText, time: 'now', status: 'not ok' };
      dialog.messages.push(message);
      state.messages = dialog.messages;
      state.newMessageText = '';
      return state;
    case SELECT_DIALOG:
      state.messages = state.dialogs[action.dialog_id - 1].messages;
      state.selected_id = action.dialog_id;
      return state;
    default:
      return state;
  }
};
export const updateNewMessageTextCreator = (newText) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: newText });
export const selectDialogCreator = (dialog_id) => ({ type: SELECT_DIALOG, dialog_id: dialog_id });
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export default dialogsReducer;
