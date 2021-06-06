import React from 'react';
import s from './ProfileInfo.module.scss';
const ProfileInfo = (props) => {
  const contacts = [];
  for (const property in props.profile.contacts) {
    contacts.push(
      <li className={s.contact} key={property}>
        {property + ': ' + props.profile.contacts[property]}
      </li>
    );
  }
  return (
    <main className={s.wrapper}>
      <header className={s.header}>
        <img src={props.profile.photos.large ? props.profile.photos.large : props.notFoundAvatar} alt="" className={s.avatar} />
        {props.profile.lookingForAJob && <h1>LOOKKING FOR A JOB</h1>}
      </header>
      <p className={s.aboutMe}>{props.profile.aboutMe}</p>
      <section className={s.info}>
        <div className={`${s.discription} col-md-6`}>
          <h2>{props.profile.fullName}</h2>
          <h3>{props.profile.lookingForAJobDescription}</h3>
        </div>
        <div className={`${s.contacts} col-md-6`}>
          <h4>Contacts:</h4>
          <ul>{contacts}</ul>
        </div>
      </section>
    </main>
  );
};
export default ProfileInfo;
