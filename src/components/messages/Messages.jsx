import React from 'react';
import Dialog from './dialog/Dialog';
import Message from './message/Message';
import s from './Messages.module.scss';
import MyMessage from './my-message/MyMessage';

const Messages = (props) => {
  let dialogComponents = props.dialogsPage.dialogs.map((dialog) => (
    <Dialog
      selectDialog={props.selectDialog}
      firstName={dialog.firstName}
      lastName={dialog.lastName}
      key={`${dialog.dialog_id}`}
      id={dialog.dialog_id}
      time={dialog.messages[dialog.messages.length - 1].time}
      lastMessage={
        dialog.messages[dialog.messages.length - 1].message.length > 15
          ? dialog.messages[dialog.messages.length - 1].message.substr(0, 15) + '...'
          : dialog.messages[dialog.messages.length - 1].message
      }
      status={dialog.messages[dialog.messages.length - 1].status}
    />
  ));

  let messageComponents = props.dialogsPage.messages.map((message) => (
    <Message key={`${message.message_id}`} message={message.message} time={message.time} message_id={message.message_id} status={message.status} />
  ));

  return (
    <main className={s.chatRoom}>
      <section className={s.wrapper}>
        <div className={'col-md-5 ' + s.dialogs}>{dialogComponents}</div>
        <div className={'col-md-7 ' + s.messages}>{messageComponents}</div>
      </section>
      <MyMessage
        updateNewMessageText={props.updateNewMessageText}
        sendMessage={props.sendMessage}
        newMessageText={props.dialogsPage.newMessageText}
      />
    </main>
  );
};

export default Messages;
