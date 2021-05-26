import React from 'react';
import { connect } from 'react-redux';
import {
  addCommentActionCreator,
  addPostActionCreator,
  updateCommentTextActionCreator,
  updateTextAddPostActionCreator,
} from '../../redux/newsfeed-reducer';
import Posts from './Posts';

const mapStateToProps = (state) => {
  return {
    newsfeedPage: state.newsfeedPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateTextAddPost: (text) => {
      dispatch(updateTextAddPostActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateCommentText: (text, post_id) => {
      dispatch(updateCommentTextActionCreator(text, post_id));
    },
    addComment: (post_id) => {
      dispatch(addCommentActionCreator(post_id));
    },
  };
};
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
