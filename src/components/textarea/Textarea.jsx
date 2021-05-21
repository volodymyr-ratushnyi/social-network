import React from 'react';
import s from './Textarea.module.scss';

const Textarea = (props) => {
  const getValueFromInput = (e) => {
    props.getValueFromInput(e.target.value);
  };
  return (
    <textarea
      value={props.value}
      className={s[props.cls] + ' ' + s[props.cls1] + ' form-control'}
      placeholder={props.holder}
      onChange={getValueFromInput}
    ></textarea>
  );
};
export default Textarea;
