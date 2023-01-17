import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

let mapStateToProps = (state) => ({
  isAuth: state.authData.isAuth
})

const withAuthRedirect = (Component) => {
  const ComponentContainer = (props) =>{
    if (!props.isAuth) return <Navigate to="/login"></Navigate>
    return <Component></Component>
  }

  return connect(mapStateToProps)(ComponentContainer);
}
export default withAuthRedirect