import React from 'react';
import NewPost from './new-post/NewPost';
import Post from './post/Post';
import s from './Posts.module.scss';
const Posts = (props) => {
  let posts = props.newsfeedPage.posts.map((post) => (
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
      dataForMe={props.newsfeedPage.dataForMe}
      addComment={props.addComment}
      updateCommentText={props.updateCommentText}
      newCommentText={post.newCommentText}
    />
  ));

  return (
    <div className={s.content}>
      <NewPost dataForMe={props.newsfeedPage.dataForMe} reset={props.reset} addPost={props.addPost} />
      {posts}
    </div>
  );
};
export default Posts;
