import React from 'react';
import Button from '../common/button/Button';
import Input from '../common/input/Input';
import s from './Login.module.scss';

const Login = (props) => {
  const signIn = () => {
    props.signIn(props.email, props.password);
  };
  return (
    <form className={s.form}>
      <label>Email:</label>
      <Input type="text" className="classic" placeholder="Enter your email" getValueFromInput={props.getEmail} />
      <label>Password:</label>
      <Input type="password" className="classic" placeholder="Enter your password" getValueFromInput={props.getPassword} />
      <div>
        <Button text="SIGN IN" cls="blue" onClick={signIn} />
        <a href="https://social-network.samuraijs.com/signUp" target="_blank" rel="noreferrer">
          <Button text="SIGN UP" cls="blue" />
        </a>
      </div>
    </form>
  );
};

export default Login;
