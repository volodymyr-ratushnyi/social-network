const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const SELECT_DIALOG = 'SELECT-DIALOG';

let initialState = {
  newMessageText: '',
  selected_id: 0,
  messages: [],
  dialogs: [
    {
      dialog_id: '1',
      individualMessageText: '',
      firstName: 'Jhon',
      lastName: 'Smith',
      messages: [
        {
          message_id: 1,
          message: 'Good afternoon',
          time: 'an hour ago',
          status: 'ok',
        },
        {
          message_id: 2,
          message: 'How are you?',
          time: 'an hour ago',
          status: 'ok',
        },
      ],
    },
    {
      dialog_id: '2',
      individualMessageText: '',
      firstName: 'Pavlo',
      lastName: 'Pavlov',
      messages: [
        {
          message_id: 1,
          message: 'Good time',
          time: 'an hour ago',
          status: 'ok',
        },
        {
          message_id: 2,
          message: 'Its ok',
          time: 'an hour ago',
          status: 'ok',
        },
      ],
    },
    {
      dialog_id: '3',
      individualMessageText: '',
      firstName: 'Marik',
      lastName: 'Marikov',
      messages: [
        {
          message_id: 1,
          message: 'Message2',
          time: 'an ten min ago',
          status: 'not ok',
        },
        {
          message_id: 2,
          message: 'Message22',
          time: 'an nine min ago',
          status: 'not ok',
        },
      ],
    },
    {
      dialog_id: '4',
      individualMessageText: '',
      firstName: 'Oleh',
      lastName: 'Olehov',
      messages: [
        {
          message_id: 1,
          message: 'Hello',
          time: 'an five min ago',
          status: 'not ok',
        },
        {
          message_id: 2,
          message: 'How are you?',
          time: 'an four min ago',
          status: 'not ok',
        },
      ],
    },
    {
      dialog_id: '5',
      individualMessageText: '',
      firstName: 'Petro',
      lastName: 'Petrov',
      messages: [
        {
          message_id: 1,
          message: 'Good morning',
          time: 'an four min ago',
          status: 'not ok',
        },
        {
          message_id: 2,
          message: 'Would you like some tea?',
          time: 'an four min ago',
          status: 'not ok',
        },
      ],
    },
    {
      dialog_id: '6',
      individualMessageText: '',
      firstName: 'Ivan',
      lastName: 'Ivanov',
      messages: [
        {
          message_id: 1,
          message: 'Good morning',
          time: 'an one min ago',
          status: 'not ok',
        },
        {
          message_id: 2,
          message: 'I feel good',
          time: 'an one min ago',
          status: 'not ok',
        },
      ],
    },
  ],
};

const dialogsReducer = (state = initialState, action, dataForMe) => {
  const SELECT_DIALOG_KEY = 'select_dialog_id';
  const dialog_id = localStorage.getItem(SELECT_DIALOG_KEY);
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      window.state = state;
      return {
        ...state,
        dialogs: state.dialogs.map((dialog) => (dialog.dialog_id === dialog_id ? { ...dialog, individualMessageText: action.newText } : dialog)),
        newMessageText: action.newText,
      };
    case SEND_MESSAGE:
      const messagesForFind = state.dialogs.find((dialog) => dialog.dialog_id === dialog_id).messages;
      const message = {
        message_id: messagesForFind.length + 1,
        message: state.newMessageText,
        time: 'now',
        status: 'not ok',
      };
      const messages = [...messagesForFind];
      return {
        ...state,
        newMessageText: '',
        dialogs: state.dialogs.map((dialog) => {
          if (dialog.dialog_id === dialog_id) {
            messages.push(message);
            return { ...dialog, messages: [...dialog.messages, message], individualMessageText: '' };
          }
          return dialog;
        }),
        messages: messages,
      };
    case SELECT_DIALOG:
      localStorage.setItem(SELECT_DIALOG_KEY, action.dialog_id);
      return {
        ...state,
        messages: state.dialogs.find((dialog) => dialog.dialog_id === action.dialog_id).messages,
        newMessageText: state.dialogs.find((dialog) => dialog.dialog_id === action.dialog_id).individualMessageText,
      };
    default:
      return state;
  }
};
export const updateNewMessageText = (newText) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: newText });
export const selectDialog = (dialog_id) => ({ type: SELECT_DIALOG, dialog_id: dialog_id });
export const sendMessage = () => ({ type: SEND_MESSAGE });
export default dialogsReducer;
