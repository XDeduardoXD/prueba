import { firebase } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { finishLoading, setError, startLoading } from "./ui";

export const login = (uid, email) => ({
    type: types.login,
    payload: {
        uid,
        email
    }
});

export const logout = () => ({
    type: types.logout
});

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading)
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.email));
                dispatch(finishLoading);
            })
            .catch(e => {
                console.log(e);
                dispatch(finishLoading);
                dispatch(setError("Error, verifica tus datos"))
            })
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
    }
}