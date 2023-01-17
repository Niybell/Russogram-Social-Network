import React from "react";
import { reduxForm } from "redux-form";
import styles from "./Dialogs.module.css";
import Contact from "./Subcomponents/Contact/Contact";
import Header from "./Subcomponents/Header/Header";
import Message from "./Subcomponents/Message/Message";
import SendMessageForm from "./Subcomponents/SendMessageForm/SendMessageForm";

const Dialogs = (props) => {
  document.title = "Сообщения - Russogram";

  const dialogsElements = props.data.contacts.map((dialog) => (
    <Contact data={dialog}></Contact>
  ));
  const messageElements = props.data.messages.id1.map((message) => (
    <Message data={message}></Message>
  ));

  const onSubmit = (formData) => {
    props.onMessageSend(formData.message);
  };
  return (
    <div className={styles.dialogs}>
      <div className={styles.contacts}>{dialogsElements}</div>
      <div className={styles.messages}>
        <Header data={props.data.contacts[0]}></Header>
        <div className={styles.messagesContent}>{messageElements}</div>
        <SendMessageFormRedux onSubmit={onSubmit}></SendMessageFormRedux>
      </div>
    </div>
  );
};
const SendMessageFormRedux = reduxForm({ form: "writeMessage" })(
  SendMessageForm
);
export default Dialogs;
