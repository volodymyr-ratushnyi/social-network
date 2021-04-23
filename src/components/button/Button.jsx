import React from 'react';
import s from './Button.module.scss';
const Button = (props) => {
  return (
    <button onClick={props.onClick} type="button" className={'btn btn-primary ' + s[props.cls]}>
      {props.text}
    </button>
  );
};

export default Button;
