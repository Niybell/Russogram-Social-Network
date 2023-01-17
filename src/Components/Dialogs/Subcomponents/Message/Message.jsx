import React from "react";
import styles from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={`${styles.item} ${props.data.author === "me" ? styles.me : styles.notme}`}>
      <div className={styles.authorInfo}>
        <div className={`${styles.avatar} ${props.data.author === "me" ? styles.me : styles.notme}`}></div>
        <div className={`${styles.username} ${props.data.author === "me" ? styles.me : styles.notme}`}>
          {props.data.author}
        </div>
      </div>
      <div className={`${styles.messageContainer} ${props.data.author === "me" ? styles.me : styles.notme}`}>
        <div className={`${styles.message} ${props.data.author === "me" ? styles.me : styles.notme}`}>{props.data.message}</div>
        <div className={`${styles.time} ${props.data.author === "me" ? styles.me : styles.notme}`}>
          {props.data.time}
        </div>
      </div>
    </div>
  );
};

export default Message;
