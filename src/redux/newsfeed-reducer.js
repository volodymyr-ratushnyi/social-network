const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_ADD_POST = 'UPDATE_TEXT_ADD_POST';
const ADD_COMMENT = 'ADD-COMMENT';
const UPDATE_TEXT_COMMENT = 'UPDATE-TEXT-COMMENT';

let initialState = {
  newTextForAddPost: '',
  dataForMe: {
    user_id: 1,
    firstName: 'First-name',
    lastName: 'Last-name',
    following: 'following',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Ir1TFC-C5PCXXHdflLNPwLD0octIbvSjfw&usqp=CAU',
  },
  posts: [
    {
      post_id: 1,
      user: {
        user_id: 2,
        firstName: 'Ivan',
        lastName: 'Ivanov',
        following: 'following',
        avatar: 'https://c0.klipartz.com/pngpicture/444/422/sticker-png-trollface-internet-troll-troll-face-rage-comic-others-miscellaneous-face.png',
      },
      graphic: 'img',
      url: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quaerat est quidem adipisci a, numquam nesciunt vero necessitatibus exercitationem id sequi, maiores corporis quibusdam. Neque minus sunt corporis natus culpa ex, labore molestiae sit fugiat quae, soluta id quis eveniet maiores, ab atque ipsum. Ad cumque repellat dicta unde reprehenderit illo veritatis id ratione! Officiis accusamus ipsam iure perferendis.',
      time: 'Published a photo about 3 mins ago',
      likes: 0,
      dislikes: 0,
      comments: [
        {
          comment_id: 1,
          user: {
            user_id: 2,
            firstName: 'Petro',
            lastName: 'Petrov',
            following: 'following',
            avatar:
              'https://c0.klipartz.com/pngpicture/444/422/sticker-png-trollface-internet-troll-troll-face-rage-comic-others-miscellaneous-face.png',
          },
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quaerat est quidem adipisci a, numquam nesciunt vero necessitatibus exercitationem id sequi, maiore',
        },
        {
          comment_id: 2,
          user: {
            user_id: 3,
            firstNname: 'Jhon',
            lastName: 'Paterson',
            following: 'following',
            avatar:
              'https://c0.klipartz.com/pngpicture/444/422/sticker-png-trollface-internet-troll-troll-face-rage-comic-others-miscellaneous-face.png',
          },
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quaerat est quidem adipisci a, numquam nesciunt vero necessitatibus exercitationem id sequi, maiore',
        },
      ],
      newCommentText: '',
    },
  ],
};

const newsfeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      if (state.newTextForAddPost === '') return state;
      let post = {
        post_id: state.posts[state.posts.length - 1].post_id + 1,
        user: state.dataForMe,
        graphic: 'Only text',
        url: undefined,
        text: state.newTextForAddPost,
        time: 'now',
        likes: 0,
        dislikes: 0,
        comments: [],
        newCommentText: '',
      };
      return { ...state, posts: [...state.posts, post], newTextForAddPost: '' };
    case UPDATE_TEXT_ADD_POST:
      return { ...state, newTextForAddPost: action.text };
    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.post_id === action.post_id && post.newCommentText !== '') {
            return {
              ...post,
              comments: [
                ...post.comments,
                {
                  comment_id: post.comments.length + 1,
                  user: state.dataForMe,
                  text: post.newCommentText,
                },
              ],
              newCommentText: '',
            };
          }
          return post;
        }),
      };
    case UPDATE_TEXT_COMMENT:
      return { ...state, posts: state.posts.map((post) => (post.post_id === action.post_id ? { ...post, newCommentText: action.text } : post)) };
    default:
      return state;
  }
};
export const updateTextAddPost = (text) => ({ type: UPDATE_TEXT_ADD_POST, text: text });
export const addPost = () => ({ type: ADD_POST });
export const updateCommentText = (text, post_id) => ({ type: UPDATE_TEXT_COMMENT, text: text, post_id: post_id });
export const addComment = (post_id) => ({ type: ADD_COMMENT, post_id: post_id });
export default newsfeedReducer;
