import React from 'react';
import s from './FormsControl.module.scss';

const FormControl = (element, hasError, meta) => {
  return (
    <div className={s.wrapper}>
      {element}
      {meta.touched && !meta.error && <span className={s.good}>Looks good!</span>}
      {hasError && <span className={s.errorText}>{meta.error}</span>}
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return FormControl(<input {...input} {...props} className={`${s[props.cls]} form-control ${hasError && s.error}`} />, hasError, meta);
};
export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return FormControl(<textarea {...input} {...props} className={`${s[props.cls]} form-control ${hasError && s.error}`} />, hasError, meta);
};
