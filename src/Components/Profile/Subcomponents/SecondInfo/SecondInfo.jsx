import styles from "./SecondInfo.module.css";

const SecondInfo = (props) => {
  return (
    <div className={styles.secondInfo}>
      <div className={styles.item}>
        <span className={styles.key}>Github:</span>
        <span className={styles.value}>{props.data.contacts.github ? props.data.contacts.github : "Нету"}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.key}>Youtube:</span>
        <span className={styles.value}>{props.data.contacts.youtube ? props.data.contacts.youtube : "Нету"}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.key}>Website:</span>
        <span className={styles.value}>{props.data.contacts.website ? props.data.contacts.website : "Нету"}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.key}>Vk:</span>
        <span className={styles.value}>{props.data.contacts.vk ? props.data.contacts.vk : "Нету"}</span>
      </div>
    </div>
  );
};
export default SecondInfo;