import {
  addPostActionCreator,
  getProfile,
  getProfileStatus,
  updateProfileStatus,
} from "../../Redux/Reducers/profileReduce";
import Profile from "./Profile";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import { compose } from "redux";

const ProfileAPIContainer = (props) => {
  useEffect(() => {
    const id = props.router.params.userId.split("id")[1];
    props.onGetProfile(id);
    props.onGetStatus(id);
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [props.router.params.userId]);
  return (
    <Profile
      data={props.data}
      profile={props.profile}
      onPostSend={props.onPostSend}
      authProfileId={props.authProfileId}
      onUpdateStatus={props.onUpdateStatus}
    ></Profile>
  );
};

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

const mapStateToProps = (state) => {
  return {
    data: state.profileData,
    profile: state.profileData.profile,
    authProfileId: state.authData.id,
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    onPostSend: addPostActionCreator,
    onGetProfile: getProfile,
    onGetStatus: getProfileStatus,
    onUpdateStatus: updateProfileStatus,
  }),
  withRouter
)(ProfileAPIContainer);
