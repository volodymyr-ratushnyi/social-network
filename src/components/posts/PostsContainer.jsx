import { connect } from 'react-redux';
import { addComment, addPost, updateCommentText, updateTextAddPost } from '../../redux/newsfeed-reducer';
import Posts from './Posts';

const mapStateToProps = (state) => {
  return {
    newsfeedPage: state.newsfeedPage,
  };
};
const PostsContainer = connect(mapStateToProps, { updateTextAddPost, addPost, updateCommentText, addComment })(Posts);

export default PostsContainer;
