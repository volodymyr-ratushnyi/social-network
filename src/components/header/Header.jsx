import React from 'react';
import s from './Header.module.scss';
const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <img src="images/logo.png" alt="" />
      </div>
    </header>
  );
};
export default Header;
