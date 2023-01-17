import { Field } from "redux-form";
import { maxLenght, requiredField } from "../../../../Utils/Validators";
import styles from "./AddPostForm.module.css";

const maxLenght1000 = maxLenght(1000);

const AddPostForm = (props) => {
  return (
    <form className={styles.postsEditor} onSubmit={props.handleSubmit}>
      <div>
        <Field className={styles.createNewPost} component="textarea" name="message" validate={[requiredField, maxLenght1000]}></Field>
      </div>
      <div className={styles.tools}>
        <button className={styles.public}>Создать пост</button>
        <div className={styles.textDecoration}>
          <button>
            <b>B</b>
          </button>
          <button>
            <i>I</i>
          </button>
          <button className={styles.underline}>U</button>
          <button className={styles.linethrough}>L</button>
        </div>
      </div>
    </form>
  );
};
export default AddPostForm;
