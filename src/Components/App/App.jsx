import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderContainer from "../Header/HeaderContainer";
import SidebarContainer from "../Sidebar/SidebarContainer";
import Login from "../Login/Login";
import { connect } from "react-redux";
import React, { Suspense, useEffect } from "react";
import { initial } from "../../Redux/Reducers/authReduce";
import Preloader from "../Common/Preloader/Preloader";
import EditProfile from "../EditProfile/EditProfile";

const ProfileContainer = React.lazy(() => import("../Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("../Dialogs/DialogsContainer"));
const TrendsContainer = React.lazy(() => import("../Trends/TrendsContainer"));
const UsersContainer = React.lazy(() => import("../Users/UsersContainer"));
const SettingsContainer = React.lazy(() => import("../Settings/SettingsContainer"));


const App = (props) => {
  useEffect(() => {
    props.onInitial();
  }, []);
  
  if (!props.initializedAccount) return <Preloader></Preloader>;
  return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderContainer></HeaderContainer>
        <SidebarContainer></SidebarContainer>
        <div className="wrapper-content">
          <Suspense fallback={<Preloader></Preloader>}>
            <Routes>
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/trends/*" element={<TrendsContainer />} />
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/users/*" element={<UsersContainer />} />
              <Route path="/settings/*" element={<SettingsContainer />} />
              <Route path="/login" element={<Login />}></Route>
              <Route path="/edit-profile" element={<EditProfile />}></Route>
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};
const mapStateToProps = (state) => ({
  initializedAccount: state.authData.initializedAccount,
});

export default connect(mapStateToProps, { onInitial: initial })(App);
