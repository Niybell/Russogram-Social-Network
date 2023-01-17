import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./FirstInfo.module.css";

const FirstInfo = (props) => {
  const [writeMode, setWriteMode] = useState(false);
  const [status, setStatus] = useState(props.status || "");
  const toggleWriteMode = () => {
    setWriteMode(!writeMode);
  };
  const onSetStatus = () => {
    props.onUpdateStatus(status);
    toggleWriteMode();
  };
  const writeStatus = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={styles.firstInfo}>
      <div className={styles.userInfo}>
        <div className={styles.avatarContainer}>
          {!props.data.photos.large ? (
            <div className={styles.defaultAvatar}></div>
          ) : (
            <img
              src={props.data.photos.large}
              alt="ava"
              className={styles.avatar}
            ></img>
          )}
          {props.authProfileId === props.data.userId && (
            <button>
              <NavLink className={styles.editButton} to="/edit-profile">Редактировать профиль</NavLink>
            </button>
          )}
        </div>
        <div className={styles.info}>
          <h2 className={styles.username}>{props.data.fullName}</h2>
          {writeMode && props.data.userId === props.authProfileId ? (
            <div className={styles.writeStatusContainer}>
              <input
                onChange={writeStatus}
                placeholder="Введите новый статус..."
                value={status}
                className={styles.writeStatus}
              ></input>
              <button className={styles.saveButton} onClick={onSetStatus}>
                Сохранить
              </button>
            </div>
          ) : (
            <h4 className={styles.description} onDoubleClick={toggleWriteMode}>
              {props.status || (
                <span
                  onDoubleClick={toggleWriteMode}
                  className={styles.nullStatus}
                >
                  Нет статуса
                </span>
              )}
            </h4>
          )}
        </div>
      </div>
      <div className={styles.counter}>
        <div className={styles.container}>
          <div className={styles.item}>
            <div className={styles.count}>
              0{/* {props.data.statistics.friendsCount} */}
            </div>
            Друзей
          </div>
          <div className={styles.item}>
            <div className={styles.count}>
              0{/* {props.data.statistics.followersCount} */}
            </div>
            Подписчиков
          </div>
          <div className={styles.item}>
            <div className={styles.count}>
              0{/* {props.data.statistics.subscribersCount} */}
            </div>
            Подписок
          </div>
        </div>
      </div>
    </div>
  );
};
export default FirstInfo;
