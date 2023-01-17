import styles from "./Post.module.css";

const Post = props => {
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <div className={styles.avatar}></div>
        <h2 className={styles.username}>{props.data.author}</h2>
        <h5 className={styles.date}>{props.data.date}</h5>
      </div>
      <h3 className={styles.message}>
        {props.data.message}
      </h3>
      <div className={styles.feetback}>
        <div className={styles.likesCount}>Лайки {props.data.likesCount}</div>
        <div className={styles.dislikesCount}>Дизлайки {props.data.dislikesCount}</div>
      </div>
    </div>
  );
};
export default Post;
