import axios from "axios";

const initial = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  headers: {
    "API-KEY": "e7abd454-f1e4-433d-936c-b67ed0d77709"
  }
})

export const usersAPI = {
  getUsers: async (data) => (await initial.get(`/users?count=${data.pageSize}&page=${data.currentPage}&friend=${data.isOnlyFriends}&term=${data.term ? data.term : ""}`)).data
}
export const profileAPI = {
  getProfile: async (usersId) => (await initial.get(`/profile/${usersId}`)).data,
  getProfileStatus: async (usersId) =>  (await initial.get(`/profile/status/${usersId}`)).data,
  putProfileStatus: async (status) => (await initial.put("/profile/status", { status })).data,
  putProfile: async (profile) => (await initial.put("/profile", { 
    userId: profile.userId,
    lookingForAJob: false,
    lookingForAJobDescription: "нет",
    fullName: profile.fullName,
    aboutMe: "null",
    contacts: {
      github: profile.github,
      vk: profile.vk,
      facebook: null,
      instagram: null,
      twitter: null,
      website: profile.website,
      youtube: profile.youtube,
      mainLink: null
    }
  })).data
}
export const authAPI = {
  getAuthMe: async () => (await initial.get(`/auth/me`)).data,
  deleteAuthLogin: async () => (await initial.delete(`/auth/login`)).data,
  postAuthLogin: async (data) => ( await initial.post('/auth/login', {
    email: data.email,
    password: data.password,
    rememberMe: data.rememberMe,
    captcha: data.captcha || null
  })).data
}
export const followAPI = {
  postFollow: async (userId) => (await initial.post(`/follow/${userId}`, {})).data,
  deleteFollow: async (userId) => (await initial.delete(`/follow/${userId}`)).data
}
export const securityAPI = {
  getCaptchaURL: async () => (await initial.get('/security/get-captcha-url')).data.url
}