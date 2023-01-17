import { NavLink } from "react-router-dom";
import styles from "./User.module.css";

const User = (props) => {
  const follow = () => props.onFollow(props.data.id);
  const unfollow = () => props.onUnfollow(props.data.id);

  return (
    <div className={styles.item}>
      <NavLink to={`/profile/id${props.data.id}`}>
        {props.data.photos.small === null ? (
          <div className={styles.defaultAvatar}></div>
        ) : (
          <img
            src={props.data.photos.small}
            className={styles.avatar}
            alt="ава"
          ></img>
        )}
        <div className={styles.username}>{props.data.name}</div>
        {/* <div className={styles.lastOnline}>
          {" "}
          {props.data.lastOnline === "Онлайн" ? "" : "Был в сети: "}{" "}
          {props.data.lastOnline}
        </div> */}
        {/* <div className={styles.location}>{props.data.location}</div> */}
      </NavLink>
      <div className={styles.mainInfo}>
        {props.isAuth && (
          <button
            onClick={props.data.followed ? unfollow : follow}
            className={styles.followOrUnfollow}
          >
            {props.data.followed ? "-" : "+"}
          </button>
        )}
        <div className={styles.status}>{props.data.status}</div>
      </div>
    </div>
  );
};
export default User;
