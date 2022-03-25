import { Navigate } from "react-router-dom"

export const PrtivateRoute = ({isAuth, children}) => {
    return isAuth ? children : <Navigate to='/' />
}