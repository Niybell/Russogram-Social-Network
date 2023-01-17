import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

let mapStateToProps = (state) => ({
  isAuth: state.authData.isAuth,
  userId: state.authData.id
})

const withAuthRedirect = (Component) => {
  const ComponentContainer = (props) =>{
    if (props.isAuth) return <Navigate to={`/profile/id${props.userId}`}></Navigate>
    return <Component></Component>
  }

  return connect(mapStateToProps)(ComponentContainer);
}
export default withAuthRedirect