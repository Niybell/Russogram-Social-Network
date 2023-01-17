import { Field } from "redux-form";
import styles from "./SendMessageForm.module.css";

const SendMessageForm = (props) => {
  return (
    <form className={styles.inputMessage} onSubmit={props.handleSubmit}>
      <Field name="message" component="textarea" placeholder="Введите сообщение..."></Field>
      <button>Send</button>
    </form>
  );
};

export default SendMessageForm;
