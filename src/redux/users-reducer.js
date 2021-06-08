import { usersAPI } from '../api/api';

const SWITCH_FOLLOW = 'SWITCH-FOLLOW';
const SET_USERS = 'SET-USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE-FOLLOWING-PROGRESS';
let initialState = {
  users: [
    // {
    //   user_id: '1',
    //   firstName: 'Oleh',
    //   lastName: 'S.',
    //   avatar: 'https://c0.klipartz.com/pngpicture/444/422/sticker-png-trollface-internet-troll-troll-face-rage-comic-others-miscellaneous-face.png',
    //   profession: 'Software Engineer',
    //   location: { city: 'Lviv', country: 'Ukraine' },
    //   followed: false,
    // },
    // {
    //   user_id: '2',
    //   firstName: 'Olga',
    //   lastName: 'P.',
    //   avatar: 'https://c0.klipartz.com/pngpicture/444/422/sticker-png-trollface-internet-troll-troll-face-rage-comic-others-miscellaneous-face.png',
    //   profession: 'Model at Fashion',
    //   location: { city: 'Kyiv', country: 'Ukraine' },
    //   followed: true,
    // },
    // {
    //   user_id: '3',
    //   firstName: 'Olena',
    //   lastName: 'K.',
    //   avatar: 'https://c0.klipartz.com/pngpicture/444/422/sticker-png-trollface-internet-troll-troll-face-rage-comic-others-miscellaneous-face.png',
    //   profession: 'Writer at Newspaper',
    //   location: { city: "Ivano-Frankivs'k", country: 'Ukraine' },
    //   followed: true,
    // },
    // {
    //   user_id: '4',
    //   firstName: 'Oleksandr',
    //   lastName: 'O.',
    //   avatar: 'https://c0.klipartz.com/pngpicture/444/422/sticker-png-trollface-internet-troll-troll-face-rage-comic-others-miscellaneous-face.png',
    //   profession: 'Student',
    //   location: { city: 'Lviv', country: 'Ukraine' },
    //   followed: false,
    // },
    // {
    //   user_id: '5',
    //   firstName: 'Marta',
    //   lastName: 'B.',
    //   avatar: 'https://c0.klipartz.com/pngpicture/444/422/sticker-png-trollface-internet-troll-troll-face-rage-comic-others-miscellaneous-face.png',
    //   profession: 'Barber at Fashion',
    //   location: { city: 'Lviv', country: 'Ukraine' },
    //   followed: true,
    // },
  ],
  notFoundImg: 'https://c0.klipartz.com/pngpicture/444/422/sticker-png-trollface-internet-troll-troll-face-rage-comic-others-miscellaneous-face.png',
  pageSize: 15,
  totalUsersCount: 0,
  totalPagesCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => (user.id === action.user_id ? { ...user, followed: !user.followed } : user)),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
        totalUsersCount: action.totalUsersCount,
        totalPagesCount: Math.ceil(action.totalUsersCount / state.pageSize),
        currentPage: action.currentPage,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter((id) => id !== action.id),
      };
    default:
      return state;
  }
};

export const switchFollowSucces = (user_id) => ({ type: SWITCH_FOLLOW, user_id: user_id });
export const setUsers = (users, totalUsersCount, currentPage) => ({ type: SET_USERS, users, totalUsersCount, currentPage });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, id) => ({ type: TOGGLE_FOLLOWING_PROGRESS, id, isFetching });
export const getUsers =
  (pageSize, locationSearch, p = null) =>
  (dispatch) => {
    let currentPage = 1;
    let count = pageSize;
    currentPage = new URLSearchParams(locationSearch).get('page') ? parseInt(new URLSearchParams(locationSearch).get('page'), 10) : currentPage;
    currentPage = p ? p : currentPage;
    count = new URLSearchParams(locationSearch).get('count') ? parseInt(new URLSearchParams(locationSearch).get('count'), 10) : count;

    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(count, currentPage).then((res) => {
      dispatch(setUsers(res.items, res.totalCount, currentPage));
      dispatch(toggleIsFetching(false));
    });
  };
export const switchFollow = (id) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, id));
  usersAPI.checkFollow(id).then((res) => {
    res
      ? usersAPI.unfollow(id).then((res) => {
          if (res.data.resultCode === 0) {
            dispatch(switchFollowSucces(id));
            dispatch(toggleFollowingProgress(false, id));
          }
        })
      : usersAPI.follow(id).then((res) => {
          if (res.data.resultCode === 0) {
            dispatch(switchFollowSucces(id));
            dispatch(toggleFollowingProgress(false, id));
          }
        });
  });
};
export default usersReducer;
