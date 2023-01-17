import React from "react";
import { reduxForm } from "redux-form";
import Preloader from "../Common/Preloader/Preloader";
import styles from "./Profile.module.css";
import AddPostForm from "./Subcomponents/AddPostForm/AddPostForm";
import FirstInfo from "./Subcomponents/FistInfo/FirstInfo";
import Post from "./Subcomponents/Post/Post";
import SecondInfo from "./Subcomponents/SecondInfo/SecondInfo";

const AddPostFormRedux = reduxForm({form:"addPost"})(AddPostForm)

const Profile = (props) => {
  document.title = "Профиль - Russogram";
  const postsElements = props.data.postsData.posts.map((post) => (
    <Post data={post}></Post>
  ));

  if (props.profile === null) {
    return <Preloader></Preloader>;
  }
  const onSubmit = (formData) =>{
    props.onPostSend(formData.message);
  }
  return (
    <section className={styles.profile}>
      <FirstInfo
        onUpdateStatus={props.onUpdateStatus}
        data={props.profile}
        authProfileId={props.authProfileId}
        status={props.data.status}
      ></FirstInfo>
      <div className={styles.line}></div>
      <div className={styles.more}>
        <SecondInfo data={props.profile}></SecondInfo>
        <div className={styles.friends}>
          <h2 className={styles.title}>Друзья</h2>
        </div>
      </div>
      <div className={styles.posts}>
        <h2 className={styles.title}>Мои посты</h2>
        <div className={styles.postsContainer}>
          <div className={styles.postsEditor}>
            <AddPostFormRedux onSubmit={onSubmit}></AddPostFormRedux>
          </div>
          {postsElements}
        </div>
      </div>
    </section>
  );
};
export default Profile;
