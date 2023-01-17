import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm } from "redux-form";
import withNotAuthRedirect from "../../HOC/withNotAuthRedirect";
import { logIn } from "../../Redux/Reducers/authReduce";
import styles from "./Login.module.css";
import LoginForm from "./Subcomponents/LoginForm/LoginForm";

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
const Login = (props) => {
  document.title = "Вход - Russogram";
  const onSubmit = (formData) => {
    props.onLogIn(formData.email, formData.password, formData.rememberMe, formData.captcha || null);
  };
  return (
    <div className={styles.login}>
      <div className={styles.content}>
        <h1 className={styles.title}>Войти </h1>
        <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}></LoginReduxForm>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  captchaUrl: state.authData.captchaUrl
});


export default compose(
  withNotAuthRedirect,
  connect(mapStateToProps, {
    onLogIn: logIn,
  })
)(Login);
