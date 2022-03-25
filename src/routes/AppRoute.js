import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { DashboardRoute } from "./DashboardRoute"
import { firebase } from "../firebase/firebaseConfig"
import { login } from "../actions/auth"
import { PublicRoute } from "./PublicRoute"
import { PrtivateRoute } from "./PrivateRoute"

export const AppRoute = () => {
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.email))
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        })
    },
        [dispatch, setIsLoggedIn, setChecking])
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <PublicRoute isAuth={isLoggedIn}><LoginPage /></PublicRoute>
                } />
                <Route path='/*' element={<PrtivateRoute isAuth={(isLoggedIn)}><DashboardRoute /></PrtivateRoute>} />
            </Routes>
        </BrowserRouter>
    )
}