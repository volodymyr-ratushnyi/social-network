import React from 'react';
import s from './Input.module.scss';

const Input = (props) => {
  const getValueFromInput = (e) => props.getValueFromInput(e.target.value);
  return (
    <input
      type={props.type}
      className={s[props.cls] + ' form-control'}
      placeholder={props.holder}
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
      onChange={getValueFromInput}
      onBlur={props.onBlur}
      value={props.value}
      autoFocus={props.autoFocus}
    />
  );
};

export default Input;
