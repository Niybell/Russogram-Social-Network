import styles from "./Friend.module.css";

const Friends = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.avatar}></div>
      <div className={styles.friendName}>{props.data.username}</div>
    </div>
  );
};

export default Friends;
