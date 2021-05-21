import React from 'react';
import { NavLink } from 'react-router-dom';
import { selectDialogCreator } from '../../../redux/dialogs-reducer';
import s from './Dialog.module.scss';

const Dialog = (props) => {
  const selectDialog = () => {
    props.dispatch(selectDialogCreator(props.id));
    console.log();
  };
  return (
    <NavLink to={'/messages/' + props.id} className={s.dialog} activeClassName={s.activeDialog} onClick={selectDialog}>
      <li>
        <img
          src="https://c0.klipartz.com/pngpicture/444/422/sticker-png-trollface-internet-troll-troll-face-rage-comic-others-miscellaneous-face.png"
          alt=""
        />
        <div className={s.dialogInfo}>
          {' '}
          <div className={s.row}>
            <span>
              {props.firstName} {props.lastName}
            </span>
            <span> {props.time}</span>
          </div>
          <div className={s.row}>
            <span>{props.lastMessage}</span>
            <span>{props.status}</span>
          </div>
        </div>
      </li>
    </NavLink>
  );
};

export default Dialog;
