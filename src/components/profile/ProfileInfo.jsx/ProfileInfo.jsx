import React from 'react';
import s from './ProfileInfo.module.scss';
import ProfileStatus from './ProfileStatus';
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
      <div className={s.status}>
        {props.profile.userId === props.myId ? (
          <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        ) : (
          <span>{props.status}</span>
        )}
      </div>
      <p className={s.aboutMe}>{props.profile.aboutMe}</p>

      <section className={s.info}>
        <div className={`${s.discription} col-md-6`}>
          <h2>{props.profile.fullName}</h2>
          <p className={s.aboutMe}>{props.profile.lookingForAJobDescription}</p>
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
