import styles from "./Forms.module.css";

const Input = ({input, meta, ...props}) => {
  return (
    <div className={styles.errorDiv}>
      <input className={meta.error && meta.touched && styles.error} {...input} {...props}></input>
      {meta.error && meta.touched && <div className={styles.errorSpan}>{meta.error}</div>}
    </div>
  )
}
export default Input;