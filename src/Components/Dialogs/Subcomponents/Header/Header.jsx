import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.dialogHeader}>
      <div className={styles.avatar}></div>
      <div className={styles.username}>{props.data.username}</div>
      <div className={styles.status}>{props.data.status}</div>
    </header>
  );
};
export default Header;