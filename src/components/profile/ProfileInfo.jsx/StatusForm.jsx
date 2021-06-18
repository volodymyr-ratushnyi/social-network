import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './ProfileInfo.module.scss';
import { Input } from '../../common/forms-control/FormsControl';
const StatusForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name="status" component={Input} type="text" className="classic" onBlur={props.switchEditMode} autoFocus={true} />
    </form>
  );
};
const StatusReduxForm = (props) => {
  const PassStatusReduxForm = reduxForm({ form: 'status', initialValues: { status: props.status } })(StatusForm);
  return <PassStatusReduxForm {...props} />;
};
export default StatusReduxForm;
