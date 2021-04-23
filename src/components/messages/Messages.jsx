import React from 'react';
import Dialog from './dialog/Dialog';
import Message from './message/Message';
import s from './Messages.module.scss';
import MyMessage from './my-message/MyMessage';

const Messages = (props) => {
  let dialogComponents = props.dialogs.map((dialog) => (
    <Dialog
      name={dialog.name}
      key={`${dialog.dialog_id}`}
      time={dialog.messages[dialog.messages.length - 1].time}
      lastMessage={
        dialog.messages[dialog.messages.length - 1].message.length > 15
          ? dialog.messages[dialog.messages.length - 1].message.substr(0, 15) + '...'
          : dialog.messages[dialog.messages.length - 1].message
      }
      status={dialog.messages[dialog.messages.length - 1].status}
    />
  ));

  return (
    <main className={s.chatRoom}>
      <section className={s.wrapper}>
        <div className={s.dialogs + ' col-md-5'}>{dialogComponents}</div>
        <div className={s.messages + ' col-md-7'}>
          <Message message="Message" />
        </div>
      </section>
      <MyMessage />
    </main>
  );
};

export default Messages;
