import profileReduce, {  addPostActionCreator, setProfileActionCreator, setStatusActionCreator } from "./profileReduce"

it('correct add post', () => {
  const initialState = {
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
  let newState = profileReduce(initialState, addPostActionCreator('message'));
  expect(newState.postsData.posts[1]).toStrictEqual({
    id: 2,
    author: "Насонов Михаил",
    message: `message`,
    date: new Date().toLocaleDateString(),
    likesCount: "0",
    dislikesCount: "0",
  })
})
it("correct set profile", () => {
  const initialState = {
    profile: null
  }
  const newState = profileReduce(initialState, setProfileActionCreator({
    id:1000,
    username:"TEST",
    photos: {
      small: "https://wake-url/small/id1000",
      large: "https://wake-url/large/id1000"
    },
    lookingForAJob: false,
    lookingForAJobDescription: "TEST"
  }))
  expect(newState.profile).toStrictEqual({
    id:1000,
    username:"TEST",
    photos: {
      small: "https://wake-url/small/id1000",
      large: "https://wake-url/large/id1000"
    },
    lookingForAJob: false,
    lookingForAJobDescription: "TEST"
  })
})
it("correct set status", () => {
  const initialState = {
    status: null
  } 
  const newState = profileReduce(initialState, setStatusActionCreator("testStatus"))
  expect(newState.status).toBe("testStatus")
})