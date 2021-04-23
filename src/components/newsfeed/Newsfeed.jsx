import React from 'react';
import Posts from '../posts/Posts';
// import s from './Newsfeed.module.scss';
const Newsfeed = (props) => {
  return (
    <div>
      <Posts posts={props.posts} dataForMe={props.dataForMe} addPost={props.addPost} addComment={props.addComment} />
    </div>
  );
};
export default Newsfeed;
