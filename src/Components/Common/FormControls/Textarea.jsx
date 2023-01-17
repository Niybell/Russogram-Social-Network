import styles from "./Forms.module.css";

const Textarea = ({input, meta, ...props}) => {
  return (
    <div className={styles.errorDiv}>
      <textarea className={meta.error && meta.touched && styles.error} {...input} {...props}></textarea>
      {meta.error && meta.touched && <div className={styles.errorSpan}>{meta.error}</div>}
    </div>
  )
}
export default Textarea;