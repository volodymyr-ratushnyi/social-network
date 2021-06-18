import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from '../common/button/Button';
import styleControl from '../common/forms-control/FormsControl.module.scss';
import styleButton from '../common/button/Button.module.scss';
import s from './Login.module.scss';
import { Input } from '../common/forms-control/FormsControl';
import { maxLength, required } from '../../utils/validators/validators';
const maxLength50 = maxLength(50);
const LoginForm = (props) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <div className={s.item}>
        <label>Email:</label>
        <Field type="email" name="email" component={Input} placeholder="Enter your email" validate={[required, maxLength50]} />
      </div>
      <div className={s.item}>
        <label>Password:</label>
        <Field type="password" name="password" component={Input} placeholder="Enter your password" validate={[required, maxLength50]} />
      </div>
      <div style={{ minHeight: '20px' }}>{props.error && <div className={styleControl.errorText}>{props.error}</div>}</div>
      <div className={s.buttons}>
        <button className={'btn btn-primary ' + styleButton.blue}>SIGN IN</button>
        <a href="https://social-network.samuraijs.com/signUp" target="_blank" rel="noreferrer">
          <Button text="SIGN UP" cls="blue" />
        </a>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login',
})(LoginForm);

const Login = (props) => {
  return <LoginReduxForm onSubmit={props.signIn} />;
};

export default Login;
