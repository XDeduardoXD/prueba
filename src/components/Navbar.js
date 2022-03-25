import { useDispatch, useSelector } from "react-redux"
import {NavLink} from "react-router-dom"
import { startLogout } from "../actions/auth";

export const Navbar = () => {
    const {email} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(startLogout())
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">IoT App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')} to= '/home'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')} to= '/acerca'>Acerca de</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="text-left">
                    <span>{email}</span>
                    <button onClick={handleLogout} className="btn">Cerar sesión</button>
                </div>
            </div>
        </nav>
    )
}