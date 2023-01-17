import { NavLink } from "react-router-dom";
import styles from "./SidebarLink.module.css";

const SidebarLink = (props) => {
  return (
    <NavLink
      to={`/${props.url}`}
      className={({ isActive }) =>
        isActive ? `${styles.item} ${styles.active}` : styles.item
      }
    >
      <div className={styles.ico}></div>
      {props.title}
    </NavLink>
  );
};

export default SidebarLink;
