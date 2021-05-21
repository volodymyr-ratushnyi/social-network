import React from 'react';
import Posts from '../posts/Posts';
// import s from './Newsfeed.module.scss';
const Newsfeed = (props) => {
  return (
    <div>
      <Posts newsfeedPage={props.newsfeedPage} dataForMe={props.dataForMe} dispatch={props.dispatch} />
    </div>
  );
};
export default Newsfeed;
