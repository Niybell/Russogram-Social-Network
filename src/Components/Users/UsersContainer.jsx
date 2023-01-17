import { connect } from "react-redux";
import {
  follow,
  getUsers,
  setCurrentPageActionCreator,
  setOnlyFriendsActionCreator,
  setTermActionCreator,
  setTotalCountActionCreator,
  unfollow,
} from "../../Redux/Reducers/usersReduce";
import React, { useEffect } from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

const UsersAPIContainer = (props) => {
  document.title = "Друзья - Russogram";
  useEffect(() => {
    props.onGetUsers(
      props.data.pageSize,
      props.data.currentPage,
      props.data.onlyFriends,
      props.data.term
    );
  }, []);
  const beforePage = () => {
    props.onSetCurrentPage(props.data.currentPage - 1);
    props.onGetUsers(
      props.data.pageSize,
      props.data.currentPage - 1,
      props.data.onlyFriends,
      props.data.term
    );
  };
  const nextPage = () => {
    props.onSetCurrentPage(props.data.currentPage + 1);
    props.onGetUsers(
      props.data.pageSize,
      props.data.currentPage + 1,
      props.data.onlyFriends,
      props.data.term
    );
  };
  const inputSetPage = (e) => {
    if (
      !isNaN(Number(e.target.value)) &&
      e.target.value.trim() !== "" &&
      Number(e.target.value) >= 1 &&
      Number(e.target.value) <=
        Math.ceil(props.data.totalCount / props.data.pageSize)
    ) {
      props.onSetCurrentPage(Number(e.target.value));
      props.onGetUsers(
        props.data.pageSize,
        Number(e.target.value),
        props.data.onlyFriends,
        props.data.term
      );
    }
  };
  const onlyFriends = (e) => {
    if (props.data.onlyFriends) props.onSetOnlyFriends(false);
    else props.onSetOnlyFriends(true);
    props.onGetUsers(
      props.data.pageSize,
      1,
      !props.data.onlyFriends,
      props.data.term
    );
    props.onSetCurrentPage(1);
  };
  const setTerm = (term) => {
    props.onSetTerm(term);
    props.onGetUsers(
      props.data.pageSize,
      props.data.currentPage,
      props.data.onlyFriends,
      term
    );
  };
  return (
    <>
      {props.data.isFetching ? (
        <Preloader></Preloader>
      ) : (
        <Users
          data={props.data}
          onFollow={props.onFollow}
          onUnfollow={props.onUnfollow}
          beforePage={beforePage}
          inputSetPage={inputSetPage}
          nextPage={nextPage}
          onlyFriends={onlyFriends}
          isAuth={props.isAuth}
          onSetTerm={setTerm}
        ></Users>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.usersData,
    isAuth: state.authData.isAuth,
  };
};

const UsersContainer = connect(mapStateToProps, {
  onFollow: follow,
  onUnfollow: unfollow,
  onSetUsersCount: setTotalCountActionCreator,
  onSetCurrentPage: setCurrentPageActionCreator,
  onSetOnlyFriends: setOnlyFriendsActionCreator,
  onSetTerm: setTermActionCreator,

  onGetUsers: getUsers,
})(UsersAPIContainer);
export default UsersContainer;
