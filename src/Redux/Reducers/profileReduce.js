import { profileAPI } from "../../Api/api"

const ADD_POST = "ADD-POST";
const SET_PROFILE = "SET-PROFILE";
const SET_STATUS = "SET-STATUS";

const initialState = {
  profile: null,
  status: "",
  postsData: {
    posts: [
      {
        id: 1,
        author: "Насонов Михаил",
        message: `Мой первый пост!`,
        date: "01.12.2022",
        likesCount: "13",
        dislikesCount: "0",
      }
    ],
  },
}
const profileReduce = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const id = state.postsData.posts[state.postsData.posts.length - 1].id + 1;
      const newPost = {
        id: id,
        author: "Насонов Михаил",
        message: action.message,
        date: new Date().toLocaleDateString(),
        likesCount: "0",
        dislikesCount: "0",
      }
      const stateCopy = { ...state };
      stateCopy.postsData.posts = [...state.postsData.posts, newPost];
      return stateCopy;
    }
    case SET_PROFILE: {
      const stateCopy = { ...state, profile: action.profile };
      return stateCopy;
    }
    case SET_STATUS: {
      const stateCopy = { ...state, status: action.status };
      return stateCopy;
    }
    default: {
      return state;
    }
  }
}
export const addPostActionCreator = (message) => {
  return {
    type: ADD_POST,
    message
  };
}
export const setProfileActionCreator = (profile) => {
  return {
    type: SET_PROFILE,
    profile
  };
}
export const setStatusActionCreator = (status) => {
  return {
    type: SET_STATUS,
    status
  };
}

export const getProfile = (id) => async (dispatch) => {
  const res = await profileAPI.getProfile(id);
  dispatch(setProfileActionCreator(res));
}

export const getProfileStatus = (id) => async (dispatch) => {
  const res = await profileAPI.getProfileStatus(id);
  dispatch(setStatusActionCreator(res));
}
export const updateProfileStatus = (status) => async (dispatch) => {
  const res = await profileAPI.putProfileStatus(status);
  if (res.resultCode === 0) {
    dispatch(setStatusActionCreator(status));
  }
}
export const updateProfile = (profile) => async (dispatch) => {
  const res = await profileAPI.putProfile(profile)
  if (res.resultCode === 0){
    dispatch(getProfile(profile.userId));
  }
}
export default profileReduce;