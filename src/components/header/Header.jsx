import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../common/button/Button';
import s from './Header.module.scss';
import logo from '../../assets/images/logo.png';
const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <img src={logo} alt="" />
        {props.id ? (
          <NavLink to="/login">
            <Button text="SIGN OUT" cls="blue" onClick={props.signOut} />
          </NavLink>
        ) : (
          <NavLink to="/login">
            <Button text="SIGN IN" cls="blue" />
          </NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
