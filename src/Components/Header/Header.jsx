import styles from "./Header.module.css";
import logo from "../../Assets/images/russugramlogo.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.title}>
          <img src={logo} alt="Логотип" className={styles.logo} />
          <h2 className={styles.russogram}>Russogram</h2>
        </div>
        <div className={styles.auth}>
          {props.authData.isAuth ? (
            <div className={styles.profileContainer}>
              <NavLink to={`/profile/id${props.authData.id}`} className={styles.NavLink}>
                <div className={styles.avatar}></div>
                {props.authData.login}
              </NavLink>
              <button className={styles.singOut} onClick={props.onLogOut}>Выйти</button>
            </div>
          ) : (
            <div className={styles.profileContainer}>
              <NavLink to="/login" className={styles.singIn}> Войти </NavLink>
              <a href="https://social-network.samuraijs.com/signUp" className={styles.singUp}> Зарегестрироваться </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
