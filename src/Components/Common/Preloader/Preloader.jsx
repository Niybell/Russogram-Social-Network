import styles from "./Preloader.module.css";
import preloader from "../../../Assets/images/preloader.gif";

const Preloader = () => {
  return (
    <div className={styles.container}>
      <img className={styles.preloader} src={preloader} alt="Preloader"></img>
    </div>
  );
};
export default Preloader;
