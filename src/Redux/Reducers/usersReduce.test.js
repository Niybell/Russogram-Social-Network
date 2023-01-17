import usersReduce, { followActionCreator, setCurrentPageActionCreator, setIsFetchingActionCreator, setOnlyFriendsActionCreator, setTermActionCreator, setTotalCountActionCreator, setUsersActionCreator, unfollowActionCreator } from "./usersReduce"

// Unit tests utils ---------------------------------------

const unitTestSetSomethingInt = (param, ActionCreator, testName) => {
  it(`${testName}`, () => {
    const initialState = {}
    initialState[param] = 1;
    const newState = usersReduce(initialState, ActionCreator(10));
    expect(newState[param]).toBe(10);
  })
} 
const unitTestSetSomethingBool = (param, ActionCreator, testName) => {
  it(`${testName}`, () => {
    const initialState = {}
    initialState[param] = false;
    const newState = usersReduce(initialState, ActionCreator(true));
    expect(newState[param]).toBe(true);
  })
} 
const unitTestSetSomethingString = (param, ActionCreator, testName) => {
  it(`${testName}`, () => {
    const initialState = {}
    initialState[param] = "";
    const newState = usersReduce(initialState, ActionCreator("TEST"));
    expect(newState[param]).toBe("TEST");
  })
}

// Unit tests ------------------------------

it('correct following user', () => {
  const initialState = {
    users: [
      {
        name: "handa",
        id: 27245,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null
        },
        status: null,
        followed: false
      },
      {
        name: "Vitalik88",
        id: 27244,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null
        },
        status: null,
        followed: true
      },
    ],
  }
  const newState = usersReduce(initialState, followActionCreator(27245));
  expect(newState).toStrictEqual({
    users: [
      {
        name: "handa",
        id: 27245,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null
        },
        status: null,
        followed: true
      },
      {
        name: "Vitalik88",
        id: 27244,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null
        },
        status: null,
        followed: true
      },
    ],
  })
})
it('correct unfollowing user', () => {
  const initialState = {
    users: [
      {
        name: "handa",
        id: 27245,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null
        },
        status: null,
        followed: false
      },
      {
        name: "Vitalik88",
        id: 27244,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null
        },
        status: null,
        followed: true
      },
    ],
  }
  const newState = usersReduce(initialState, unfollowActionCreator(27244));
  expect(newState).toStrictEqual({
    users: [
      {
        name: "handa",
        id: 27245,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null
        },
        status: null,
        followed: false
      },
      {
        name: "Vitalik88",
        id: 27244,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null
        },
        status: null,
        followed: false
      },
    ],
  })
})
it('correct set users', () => {
  const initialState = {
    users: []
  };
  const newState = usersReduce(initialState, setUsersActionCreator([{
    name: "handa",
    id: 27245,
    uniqueUrlName: null,
    photos: {
      small: null,
      large: null
    },
    status: null,
    followed: false
  }]));
  expect(newState).toStrictEqual({users: [{
    name: "handa",
    id: 27245,
    uniqueUrlName: null,
    photos: {
      small: null,
      large: null
    },
    status: null,
    followed: false
  }]})
})

unitTestSetSomethingInt("currentPage", setCurrentPageActionCreator, "correct set current page");
unitTestSetSomethingInt("totalCount", setTotalCountActionCreator, "correct set total count");
unitTestSetSomethingBool("isFetching", setIsFetchingActionCreator, "correct set is fetching");
unitTestSetSomethingBool("onlyFriends", setOnlyFriendsActionCreator, "correct set only friends");
unitTestSetSomethingString("term", setTermActionCreator, "correct set term");