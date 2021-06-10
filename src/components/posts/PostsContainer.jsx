import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addComment, addPost, updateCommentText, updateTextAddPost } from '../../redux/newsfeed-reducer';
import Posts from './Posts';

const mapStateToProps = (state) => {
  return {
    newsfeedPage: state.newsfeedPage,
  };
};
export default compose(connect(mapStateToProps, { updateTextAddPost, addPost, updateCommentText, addComment }), withAuthRedirect)(Posts);
