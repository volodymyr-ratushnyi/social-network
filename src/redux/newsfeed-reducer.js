const ADD_POST = 'ADD-POST';
const ADD_COMMENT = 'ADD-COMMENT';
const UPDATE_COMMENT = 'UPDATE-COMMENT';
const newsfeedReducer = (state, action, dataForMe) => {
  switch (action.type) {
    case ADD_POST:
      if (action.text === '') return state;
      let post = {
        post_id: state.posts[state.posts.length - 1].post_id + 1,
        user: dataForMe,
        graphic: 'Only text',
        url: undefined,
        text: action.text,
        time: 'now',
        likes: 0,
        dislikes: 0,
        comments: [],
        newCommentText: '',
      };
      state.posts.push(post);
      return state;
    case ADD_COMMENT:
      const postForAdd = state.posts.find((post) => post.post_id === action.post_id);
      if (postForAdd.newCommentText === '') return state;
      let comment = {
        comment_id: 3,
        user: dataForMe,
        text: postForAdd.newCommentText,
      };
      postForAdd.comments.push(comment);
      postForAdd.newCommentText = '';
      return state;
    case UPDATE_COMMENT:
      state.posts.find((post) => post.post_id === action.post_id).newCommentText = action.text;
      return state;
    default:
      return state;
  }
};
export const updateCommentCreator = (text, post_id) => ({ type: UPDATE_COMMENT, text: text, post_id: post_id });
export const addCommentCreator = (post_id) => ({ type: ADD_COMMENT, post_id: post_id });
export default newsfeedReducer;
