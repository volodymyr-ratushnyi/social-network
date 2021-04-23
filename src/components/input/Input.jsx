import React from 'react';
import s from './Input.module.scss';

const Input = (props) => {
  const val = React.createRef();
  const getValueFromInput = () => {
    props.getValueFromInput(val.current.value);
  };
  return (
    <input
      type={props.type}
      className={s[props.cls] + ' form-control'}
      placeholder={props.holder}
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
      ref={val}
      onChange={getValueFromInput}
    />
  );
};

export default Input;
