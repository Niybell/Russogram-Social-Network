import { connect } from "react-redux";
import { logOut } from "../../Redux/Reducers/authReduce";
import Header from "./Header";

const mapStateToProps = (state) => {
  return {
    authData: state.authData,
  };
};

const HeaderContainer = connect(mapStateToProps, {
  onLogOut: logOut
})(Header);
export default HeaderContainer;
