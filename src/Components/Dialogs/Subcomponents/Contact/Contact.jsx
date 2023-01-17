import styles from "./Contact.module.css";
import {NavLink} from 'react-router-dom';
const DialogItem = (props) => {
  return (
    <NavLink to={props.data.url} className={styles.item}>
      <div className={styles.avatar}></div>
      <div className={styles.name}>
        <div className={styles.username}>{props.data.username}</div>
        <div className={styles.lastMessage}>{props.data.lastMessage}</div>
      </div>
    </NavLink>
  );
};
export default DialogItem;
