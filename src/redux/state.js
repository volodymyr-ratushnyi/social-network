let store = {
  renderEntireTree() {},
  subscribe(observer) {
    this.renderEntireTree = observer;
  },
  addPost(text) {
    let post = {
      post_id: 2,
      user: this._state.dataForMe,
      graphic: 'Only text',
      url: undefined,
      text: text,
      time: 'now',
      likes: 0,
      dislikes: 0,
      comments: [],
    };
    this._state.posts.push(post);
    this.renderEntireTree();
  },
  addComment(text, post_id) {
    debugger;
    let comment = {
      comment_id: 3,
      user: this._state.dataForMe,
      text: text,
    };
    this._state.posts.find((post) => post.post_id === post_id).comments.push(comment);
    this.renderEntireTree();
  },
  getState() {
    return this._state;
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
        url:
          'data:image/jpeg;base64,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',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quaerat est quidem adipisci a, numquam nesciunt vero necessitatibus exercitationem id sequi, maiores corporis quibusdam. Neque minus sunt corporis natus culpa ex, labore molestiae sit fugiat quae, soluta id quis eveniet maiores, ab atque ipsum. Ad cumque repellat dicta unde reprehenderit illo veritatis id ratione! Officiis accusamus ipsam iure perferendis.',
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
            text:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quaerat est quidem adipisci a, numquam nesciunt vero necessitatibus exercitationem id sequi, maiore',
          },
          {
            comment_id: 2,
            user: {
              user_id: 3,
              firstNname: 'Mamche',
              lastName: 'Mamche',
              following: 'following',
              avatar:
                'https://c0.klipartz.com/pngpicture/444/422/sticker-png-trollface-internet-troll-troll-face-rage-comic-others-miscellaneous-face.png',
            },
            text:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quaerat est quidem adipisci a, numquam nesciunt vero necessitatibus exercitationem id sequi, maiore',
          },
        ],
      },
    ],

    //Dialogs
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
            message: 'Aleykum salam',
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
};

export default store;
