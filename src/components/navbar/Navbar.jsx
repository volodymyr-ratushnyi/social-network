import React from 'react';
import s from './Navbar.module.scss';
import { CgFeed } from 'react-icons/cg';
import { SiWechat } from 'react-icons/si';
import { ImImages } from 'react-icons/im';
import { FcMusic } from 'react-icons/fc';
import { IoMdSettings } from 'react-icons/io';
import Online from '../online/Online';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <CgFeed className={s.icon} />
          <NavLink to="/newsfeed" activeClassName={s.activeLink} className={s.link}>
            My newsfeed
          </NavLink>
        </li>
        <li>
          <ImImages className={s.icon} />
          <NavLink to="/users" activeClassName={s.activeLink} className={s.link}>
            People
          </NavLink>
        </li>
        <li>
          <SiWechat className={s.icon} />
          <NavLink to="/messages" activeClassName={s.activeLink} className={s.link}>
            Message
          </NavLink>
        </li>
        <li>
          <ImImages className={s.icon} />
          <NavLink to="#" activeClassName={s.activeLink} className={s.link}>
            Images
          </NavLink>
        </li>
        <li>
          <FcMusic className={s.icon} />
          <NavLink to="#" activeClassName={s.activeLink} className={s.link}>
            Music
          </NavLink>
        </li>
        <li>
          <IoMdSettings className={s.icon} />
          <NavLink to="#" activeClassName={s.activeLink} className={s.link}>
            Settings
          </NavLink>
        </li>
      </ul>
      <Online />
    </nav>
  );
};
export default Navbar;
