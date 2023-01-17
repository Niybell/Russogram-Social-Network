import { connect } from "react-redux";
import Sidebar from "./Sidebar";

const mapStateToProps = (state) => {
  return {
    id: state?.authData?.id
  }
}
const SidebarContainer = connect(mapStateToProps, {})(Sidebar);
export default SidebarContainer