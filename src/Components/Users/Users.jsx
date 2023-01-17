import styles from "./Users.module.css";
import User from "./Subcomponents/User/User";
import React from "react";
import SearchForm from "./Subcomponents/SearchForm/SearchForm";
import { reduxForm } from "redux-form";

const SearchFormRedux = reduxForm({form:"searchUsers"})(SearchForm);
const Users = (props) => {
  const onSubmit = (formData) => {
    props.onSetTerm(formData.term);
  }
  return (
    <div className={styles.users}>
      <div className={styles.options}>
        <div className={styles.page}>
          Страница {props.data.currentPage} из{" "}
          {Math.ceil(props.data.totalCount / props.data.pageSize)}
        </div>
        <SearchFormRedux onSubmit={onSubmit}></SearchFormRedux>
        {props.isAuth && (
          <div className={styles.onlyFriends}>
            Показывать только друзей
            <input
              type="checkbox"
              name=""
              onChange={props.onlyFriends}
              checked={props.data.onlyFriends}
            />
          </div>
        )}
      </div>
      <div className={styles.container}>
        {props.data.users.map((user) => (
          <User
            onFollow={props.onFollow}
            onUnfollow={props.onUnfollow}
            data={user}
            isAuth={props.isAuth}
          ></User>
        ))}
      </div>
      <nav className={styles.nav}>
        {props.data.currentPage > 1 ? (
          <button onClick={props.beforePage}> ← </button>
        ) : (
          <></>
        )}
        <input type="text" onBlur={props.inputSetPage} />
        {props.data.currentPage <
        Math.ceil(props.data.totalCount / props.data.pageSize) ? (
          <button onClick={props.nextPage}> → </button>
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
};

export default Users;
