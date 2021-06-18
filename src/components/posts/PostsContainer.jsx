import { connect } from 'react-redux';
import { compose } from 'redux';
import { reset } from 'redux-form';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addComment, addPost } from '../../redux/newsfeed-reducer';
import Posts from './Posts';

const mapStateToProps = (state) => {
  return {
    newsfeedPage: state.newsfeedPage,
  };
};
export default compose(connect(mapStateToProps, { addPost, addComment, reset }), withAuthRedirect)(Posts);
