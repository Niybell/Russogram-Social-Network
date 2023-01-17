import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import {
  sendMessageActionCreator,
} from "../../Redux/Reducers/dialogsReduce";
import Dialogs from "./Dialogs";


const mapStateToProps = (state) => {
  return {
    data: state.dialogsData,
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {onMessageSend: sendMessageActionCreator})
)(Dialogs);
