import dialogsReducer from './dialogs-reducer';
import newsfeedReducer from './newsfeed-reducer';
let store = {
  renderEntireTree() {},
  subscribe(observer) {
    this.renderEntireTree = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    dialogsReducer(this._state.dialogsPage, action, this._state.dataForMe);
    newsfeedReducer(this._state.newsfeedPage, action, this._state.dataForMe);
    this.renderEntireTree();
  },

  _state: {
    //Data for me
    dataForMe: {
      user_id: 1,
      firstName: 'First-name',
      lastName: 'Last-name',
      following: 'following',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Ir1TFC-C5PCXXHdflLNPwLD0octIbvSjfw&usqp=CAU',
    },

    //Posts
    newsfeedPage: {
      posts: [
        {
          post_id: 1,
          user: {
            user_id: 2,
            firstName: 'Ivan',
            lastName: 'Ivanov',
            following: 'following',
            avatar:
              'https://c0.klipartz.com/pngpicture/444/422/sticker-png-trollface-internet-troll-troll-face-rage-comic-others-miscellaneous-face.png',
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
    },
    //Dialogs
    dialogsPage: {
      newMessageText: '',
      selected_id: 0,
      messages: [],
      dialogs: [
        {
          dialog_id: 1,
          firstName: 'Jhon',
          lastName: 'Smith',
          messages: [
            {
              message_id: 1,
              message: 'Good afternoon',
              time: 'an hour ago',
              status: 'ok',
            },
            {
              message_id: 2,
              message: 'How are you?',
              time: 'an hour ago',
              status: 'ok',
            },
          ],
        },
        {
          dialog_id: 2,
          firstName: 'Pavlo',
          lastName: 'Pavlov',
          messages: [
            {
              message_id: 1,
              message: 'Good time',
              time: 'an hour ago',
              status: 'ok',
            },
            {
              message_id: 2,
              message: 'Its ok',
              time: 'an hour ago',
              status: 'ok',
            },
          ],
        },
        {
          dialog_id: 3,
          firstName: 'Marik',
          lastName: 'Marikov',
          messages: [
            {
              message_id: 1,
              message: 'Message2',
              time: 'an ten min ago',
              status: 'not ok',
            },
            {
              message_id: 2,
              message: 'Message22',
              time: 'an nine min ago',
              status: 'not ok',
            },
          ],
        },
        {
          dialog_id: 4,
          firstName: 'Oleh',
          lastName: 'Olehov',
          messages: [
            {
              message_id: 1,
              message: 'Hello',
              time: 'an five min ago',
              status: 'not ok',
            },
            {
              message_id: 2,
              message: 'How are you?',
              time: 'an four min ago',
              status: 'not ok',
            },
          ],
        },
        {
          dialog_id: 5,
          firstName: 'Petro',
          lastName: 'Petrov',
          messages: [
            {
              message_id: 1,
              message: 'Good morning',
              time: 'an four min ago',
              status: 'not ok',
            },
            {
              message_id: 2,
              message: 'Would you like some tea?',
              time: 'an four min ago',
              status: 'not ok',
            },
          ],
        },
        {
          dialog_id: 6,
          firstName: 'Ivan',
          lastName: 'Ivanov',
          messages: [
            {
              message_id: 1,
              message: 'Good morning',
              time: 'an one min ago',
              status: 'not ok',
            },
            {
              message_id: 2,
              message: 'I feel good',
              time: 'an one min ago',
              status: 'not ok',
            },
          ],
        },
      ],
    },
  },
};
export default store;
