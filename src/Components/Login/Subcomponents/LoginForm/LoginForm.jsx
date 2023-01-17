import styles from "./LoginForm.module.css";
import { Field } from "redux-form";
import {
  invalidEmail,
  minLenght,
  requiredField,
} from "../../../../Utils/Validators";
import Input from "../../../Common/FormControls/Input";

const LoginForm = (props) => {
  const minLenght3 = minLenght(3);
  return (
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="email"
          placeholder="Введите email..."
          component={Input}
          validate={[requiredField, invalidEmail]}
        ></Field>
      </div>
      <div>
        <Field
          type="password"
          name="password"
          placeholder="Введите пароль..."
          component={Input}
          validate={[requiredField, minLenght3]}
        ></Field>
      </div>
      <div className={styles.checkboxContainer}>
        <Field name="rememberMe" type="checkbox" component="input"></Field>
        <div>Запомнить</div>
      </div>
      {props.error && <div className={styles.commonError}>{props.error}</div>}
      <button>Войти</button>
      {props.captchaUrl && (
        <div>
          <img src={props.captchaUrl} alt="captcha" />
          <Field
            name="captcha"
            placeholder="Введите капчу..."
            component={Input}
            validate={[requiredField]}
          ></Field>
        </div>
      )}
    </form>
  );
};
export default LoginForm;
