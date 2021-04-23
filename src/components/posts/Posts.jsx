import React from 'react';
import NewPost from './new-post/NewPost';
import Post from './post/Post';
import s from './Posts.module.scss';
const Posts = (props) => {
  let posts = props.posts.map((post) => (
    <Post
      key={post.post_id}
      post_id={post.post_id}
      graphic={post.graphic}
      url={post.url}
      user={post.user}
      text={post.text}
      time={post.time}
      likes={post.likes}
      dislikes={post.dislikes}
      comments={post.comments}
      dataForMe={props.dataForMe}
      addComment={props.addComment}
    />
  ));

  return (
    <div className={s.content}>
      <NewPost dataForMe={props.dataForMe} addPost={props.addPost} />
      {posts}
    </div>
  );
};
export default Posts;
