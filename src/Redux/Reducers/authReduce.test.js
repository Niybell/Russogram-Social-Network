import authReduce, { initialActionCreator, logOutActionCreator, setAuthDataActionCreator } from "./authReduce"

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  initializedAccount: false
}

it("correct set user data", () => {
  const newState = authReduce(initialState, setAuthDataActionCreator({ id: 1000, login: "TEST", email: "TEST" }));
  expect(newState).toStrictEqual({
    id: 1000,
    login: "TEST",
    email: "TEST",
    isAuth: true,
    initializedAccount: true
  })
})
it("correct log out", () => {
  const newState = authReduce(initialState, logOutActionCreator());
  expect(newState).toStrictEqual({
    id: null,
    login: null,
    email: null,
    isAuth: false,
    initializedAccount: true
  })
})
it("correct initial", () => {
  const newState = authReduce(initialState, initialActionCreator());
  expect(newState.initializedAccount).toBe(true);
})