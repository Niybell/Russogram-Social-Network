import { followAPI, usersAPI } from "../../Api/api";

const SET_IS_FETCHING = "SET-IS-FETCHING"
const SET_ONLY_FRIENDS = "SET-ONLY-FRIENDS"
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const SET_TERM = "SET-TERM";

const initialState = {
  users: [
  ],
  totalCount: 0,
  currentPage: 1,
  pageSize: 20,
  isFetching: false,
  onlyFriends: false,
  term: ""
}
const usersReduce = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      const stateCopy = { ...state };
      stateCopy.users = [...state.users];
      stateCopy.users = stateCopy.users.map(user => {
        if (user.id === action.id) user.followed = true;
        return user;
      })
      return stateCopy;
    }
    case UNFOLLOW: {
      const stateCopy = { ...state };
      stateCopy.users = [...state.users];
      stateCopy.users = stateCopy.users.map(user => {
        if (user.id === action.id) user.followed = false;
        return user;
      })
      return stateCopy;
    }
    case SET_USERS: {
      const stateCopy = { ...state };
      stateCopy.users = [...action.users];
      return stateCopy;
    }
    case SET_CURRENT_PAGE: return { ...state, currentPage: action.page }
    case SET_TOTAL_COUNT: return { ...state, totalCount: action.count }
    case SET_IS_FETCHING: return { ...state, isFetching: action.fetching }
    case SET_ONLY_FRIENDS: return { ...state, onlyFriends: action.only }
    case SET_TERM: return { ...state, term: action.term }
    default: return state
  }
}

export const followActionCreator = (id) => {
  return {
    type: FOLLOW,
    id
  };
}
export const unfollowActionCreator = (id) => {
  return {
    type: UNFOLLOW,
    id
  };
}
export const setUsersActionCreator = (users) => {
  return {
    type: SET_USERS,
    users
  };
}
export const setCurrentPageActionCreator = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    page
  };
}
export const setTermActionCreator = (term) => {
  return {
    type: SET_TERM,
    term
  }
}
export const setTotalCountActionCreator = (count) => {
  return {
    type: SET_TOTAL_COUNT,
    count
  };
}
export const setIsFetchingActionCreator = (fetching) => {
  return {
    type: SET_IS_FETCHING,
    fetching
  };
}
export const setOnlyFriendsActionCreator = (only) => {
  return {
    type: SET_ONLY_FRIENDS,
    only
  };
}

export const getUsers = (pageSize, currentPage, isOnlyFriends, term = "") => async (dispatch) => {
  dispatch(setIsFetchingActionCreator(true));
  const res = await usersAPI.getUsers({ pageSize, currentPage, isOnlyFriends, term })

  dispatch(setIsFetchingActionCreator(false));
  dispatch(setUsersActionCreator(res.items));
  dispatch(setTotalCountActionCreator(res.totalCount));
}

export const follow = (id) => async (dispatch) => {
  const res = await followAPI.postFollow(id);
  if (res.resultCode === 0) {
    dispatch(followActionCreator(id));
  }
}
export const unfollow = (id) => async (dispatch) => {
  const res = await followAPI.deleteFollow(id);
  if (res.resultCode === 0) {
    dispatch(unfollowActionCreator(id));
  }
}
export default usersReduce;