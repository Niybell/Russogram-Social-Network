import { reduxForm } from "redux-form";
import EditProfileForm from "./EditProfileForm";
import styles from './EditProfile.module.css'
import { compose } from "redux";
import { connect } from "react-redux";
import { updateProfile } from "../../Redux/Reducers/profileReduce";
import withAuthRedirect from "../../HOC/withAuthRedirect";

const EditProfile = (props) => {
  const onSubmit = (formData) => {
    debugger
    props.onUpdateProfile({
      userId: props.id,
      fullName: formData.fullname,
      github: formData.github,
      vk: formData.vk,
      youtube: formData.youtube,
      website: formData.website
    })
  }
  return (
    <div className={styles.editProfile}>
      <h1 className={styles.title}>Редактировать профиль</h1>
      <div className={styles.line}></div>
      <EditProfileFormRedux onSubmit={onSubmit}></EditProfileFormRedux>
    </div>
  );
}
const mapStateToProps = (state) => ({
  id: state.authData.id
})

const EditProfileFormRedux = reduxForm({form:"editProfile"})(EditProfileForm)  
export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {onUpdateProfile: updateProfile}),
)(EditProfile);