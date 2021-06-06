import React from 'react';
import s from './Button.module.scss';
const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className={
        'btn btn-primary ' +
        props.cls
          .split(' ')
          .map((c) => s[c])
          .join(' ')
      }
      disabled={props.disabled ? props.disabled : false}
    >
      {props.text}
    </button>
  );
};

export default Button;
