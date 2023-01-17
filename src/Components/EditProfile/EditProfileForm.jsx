import { Field } from "redux-form";
import { requiredField } from "../../Utils/Validators";
import Input from "../Common/FormControls/Input";
import styles from "./EditProfile.module.css";
const EditProfileForm = (props) => {
  return (
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <div>
        Полное имя: <Field component="input" maxLength="20" validate={[requiredField]} name="fullname"></Field>
      </div>
      <div>
        Github: <Field component="input" maxLength="50" validate={[requiredField]} name="github"></Field>
      </div>
      <div>
        Youtube: <Field component="input" maxLength="50" validate={[requiredField]} name="youtube"></Field>
      </div>
      <div>
        Website: <Field component="input" maxLength="50" validate={[requiredField]} name="website"></Field>
      </div>
      <div>
        VK: <Field component="input" maxLength="50" validate={[requiredField]} name="vk"></Field>
      </div>
      <div>
        <button>Сохранить</button>
      </div>
    </form>
  );
};

export default EditProfileForm;
